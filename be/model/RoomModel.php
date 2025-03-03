<?php
require_once '../../config/database.php';

class RoomModel {
    private $db;
    private $table = 'room';

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllRooms() {
        $query = "SELECT * FROM $this->table ORDER BY display_order ASC";
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
        // Get the highest display_order
        $query = "SELECT MAX(display_order) as max_order FROM $this->table";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        $maxOrder = $row['max_order'] ?? 0;
        
        $query = "INSERT INTO $this->table (room_id, name, image, display_order) 
                  VALUES (?, ?, ?, ?)";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([
            $data['roomId'],
            $data['name'],
            $data['image'],
            $maxOrder + 1
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
    
    public function updateRoomOrder($rooms) {
        $this->db->beginTransaction();
        try {
            foreach ($rooms as $room) {
                $query = "UPDATE $this->table SET display_order = ? WHERE room_id = ?";
                $stmt = $this->db->prepare($query);
                $stmt->execute([$room['displayOrder'], $room['roomId']]);
            }
            $this->db->commit();
            return true;
        } catch (Exception $e) {
            $this->db->rollBack();
            return false;
        }
    }
}