<?php
require_once '../../config/database.php';

class RoomModel {
    private $db;
    private $table = 'room';

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllRooms() {
        $query = "SELECT * FROM $this->table";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    public function getRoomById($roomId) {
        $query = "SELECT * FROM $this->table WHERE room_id = ?";
        $stmt = $this->db->prepare($query);
        $stmt->execute([$roomId]);
        return $stmt->rowCount() > 0 ? $stmt : false;
    }

    public function createRoom($data) {
        $query = "INSERT INTO $this->table (room_id, name, image) 
                  VALUES (?, ?, ?)";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([
            $data['roomId'],
            $data['name'],
            $data['image']
        ]);
    }

    public function updateRoom($data) {
        $query = "UPDATE $this->table SET name = ?, image = ? 
                  WHERE room_id = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([
            $data['name'],
            $data['image'],
            $data['roomId']
        ]);
    }

    public function deleteRoom($roomId) {
        $query = "DELETE FROM $this->table WHERE room_id = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([$roomId]);
    }
}