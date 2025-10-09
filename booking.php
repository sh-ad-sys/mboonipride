<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // ✅ include PHPMailer

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Database connection
$host = "localhost";
$dbname = "mboonipride";
$username = "root";
$password = "Shadrack2024.";

try {
    $dsn = "mysql:host=$host;dbname=$dbname;charset=utf8mb4";
    $pdo = new PDO($dsn, $username, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
} catch (PDOException $e) {
    echo json_encode(["success" => false, "message" => "Database error: " . $e->getMessage()]);
    exit();
}

// Read JSON input
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["success" => false, "message" => "Invalid JSON data."]);
    exit();
}

// Extract data
$bookingType = strtolower(trim($data['bookingType'] ?? ''));
$name        = trim($data['name'] ?? '');
$email       = trim($data['email'] ?? '');
$checkIn     = $data['checkIn'] ?? '';
$checkOut    = $data['checkOut'] ?? '';
$roomType    = strtolower(trim($data['roomType'] ?? ''));
$eventType   = strtolower(trim($data['eventType'] ?? ''));

// Validate required fields
if (empty($bookingType) || empty($name) || empty($email) || empty($checkIn) || empty($checkOut)) {
    echo json_encode(["success" => false, "message" => "Missing required fields."]);
    exit();
}

try {
    if ($bookingType === 'room') {
        $eventType = null;
    } elseif ($bookingType === 'event') {
        $roomType = null;
    } else {
        echo json_encode(["success" => false, "message" => "Invalid booking type."]);
        exit();
    }

    // Insert booking
    $stmt = $pdo->prepare("
        INSERT INTO bookings (full_name, email, booking_type, room_type, event_type, check_in, check_out, created_at)
        VALUES (:full_name, :email, :booking_type, :room_type, :event_type, :check_in, :check_out, NOW())
    ");
    $stmt->execute([
        ':full_name'    => $name,
        ':email'        => $email,
        ':booking_type' => $bookingType,
        ':room_type'    => $roomType,
        ':event_type'   => $eventType,
        ':check_in'     => $checkIn,
        ':check_out'    => $checkOut
    ]);

    // ✅ Send email using PHPMailer
    $mail = new PHPMailer(true);
    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'shadrackmutune9@gmail.com'; // your gmail
        $mail->Password = 'rqor ggsn ygzz quzl'; // your generated App Password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Recipients
        $mail->setFrom('shadrackmutune9@gmail.com', 'Mbooni Pride Hotel');
        $mail->addAddress($email, $name);
        $mail->addBCC('shadrackmutune9@gmail.com'); // send copy to manager

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'Booking Confirmation - Mbooni Pride Hotel';
        $mail->Body = "
            <h2>Booking Confirmation</h2>
            <p>Dear <b>$name</b>,</p>
            <p>Thank you for booking with <b>Mbooni Pride Hotel</b>.</p>
            <p><b>Booking Type:</b> " . ucfirst($bookingType) . "<br>
            " . ($bookingType === 'room' ? "<b>Room Type:</b> " . ucfirst($roomType) : "<b>Event Type:</b> " . ucfirst($eventType)) . "<br>
            <b>Check-In:</b> $checkIn<br>
            <b>Check-Out:</b> $checkOut</p>
            <p>We look forward to hosting you.</p>
            <p>— <i>Mbooni Pride Hotel</i></p>
        ";

        $mail->send();
        echo json_encode(["success" => true, "message" => "Booking saved & email sent successfully."]);
    } catch (Exception $e) {
        echo json_encode(["success" => true, "message" => "Booking saved, but email failed: {$mail->ErrorInfo}"]);
    }
} catch (PDOException $e) {
    echo json_encode(["success" => false, "message" => "Error saving booking: " . $e->getMessage()]);
}
?>
