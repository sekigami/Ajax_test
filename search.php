<?php
// サーバーサイドの検索処理をシミュレート

if (isset($_GET['keyword'])) {
    $keyword = $_GET['keyword'];
    
    // シミュレートしたデータを返す
    $results = array(
        "Result 1 for $keyword",
        "Result 2 for $keyword",
        "Result 3 for $keyword"
    );

    echo json_encode($results);
}
?>