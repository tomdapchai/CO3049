<?php
require_once '../../model/RoomModel.php';
class RoomController {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllRooms() {
        $roomModel = new RoomModel($this->db);
        $rooms = $roomModel->getAllRooms();
        $response = [];
        while ($room = $rooms->fetch(PDO::FETCH_ASSOC)) {
            $response[] = $room;
        }
        echo json_encode(['status' => 'success', 'data' => $response]);
    }

    public function getRoomById($roomId = null) {
        $roomModel = new RoomModel($this->db);
        $room = $roomModel->getRoomById($roomId);
        if (!$room) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Room not found']);
            return;
        }
        echo json_encode(['status' => 'success', 'data' => $room->fetch(PDO::FETCH_ASSOC)]);
    }

    public function createRoom($data) {
        $roomModel = new RoomModel($this->db);
        // check if room already exists
        if ($roomModel->getRoomById($data['roomId'])) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Room with id '.$data['roomId'].' already exists']);
            return;
        }

        if ($roomModel->createRoom($data)) {
            http_response_code(201);
            echo json_encode(['status' => 'success', 'message' => 'Room created']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to create room']);
        }
    }

    public function updateRoom($data) {
        $roomModel = new RoomModel($this->db);
        // check if room exists
        if (!$roomModel->getRoomById($data['roomId'])) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Room not found']);
            return;
        }

        if ($roomModel->updateRoom($data)) {
            http_response_code(200);
            echo json_encode(['status' => 'success', 'message' => 'Room updated']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to update room']);
        }
    }

    public function deleteRoom($roomId) {
        $roomModel = new RoomModel($this->db);
        // check if room exists
        if (!$roomModel->getRoomById($roomId)) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Room not found']);
            return;
        }
        
        if ($roomModel->deleteRoom($roomId)) {
            http_response_code(200);
            echo json_encode(['status' => 'success', 'message' => 'Room deleted']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to delete room']);
        }
    }
    
    public function updateRoomOrder($rooms) {
        $roomModel = new RoomModel($this->db);
        if ($roomModel->updateRoomOrder($rooms)) {
            http_response_code(200);
            echo json_encode(['status' => 'success', 'message' => 'Room order updated']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to update room order']);
        }
    }
}