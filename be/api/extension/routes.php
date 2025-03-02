<?php
require_once '../header.php';
require_once '../../controller/ExtensionController.php';

$extensionController = new ExtensionController($conn);

try {
    $method = $_SERVER['REQUEST_METHOD'];
    $rawInput = file_get_contents('php://input');
    $input = json_decode($rawInput, true);

    switch ($method) {
        case 'GET':
            if (isset($_GET['extensionId'])) {
                $extensionController->getExtensionById($_GET['extensionId']);
            } else {
                $extensionController->getAllExtensions();
            }
            break;
        case 'PUT':
            if (!isset($input)) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Invalid request'
                ]);
                exit();
            }
            $extensionController->updateExtensionStatus($input);
            break;
        default:
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
        'message' => $e->getMessage()
    ]);
    exit();
}