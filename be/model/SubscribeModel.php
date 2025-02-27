<?php
require_once '../../config/database.php';

class SubscribeModel {
    private $db;
    private $table = 'subcriber';

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllSubscribes() {
        $query = "SELECT * FROM $this->table";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    public function createSubscribe($data) {
        $query = "INSERT INTO $this->table (email) 
                  VALUES (?)";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([
            $data['email']
        ]);
    }

    public function deleteSubscribe($subcribeId) {
        $query = "DELETE FROM $this->table WHERE subcribe_id = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([$subcribeId]);
    }
}