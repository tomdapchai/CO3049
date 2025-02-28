<?php
require_once '../../config/database.php';

class AdModel {
    private $db;
    private $table = 'advertisement';

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAd() {
        $query = "SELECT * FROM $this->table WHERE id = 1";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        return $stmt;
    }


    public function updateAd($data) {
        $query = "UPDATE $this->table SET title = ?,image = ?, link = ?, enable = ? 
                  WHERE id = 1";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([
            $data['title'],
            $data['image'],
            $data['link'],
            $data['enable']
        ]);
    }

}