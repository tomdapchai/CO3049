<?php
require_once '../../config/database.php';
require_once '../../model/OrderModel.php';

class OrderController {
    private $db;
    private $orderModel;

    public function __construct($db) {
        $this->db = $db;
        $this->orderModel = new OrderModel($db);
    }

    public function getAllOrders() {
        $orders = $this->orderModel->getAllOrders();
        if ($orders) {
            $orders_arr = array();
            while ($row = $orders->fetch(PDO::FETCH_ASSOC)) {
                extract($row);
                $order_item = array(
                    'orderId' => $orderId,
                    'userId' => $userId,
                    'products' => json_decode($products),
                    'phone_number' => $phone_number,
                    'address' => $address,
                    'status' => $status
                );
                array_push($orders_arr, $order_item);
            }
            echo json_encode($orders_arr);
        } else {
            echo json_encode(array('message' => 'No orders found'));
        }
    }

    public function getOrderById($orderId) {
        $order = $this->orderModel->getOrderById($orderId);
        if ($order) {
            $order_arr = array();
            while ($row = $order->fetch(PDO::FETCH_ASSOC)) {
                extract($row);
                $order_item = array(
                    'orderId' => $orderId,
                    'userId' => $userId,
                    'products' => json_decode($products),
                    'phone_number' => $phone_number,
                    'address' => $address,
                    'status' => $status
                );
                array_push($order_arr, $order_item);
            }
            echo json_encode($order_arr);
        } else {
            echo json_encode(array('message' => 'No order found'));
        }
    }

    public function getOrderByUserId($userId) {
        $order = $this->orderModel->getOrderByUserId($userId);
        if ($order) {
            $order_arr = array();
            while ($row = $order->fetch(PDO::FETCH_ASSOC)) {
                extract($row);
                $order_item = array(
                    'orderId' => $orderId,
                    'userId' => $userId,
                    'products' => json_decode($products),
                    'phone_number' => $phone_number,
                    'address' => $address,
                    'status' => $status
                );
                array_push($order_arr, $order_item);
            }
            echo json_encode($order_arr);
        } else {
            echo json_encode(array('message' => 'No order found'));
        }
    }
}