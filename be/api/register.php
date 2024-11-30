<?php
require_once 'config/database.php';
// Get the origin from the request
$http_origin = $_SERVER['HTTP_ORIGIN'] ?? '*';

// List of allowed origins (replace with your frontend URL)
$allowed_origins = [
    'http://localhost:3000',  // Next.js default dev server
    'http://127.0.0.1:3000',
    'http://localhost:8000',
    'http://127.0.0.1:8000',
];

// Check if the origin is in the allowed list
if (in_array($http_origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $http_origin");
}

// Other necessary CORS headers
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Rest of your previous index.php code remains the same
try {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Parse raw input
        $rawInput = file_get_contents('php://input');
        $data = json_decode($rawInput, true);

        // Extract route from URL
        $route = trim($_SERVER['REQUEST_URI'], '/');

        // Simply echo back what we received
        $response = [
            'status' => 'success',
            'message' => 'Data received successfully',
            'route' => $route,
            'receivedData' => [
                'email' => $data['email'] ?? null,
                'password' => $data['password'] ?? null,
                'type' => str_contains($route, 'admin') ? 'admin' : 'user'
            ]
        ];

        http_response_code(200);
        echo json_encode($response);
        exit();
    } else {
        // Handle other methods
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