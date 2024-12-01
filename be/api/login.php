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
        // Parse raw input
        $rawInput = file_get_contents('php://input');
        $data = json_decode($rawInput, true);
        
        $query = "SELECT * FROM user WHERE username = ?";
        $stmt = $conn->prepare($query);
        $stmt->execute([$data['username']]);

        if ($stmt->rowCount() === 0) {
            $response = [
                'status' => 'error',
                'message' => 'User not found'
            ];
            http_response_code(200);
            echo json_encode($response);
            exit();
        }

        $query = "SELECT * FROM user WHERE username = ?";
        $stmt = $conn->prepare($query);
        $stmt->execute([$data['username']]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!password_verify($data['password'], $user['password'])) {
            $response = [
                'status' => 'error',
                'message' => 'Password incorrect'
            ];
            http_response_code(200);
            echo json_encode($response);
            exit();
        }

        $response = [
            'status' => 'success',
            'userId' => $user['userId'],
            'message' => 'Login successful',
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
    // Error handling
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Internal Server Error',
        'details' => $e->getMessage()
    ]);
    exit();
}