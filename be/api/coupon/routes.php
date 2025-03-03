<?php
require_once '../header.php';
require_once '../../controller/CouponController.php';

$couponController = new CouponController($conn);

try {
    $method = $_SERVER['REQUEST_METHOD'];
    $rawInput = file_get_contents('php://input');
    $input = json_decode($rawInput, true);

    switch($method) {
        case 'GET':
            if(isset($_GET['code'])) {
                $couponController->getCouponByCode($_GET['code']);
            } else {
                $couponController->getAllCoupons();
            }
            break;
        case 'POST':
            if(!isset($input)) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Invalid JSON input',
                    'data' => $input
                ]);
                exit();
            }
            
            // Handle validation
            if(isset($_GET['action']) && $_GET['action'] == 'validate') {
                $couponController->validateCoupon($input);
            } else {
                $couponController->createCoupon($input);
            }
            break;
        case 'PUT':
            if(!isset($input)) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Invalid request'
                ]);
                exit();
            }
            $couponController->updateCoupon($input);
            break;
        case 'DELETE':
            if(!isset($_GET['code'])) {
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Coupon code is required'
                ]);
                exit();
            }
            $couponController->deleteCoupon($_GET['code']);
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
