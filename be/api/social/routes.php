<?php
require_once '../header.php';
require_once '../../controller/SocialController.php';

$socialController = new SocialController($conn);

try {
    $method = $_SERVER['REQUEST_METHOD'];
    $rawInput = file_get_contents('php://input');
    $input = json_decode($rawInput, true);

    switch ($method) {
        case 'GET':
            if (isset($_GET['socialId'])) {
                $socialController->getSocialById($_GET['socialId']);
            } else {
                $socialController->getAllSocials();
            }
            break;
        case 'POST':
            if (!isset($input)) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Invalid JSON input',
                    'data' => $input
                ]);
                exit();
            }
            $socialController->createSocial($input);
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
            $socialController->updateSocial($input);
            break;
        case 'DELETE':
            if (!isset($_GET['socialId'])) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Social media ID is required'
                ]);
                exit();
            }
            $socialController->deleteSocial($_GET['socialId']);
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