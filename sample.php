<?php
if(isset($_GET['your_name']))
{
	$name = htmlspecialchars($_GET['your_name'], ENT_QUOTES, "UTF-8");
	echo 'こんにちは、' . $name . 'さん。';
}
else
	echo '名前を入力してください。';
?>