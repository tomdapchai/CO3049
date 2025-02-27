<?php
require_once '../header.php';
require_once '../../controller/CategoryController.php';

$categoryController = new CategoryController($conn);

try{
    $method = $_SERVER['REQUEST_METHOD'];
    $rawInput = file_get_contents('php://input');
    $input = json_decode($rawInput, true);

    switch($method){
        case 'GET':
            if(isset($_GET['categoryId'])){
                $categoryController->getCategoryById($_GET['categoryId']);
            } else {
                $categoryController->getAllCategories();
            }
            break;
        case 'POST':
            if(!isset($input)){
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Invalid JSON input',
                    'data' => $input
                ]);
                exit();
            }
            $categoryController->createCategory($input);
            break;
        case 'PUT':
            if(!isset($_GET['categoryId']) || !isset($input)){
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Invalid request'
                ]);
                exit();
            }
            $categoryController->updateCategory($_GET['categoryId'], $input);
            break;
        case 'DELETE':
            if(!isset($_GET['categoryId'])){
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Category ID is required'
                ]);
                exit();
            }
            $categoryController->deleteCategory($_GET['categoryId']);
            break;
        default:
            http_response_code(405);
            echo json_encode([
                'status' => 'error',
                'message' => 'Method Not Allowed'
            ]);
            exit();
    }
} catch (Exception $e){
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ]);
    exit();
}