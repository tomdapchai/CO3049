<?php
require_once '../header.php';
require_once '../../controller/OrderController.php';
require_once '../../config/database.php';

$orderController = new OrderController($conn);

try {
    $method = $_SERVER['REQUEST_METHOD'];
    $rawData = file_get_contents('php://input');
    $input = json_decode($rawData, true);

    switch ($method) {
        case 'GET':
            if (isset($_GET['orderId'])) {
                $orderController->getOrderById($_GET['orderId']);
            } else if (isset($_GET['userId'])) {
                $orderController->getOrderByUserId($_GET['userId']);
            } else {
                $orderController->getAllOrders();
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
            $orderController->createOrder($input);
            break;
        case 'PUT':
            if (!isset($_GET['orderId']) && !isset($input)) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Invalid request'
                ]);
                exit();
            }
            if (!isset($_GET['orderId'])) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Order ID is required'
                ]);
                exit();
            }
            if (isset($_GET['status']) && !in_array($_GET['status'], ['pending', 'completed', 'cancelled'])) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Invalid status'
                ]);
                exit();
            }
            if (isset($_GET['status'])) {
                $orderController->updateOrderStatus($_GET['orderId'], $_GET['status']);
                break;
            }
            $orderController->updateOrder($_GET['orderId'], $input);
            break;
        case 'DELETE':
            if (!isset($_GET['orderId'])) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Order ID is required'
                ]);
                exit();
            }
            $orderController->deleteOrder($_GET['orderId']);
            break;
        default:
            http_response_code(400);
            echo json_encode([
                'status' => 'error',
                'message' => 'Invalid request'
            ]);
            exit();
    }
}
catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ]);
    exit();
}