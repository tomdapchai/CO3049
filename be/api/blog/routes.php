<?php
require_once '../header.php';
require_once '../../config/database.php';
require_once '../../controller/BlogController.php';

$blogController = new BlogController($conn);

try {
    $method = $_SERVER['REQUEST_METHOD'];
    $rawInput = file_get_contents('php://input');
    $input = json_decode($rawInput, true);

    switch ($method) {
        case 'GET':
            if (isset($_GET['blogId'])) {
                $blogController->getBlogById($_GET['blogId']);
            } else {
                $blogController->getAllBlogs();
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
            $blogController->createBlog($input);
            break;
        case 'PUT':
            if (!isset($_GET['blogId']) && !isset($input)) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Invalid request'
                ]);
                exit();
            }
            if (!isset($_GET['blogId'])) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Blog ID is required'
                ]);
                exit();
            }
            $blogController->updateBlog($_GET['blogId'], $input);
            break;
        case 'DELETE':
            if (!isset($_GET['blogId'])) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Blog ID is required'
                ]);
                exit();
            }
            $blogController->deleteBlog($_GET['blogId']);
            break;
    }
}
catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Internal Server Error',
        'details' => $e->getMessage()
    ]);
}


