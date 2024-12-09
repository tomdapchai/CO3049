<?php
require_once '../header.php';
require_once '../../controller/UserController.php';

$userController = new UserController($conn);

try {
    $method = $_SERVER['REQUEST_METHOD'];
    $rawInput = file_get_contents('php://input');
    $input = json_decode($rawInput, true);

    switch ($method) {
        case 'GET':
            if (isset($_GET['userId'])) {
                $userController->getUserById($_GET['userId']);
            } 
            else if (isset($_GET['username'])) {
                $userController->getUserByUsername($_GET['username']);
            }
            else {
                $userController->getAllUsers();
            }
            break;
        case 'POST':
            if (!isset($_GET['type'])) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Invalid request'
                ]);
                exit();
            }
            else if ($_GET['type'] == 'ban') {
                $userController->banUser($_GET['userId']);
            }
            else if ($_GET['type'] == 'unban') {
                $userController->unbanUser($_GET['userId']);
            }
            else {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Invalid request'
                ]);
                exit();
            }
            break;
        case 'PUT':
            if (!isset($_GET['userId']) || !isset($input)) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Invalid request'
                ]);
                exit();
            }
            if (!isset($_GET['userId'])) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'User ID is required'
                ]);
                exit();
            }
            if (!isset($input)) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Invalid JSON input',
                    'data' => $input
                ]);
                exit();
            }
            if (isset($_GET['updateType'])) {
                if ($_GET['updateType'] == 'password') {
                    $userController->updateUserPassword($_GET['userId'], $input);
                    break;
                }
                else if ($_GET['updateType'] == 'username') {
                    $userController->updateUsername($_GET['userId'], $input);
                    break;
                }
                else if ($_GET['updateType'] == 'cart') {
                    $userController->updateCart($_GET['userId'], $input);
                    break;
                }
                else if ($_GET['updateType'] == 'adminPassword') {
                    $userController->adminUpdateUserPassword($_GET['userId'], $input);
                    break;
                }
                else {
                    http_response_code(400);
                    echo json_encode([
                        'status' => 'error',
                        'message' => 'Invalid update type'
                    ]);
                    exit();
                }
            }
            $userController->updateUserInfo($_GET['userId'], $input);
            break;
        case 'DELETE':
            if (!isset($_GET['userId'])) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'User ID is required'
                ]);
                exit();
            }
            $userController->deleteUser($_GET['userId']);
            break;
        default:
            http_response_code(405);
            echo json_encode([
                'status' => 'error',
                'message' => 'Method Not Allowed'
            ]);
            exit();
    }
}
catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'An error occurred'
    ]);
    exit();
}