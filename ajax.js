var map;

function initMap() {
    // 初期の地図を表示
    map = L.map("map").setView([37.7749, -122.4194], 12); // 例: サンフランシスコの座標

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap",
    }).addTo(map);

    // 地図の移動・ズーム終了時に更新を実行
    map.on("moveend", function () {
        updateMap();
    });
}

function updateMap() {
    // 地図の中心座標とズームレベルを取得
    var center = map.getCenter();
    var zoom = map.getZoom();

    $.ajax({
        url: "get_map_data.php", // サーバーサイドの地図データ取得処理を行うファイル
        type: "GET",
        data: { center: center, zoom: zoom },
        dataType: "json",
        success: function (data) {
            // 既存のマーカーをクリア
            map.eachLayer(function (layer) {
                if (layer instanceof L.Marker) {
                    map.removeLayer(layer);
                }
            });

            // 新しい地図データを利用してマーカーを表示
            data.forEach(function (markerData) {
                var marker = L.marker([markerData.lat, markerData.lng]).addTo(map);
                marker.bindPopup(markerData.name); // ポップアップに情報を表示
            });
        },
    });
}
