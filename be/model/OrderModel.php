<?php
require_once '../../config/database.php';

class OrderModel {
    private $db;
    private $table = '`order`';

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllOrders() {
        $query = "SELECT * FROM $this->table";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        return $stmt->rowCount() > 0 ? $stmt : false;
    }

    public function getOrderById($orderId) {
        $query = "SELECT * FROM $this->table WHERE orderId = ?";
        $stmt = $this->db->prepare($query);
        $stmt->execute([$orderId]);
        return $stmt->rowCount() > 0 ? $stmt : false;
    }

    public function getOrderByUserId($userId) {
        $query = "SELECT * FROM $this->table WHERE userId = ?";
        $stmt = $this->db->prepare($query);
        $stmt->execute([$userId]);
        return $stmt->rowCount() > 0 ? $stmt : false;
    }

    public function createOrder($data) {
        $query = "INSERT INTO $this->table (userId, products, phone_number, email, address, total) 
                  VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $this->db->prepare($query);
        $stmt->execute([
            $data['userId'],
            json_encode($data['products']),
            $data['phoneNumber'],
            $data['email'],
            $data['address'],
            $data['total']
        ]);
        // get insertId
        $orderId = $this->db->lastInsertId();
        return $orderId;
    }

    public function updateOrder($orderId, $data) {
        $query = "UPDATE $this->table SET userId = ?, products = ?, phone_number = ?, email = ?, address = ?, total = ?
                  WHERE orderId = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([
            $data['userId'],
            json_encode($data['products']),
            $data['phone_number'],
            $data['email'],
            $data['address'],
            $data['total'],
            $orderId
        ]);
    }

    public function updateOrderStatus($orderId, $status) {
        if ($status == 'completed') {
            $query = "UPDATE $this->table SET status = ?, completedAt = ?  WHERE orderId = ?";
            $stmt = $this->db->prepare($query);
            return $stmt->execute([$status, date('Y-m-d H:i:s'), $orderId]);
        }
        $query = "UPDATE $this->table SET status = ? WHERE orderId = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([$status, $orderId]);
    }

    public function deleteOrder($orderId) {
        $query = "DELETE FROM $this->table WHERE orderId = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([$orderId]);
    }
}