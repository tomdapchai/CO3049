<?php
require_once '../../config/database.php';

class CouponModel {
    private $db;
    private $table = 'coupon';

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllCoupons() {
        $query = "SELECT * FROM $this->table ORDER BY code";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    public function getCouponByCode($code) {
        $query = "SELECT * FROM $this->table WHERE code = ?";
        $stmt = $this->db->prepare($query);
        $stmt->execute([$code]);
        return $stmt->rowCount() > 0 ? $stmt : false;
    }

    public function createCoupon($data) {
        $query = "INSERT INTO $this->table (code, discount) VALUES (?, ?)";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([
            $data['code'],
            $data['discount']
        ]);
    }

    public function updateCoupon($data) {
        $query = "UPDATE $this->table SET discount = ? WHERE code = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([
            $data['discount'],
            $data['code']
        ]);
    }

    public function deleteCoupon($code) {
        $query = "DELETE FROM $this->table WHERE code = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([$code]);
    }
    
    public function validateCoupon($code) {
        $query = "SELECT * FROM $this->table WHERE code = ?";
        $stmt = $this->db->prepare($query);
        $stmt->execute([$code]);
        return $stmt->rowCount() > 0 ? $stmt : false;
    }
}
