<?php
// HEADER: THIS IS REQUIRED TO BE AT THE TOP OF EVERY API PAGE
require_once '../../config/database.php';
require_once '../header.php';
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
                'message' => 'Incorrect username or password'
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
                'message' => 'Incorrect username or password'
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