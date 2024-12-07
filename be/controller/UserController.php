<?php
require_once '../../model/UserModel.php';

class UserController {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllUsers() {
        $userModel = new UserModel($this->db);
        $users = $userModel->getAllUsers();
        if (!$users) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'No users found']);
            return;
        }
        $response = [];
        while ($user = $users->fetch(PDO::FETCH_ASSOC)) {
            $response[] = $user;
        }
        echo json_encode(['status' => 'success', 'data' => $response]);
    }

    public function getUserById($userId) {
        $userModel = new UserModel($this->db);
        $user = $userModel->getUserById($userId);
        if (!$user) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'User not found']);
            return;
        }
        echo json_encode(['status' => 'success', 'data' => $user->fetch(PDO::FETCH_ASSOC)]);
    }

    public function getUserByUsername($username) {
        $userModel = new UserModel($this->db);
        $user = $userModel->getUserByUsername($username);
        if (!$user) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'User not found']);
            return;
        }
        echo json_encode(['status' => 'success', 'data' => $user->fetch(PDO::FETCH_ASSOC)]);
    }

    public function updateUsername($userId, $data) {
        $userModel = new UserModel($this->db);
        // check if user exists
        if (!$userModel->getUserById($userId)) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'User not found']);
            return;
        }

        if ($userModel->updateUsername($userId, $data)) {
            echo json_encode(['status' => 'success', 'message' => 'Username updated']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to update username']);
        }
    }

    public function updateUserInfo($userId, $data) {
        $userModel = new UserModel($this->db);
        // check if user exists
        if (!$userModel->getUserById($userId)) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'User not found']);
            return;
        }

        if ($userModel->updateUserInfo($userId, $data)) {
            echo json_encode(['status' => 'success', 'message' => 'User updated']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to update user']);
        }
    }

    public function updateUserPassword($userId, $data) {
        $userModel = new UserModel($this->db);
        // check if user exists
        if (!$userModel->getUserById($userId)) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'User not found']);
            return;
        }

        if ($userModel->updateUserPassword($userId, $data)) {
            echo json_encode(['status' => 'success', 'message' => 'Password updated']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to update password']);
        }
    }

    public function banUser($userId) {
        $userModel = new UserModel($this->db);
        // check if user exists
        if (!$userModel->getUserById($userId)) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'User not found']);
            return;
        }

        if ($userModel->banUser($userId)) {
            echo json_encode(['status' => 'success', 'message' => 'User banned']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to ban user']);
        }
    }

    public function unbanUser($userId) {
        $userModel = new UserModel($this->db);
        // check if user exists
        if (!$userModel->getUserById($userId)) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'User not found']);
            return;
        }

        if ($userModel->unbanUser($userId)) {
            echo json_encode(['status' => 'success', 'message' => 'User unbanned']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to unban user']);
        }
    }

    public function deleteUser($userId) {
        $userModel = new UserModel($this->db);
        // check if user exists
        if (!$userModel->getUserById($userId)) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'User not found']);
            return;
        }

        if ($userModel->deleteUser($userId)) {
            echo json_encode(['status' => 'success', 'message' => 'User deleted']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to delete user']);
        }
    }

    public function updateCart($userId, $cart) {
        $userModel = new UserModel($this->db);
        // check if user exists
        if (!$userModel->getUserById($userId)) {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'User not found']);
            return;
        }

        if ($userModel->updateCart($userId, $cart)) {
            echo json_encode(['status' => 'success', 'message' => 'Cart updated']);
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Failed to update cart']);
        }
    }
}