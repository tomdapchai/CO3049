<?php
require_once '../../config/database.php';

class ExtensionModel {
    private $db;
    private $table = 'extension';

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllExtensions() {
        $query = "SELECT * FROM $this->table";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    public function getExtensionById($extensionId) {
        $query = "SELECT * FROM $this->table WHERE id = ?";
        $stmt = $this->db->prepare($query);
        $stmt->execute([$extensionId]);
        return $stmt->rowCount() > 0 ? $stmt : false;
    }

    public function updateExtensionStatus($data) {
        $query = "UPDATE $this->table SET status_install = ?, status_enable = ? WHERE id = ?";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([
            $data['status_install'],
            $data['status_enable'],
            $data['id']
        ]);
    }
}