<?php
require_once '../../config/database.php';

class SocialModel {
    private $db;
    private $table = 'social_media';

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllSocials() {
        $query = "SELECT * FROM $this->table";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    public function getSocialById($socialId) {
        $query = "SELECT * FROM $this->table WHERE id = ?";
        $stmt = $this->db->prepare($query);
        $stmt->execute([$socialId]);
        return $stmt->rowCount() > 0 ? $stmt : false;
    }

    public function createSocial($data) {
        $query = "INSERT INTO $this->table (id, name, image, info) 
                  VALUES (?, ?, ?, ?)";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([
            $data['id'],
            $data['name'],
            $data['image'],
            $data['info']
        ]);
    }

    public function updateSocial($data) {
        $query = "UPDATE $this->table SET name = ?, image = ?, info = ? 
                  WHERE id = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([
            $data['name'],
            $data['image'],
            $data['info'],
            $data['id']
        ]);
    }

    public function deleteSocial($socialId) {
        $query = "DELETE FROM $this->table WHERE id = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([$socialId]);
    }
}