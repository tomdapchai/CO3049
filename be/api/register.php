<?php
// HEADER: THIS IS REQUIRED TO BE AT THE TOP OF EVERY API PAGE
require_once '../config/database.php';
$http_origin = $_SERVER['HTTP_ORIGIN'] ?? '*';

$allowed_origins = [
    'http://localhost:3000', 
    'http://127.0.0.1:3000',
    'http://localhost:8000',
    'http://127.0.0.1:8000',
];

if (in_array($http_origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $http_origin");
}

header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}
// END HEADER

try {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $rawInput = file_get_contents('php://input');
        $data = json_decode($rawInput, true);

        $checkQuery = "SELECT * FROM user WHERE username = ?";
        $checkStmt = $conn->prepare($checkQuery);
        $checkStmt->execute([$data['username']]);

        // Check if user already existed
        if ($checkStmt->rowCount() > 0) {
            $response = [
                'status' => 'error',
                'message' => 'User already exists'
            ];
            http_response_code(200);
            echo json_encode($response);
            exit();
        }
        
        // New user, proceed with registration
        $hashedPassword = password_hash($data['password'], PASSWORD_BCRYPT);
        $query = "INSERT INTO user (username, password) VALUES (?, ?)";
        $stmt = $conn->prepare($query);
        $stmt->execute([$data['username'], $hashedPassword]);
        
        // Get the last inserted ID
        $userId = $conn->lastInsertId();

        $response = [
            'userId' => $userId,
            'status' => 'success',
            'message' => 'User registered successfully',
            'receivedData' => [
                'username' => $data['username'] ?? null,
                'password' => $data['password'] ?? null,
            ]
        ];
        
        http_response_code(200);
        echo json_encode($response);
        exit();
    } else {
        http_response_code(405);
        echo json_encode([
            'status' => 'error',
            'message' => 'Method Not Allowed'
        ]);
        exit();
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Internal Server Error',
        'details' => $e->getMessage()
    ]);
    exit();
}