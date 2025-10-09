<?php
// contact.php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // ✅ Make sure this file exists in backend/vendor

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// ✅ Database connection
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
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Database connection failed: " . $e->getMessage()]);
    exit();
}

// ✅ Read JSON from frontend
$input = file_get_contents("php://input");
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid JSON input"]);
    exit();
}

// ✅ Extract data
$full_name = trim($data['full_name'] ?? '');
$email     = trim($data['email'] ?? '');
$message   = trim($data['message'] ?? '');

// ✅ Validation
if (empty($full_name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Missing required fields"]);
    exit();
}

try {
    // ✅ Insert into database
    $stmt = $pdo->prepare("
        INSERT INTO messages (full_name, email, message, created_at)
        VALUES (:full_name, :email, :message, NOW())
    ");
    $stmt->execute([
        ':full_name' => $full_name,
        ':email' => $email,
        ':message' => $message
    ]);

    // ✅ Send email notification using PHPMailer
    $mail = new PHPMailer(true);
    try {
        // SMTP config
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'shadrackmutune9@gmail.com'; // your Gmail
        $mail->Password = 'rqor ggsn ygzz quzl'; // your App Password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Recipients
        $mail->setFrom('shadrackmutune9@gmail.com', 'Mbooni Pride Hotel');
        $mail->addAddress('shadrackmutune9@gmail.com', 'Manager'); // send to hotel manager
        $mail->addReplyTo($email, $full_name); // reply goes to sender

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Message from Contact Form';
        $mail->Body = "
            <h3>New Message Received</h3>
            <p><b>Name:</b> $full_name</p>
            <p><b>Email:</b> $email</p>
            <p><b>Message:</b><br>$message</p>
            <hr>
            <p>— Sent from Mbooni Pride Hotel Website</p>
        ";

        $mail->send();

        echo json_encode(["success" => true, "message" => "Message sent successfully."]);
    } catch (Exception $e) {
        echo json_encode([
            "success" => true,
            "message" => "Message saved, but email failed to send: {$mail->ErrorInfo}"
        ]);
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Database error: " . $e->getMessage()]);
}
?>
