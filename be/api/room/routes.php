<?php
require_once '../header.php';
require_once '../../controller/RoomController.php';

$roomController = new RoomController($conn);

try{
    $method = $_SERVER['REQUEST_METHOD'];
    $rawInput = file_get_contents('php://input');
    $input = json_decode($rawInput, true);

    switch($method){
        case 'GET':
            if(isset($_GET['roomId'])){
                $roomController->getRoomById($_GET['roomId']);
            } else {
                $roomController->getAllRooms();
            }
            break;
        case 'POST':
            if(!isset($input)){
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Invalid JSON input',
                    'data' => $input
                ]);
                exit();
            }
            
            // Handle order updates
            if(isset($_GET['action']) && $_GET['action'] == 'reorder') {
                $roomController->updateRoomOrder($input);
            } else {
                $roomController->createRoom($input);
            }
            break;
        case 'PUT':
            if(!isset($input)){
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Invalid request'
                ]);
                exit();
            }
            $roomController->updateRoom($input);
            break;
        case 'DELETE':
            if(!isset($_GET['roomId'])){
                http_response_code(400);
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Room ID is required'
                ]);
                exit();
            }
            $roomController->deleteRoom($_GET['roomId']);
            break;
        default:
            http_response_code(405);
            echo json_encode([
                'status' => 'error',
                'message' => 'Method Not Allowed'
            ]);
            exit();
    }
} catch (Exception $e){
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ]);
    exit();
}