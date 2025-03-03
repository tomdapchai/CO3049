<?php
require_once '../../model/CouponModel.php';

class CouponController {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllCoupons() {
        $couponModel = new CouponModel($this->db);
        $coupons = $couponModel->getAllCoupons();
        $response = [];
        while ($coupon = $coupons->fetch(PDO::FETCH_ASSOC)) {
            $response[] = $coupon;
        }
        echo json_encode(['status' => 'success', 'data' => $response]);
    }

    public function getCouponByCode($code = null) {
        $couponModel = new CouponModel($this->db);
        $coupon = $couponModel->getCouponByCode($code);
        if (!$coupon) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Coupon not found']);
            return;
        }
        echo json_encode(['status' => 'success', 'data' => $coupon->fetch(PDO::FETCH_ASSOC)]);
    }

    public function createCoupon($data) {
        $couponModel = new CouponModel($this->db);
        // check if coupon already exists
        if ($couponModel->getCouponByCode($data['code'])) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Coupon with code '.$data['code'].' already exists']);
            return;
        }

        if ($couponModel->createCoupon($data)) {
            http_response_code(201);
            echo json_encode(['status' => 'success', 'message' => 'Coupon created']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to create coupon']);
        }
    }

    public function updateCoupon($data) {
        $couponModel = new CouponModel($this->db);
        // check if coupon exists
        if (!$couponModel->getCouponByCode($data['code'])) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Coupon not found']);
            return;
        }

        if ($couponModel->updateCoupon($data)) {
            http_response_code(200);
            echo json_encode(['status' => 'success', 'message' => 'Coupon updated']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to update coupon']);
        }
    }

    public function deleteCoupon($code) {
        $couponModel = new CouponModel($this->db);
        // check if coupon exists
        if (!$couponModel->getCouponByCode($code)) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Coupon not found']);
            return;
        }
        
        if ($couponModel->deleteCoupon($code)) {
            http_response_code(200);
            echo json_encode(['status' => 'success', 'message' => 'Coupon deleted']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to delete coupon']);
        }
    }
    
    public function validateCoupon($data) {
        $couponModel = new CouponModel($this->db);
        $coupon = $couponModel->validateCoupon($data['code']);
        if (!$coupon) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Invalid coupon code']);
            return;
        }
        $couponData = $coupon->fetch(PDO::FETCH_ASSOC);
        echo json_encode(['status' => 'success', 'data' => [
            'valid' => true,
            'discount' => $couponData['discount']
        ]]);
    }
}
