<?php
// HEADER: THIS IS REQUIRED TO BE AT THE TOP OF EVERY API PAGE
$http_origin = $_SERVER['HTTP_ORIGIN'] ?? '';

header("Access-Control-Allow-Origin: $http_origin");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// END HEADER
?>