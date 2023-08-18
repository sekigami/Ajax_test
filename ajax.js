$(document).ready(function() {
  // リアルタイム検索機能の実装
  $("#search-input").on("input", function() {
    var keyword = $(this).val();
    $.ajax({
      url: "search.php", // サーバーサイドの検索処理を行うファイル
      type: "GET",
      data: { keyword: keyword },
      dataType: "json",
      success: function(data) {
        $("#search-results").empty();
        data.forEach(function(result) {
          $("#search-results").append("<li>" + result + "</li>");
        });
      }
    });
  });

  // タスクリストの非同期追加の実装
  $("#add-task-button").click(function() {
    var newTask = $("#task-input").val();
    $.ajax({
      url: "add_task.php", // サーバーサイドのタスク追加処理を行うファイル
      type: "POST",
      data: { task: newTask },
      success: function(response) {
        $("#task-list").append("<li>" + newTask + "</li>");
        $("#task-input").val("");
      }
    });
  });
});
