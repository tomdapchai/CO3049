<?php
require_once '../../config/database.php';

class SiteInfoModel {
    private $db;
    private $table = 'website_info';

    public function __construct($db) {
        $this->db = $db;
    }

    public function getSiteInfo() {
        $query = "SELECT * FROM $this->table WHERE aboutID = 1";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        return $stmt->rowCount() > 0 ? $stmt : false;
    }

    public function updateSiteInfo($data) {
        $query = "UPDATE $this->table SET about = ?, about_original = ?, phone_number = ?, address = ?, email = ?, logo = ?, home_banner = ?, theme_color = ?
                  WHERE aboutID = 1";
        $stmt = $this->db->prepare($query);
        return $stmt->execute([
            $data['about'],
            $data['aboutOriginal'],
            $data['phoneNumber'],
            $data['address'],
            $data['email'],
            $data['logo'],
            $data['homeBanner'],
            $data['themeColor']
        ]);
    }
}