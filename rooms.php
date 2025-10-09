<?php
// rooms.php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// --- Database Connection ---
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
    echo json_encode(["error" => "Database connection failed: " . $e->getMessage()]);
    exit();
}

// --- Handle Filtering ---
$type = isset($_GET['type']) ? strtolower(trim($_GET['type'])) : null;

try {
    if ($type) {
        // Only allow valid room types for security
        $validTypes = ['single', 'twin', 'deluxe'];
        if (!in_array($type, $validTypes)) {
            http_response_code(400);
            echo json_encode(["error" => "Invalid room type"]);
            exit();
        }

        $stmt = $pdo->prepare("SELECT room_id, room_number, room_type, status, image_url, created_at 
                               FROM rooms 
                               WHERE room_type = :type");
        $stmt->execute([":type" => $type]);
    } else {
        // Fetch all rooms
        $stmt = $pdo->query("SELECT room_id, room_number, room_type, status, image_url, created_at FROM rooms");
    }

    $rooms = $stmt->fetchAll();

    echo json_encode([
        "success" => true,
        "count" => count($rooms),
        "rooms" => $rooms
    ]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Query failed: " . $e->getMessage()]);
}
?>
