<?php
// サーバーサイドのタスク追加処理をシミュレート

if (isset($_POST['task'])) {
    $newTask = $_POST['task'];
    
    // シミュレートしたデータを返す
    $response = "Task '$newTask' added successfully.";

    echo $response;
}
?>