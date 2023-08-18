<?php
// サーバーサイドの地図データ取得処理をシミュレート

// 受け取った中心座標とズームレベルを取得
$centerLat = isset($_GET['center']['lat']) ? floatval($_GET['center']['lat']) : 0;
$centerLng = isset($_GET['center']['lng']) ? floatval($_GET['center']['lng']) : 0;
$zoom = isset($_GET['zoom']) ? intval($_GET['zoom']) : 12;

// サンプルの地図データを生成
$mapData = array();
for ($i = 0; $i < 10; $i++) {
    $lat = $centerLat + rand(-1, 1) * 0.1; // 中心座標から少しズレた位置に生成
    $lng = $centerLng + rand(-1, 1) * 0.1; // 中心座標から少しズレた位置に生成
    $name = "Marker $i";
    $mapData[] = array('lat' => $lat, 'lng' => $lng, 'name' => $name);
}

// JSON形式でデータを返す
header('Content-Type: application/json');
echo json_encode($mapData);
