<?php
require_once '../../config/database.php';

class UserModel {
    private $db;
    private $table = 'user';

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllUsers() {
        $query = "SELECT * FROM $this->table";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        return $stmt->rowCount() > 0 ? $stmt : false;
    }

    public function getUserById($userId) {
        $query = "SELECT * FROM $this->table WHERE userId = ?";
        $stmt = $this->db->prepare($query);
        $stmt->execute([$userId]);
        return $stmt->rowCount() > 0 ? $stmt : false;
    }

    public function getUserByUsername($username) {
        $query = "SELECT * FROM $this->table WHERE username = ?";
        $stmt = $this->db->prepare($query);
        $stmt->execute([$username]);
        return $stmt->rowCount() > 0 ? $stmt : false;
    }

    public function updateUsername($userId, $data) {
        // check if currentUsername is valid, and new username already exists
        $query = "SELECT * FROM $this->table WHERE userId = ? AND username = ?";
        $stmt = $this->db->prepare($query);
        $stmt->execute([$userId, $data['username']]);
        if ($stmt->rowCount() === 0) {
            return false;
        }

        $query = "SELECT * FROM $this->table WHERE username = ?";
        $stmt = $this->db->prepare($query);
        $stmt->execute([$data['newUsername']]);
        if ($stmt->rowCount() > 0) {
            return false;
        }

        $query = "UPDATE $this->table SET username = ? WHERE userId = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([$data['newUsername'], $userId]);
    }

    public function updateUserInfo($userId, $data) {
        $query = "UPDATE $this->table SET email = ?, name = ?, phone_number = ?, street = ?, city = ?
                  WHERE userId = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([
            $data['email'],
            $data['name'],
            $data['phone_number'],
            $data['street'],
            $data['city'],
            $userId
        ]);
    }

    public function updateUserPassword($userId, $data) {
        // check if current password is correct
        $query = "SELECT * FROM $this->table WHERE userId = ?";
        $stmt = $this->db->prepare($query);
        $stmt->execute([$userId]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        if (!password_verify($data['password'], $user['password'])) {
            return false;
        }

        // hash password
        $newPassword = password_hash($data['newPassword'], PASSWORD_BCRYPT);

        $query = "UPDATE $this->table SET password = ? WHERE userId = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([$newPassword, $userId]);
    }

    public function adminUpdateUserPassword($userId, $newPassword) {
        $newPassword = password_hash($newPassword, PASSWORD_BCRYPT);
        $query = "UPDATE $this->table SET password = ? WHERE userId = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([$newPassword, $userId]);
    } 

    public function banUser($userId) {
        $query = "UPDATE $this->table SET status = 'banned' WHERE userId = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([$userId]);
    }

    public function unbanUser($userId) {
        $query = "UPDATE $this->table SET status = 'active' WHERE userId = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([$userId]);
    }

    public function deleteUser($userId) {
        $query = "DELETE FROM $this->table WHERE userId = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([$userId]);
    }

    public function updateCart($userId, $cart) {
        $query = "UPDATE $this->table SET cart = ? WHERE userId = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([json_encode($cart), $userId]);
    }

}

