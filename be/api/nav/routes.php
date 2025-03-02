<?php
require_once '../header.php';
require_once '../../controller/NavController.php';

$navController = new NavController($conn);

try {
    $method = $_SERVER['REQUEST_METHOD'];
    $rawInput = file_get_contents('php://input');
    $input = json_decode($rawInput, true);

    switch ($method) {
        case 'GET':
            if (isset($_GET['id'])) {
                $navController->getNavLinkById($_GET['id']);
            } else {
                $navController->getAllNavLinks();
            }
            break;
        case 'POST':
            if (!isset($input)) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Invalid JSON input'
                ]);
                exit();
            }
            $navController->createNavLink($input);
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
            
            // Check if this is a reorder operation
            if (isset($input[0]) && is_array($input[0])) {
                $navController->updateNavLinkOrder($input);
            } else {
                $navController->updateNavLink($input);
            }
            break;
        case 'DELETE':
            if (!isset($_GET['id'])) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Navigation link ID is required'
                ]);
                exit();
            }
            $navController->deleteNavLink($_GET['id']);
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