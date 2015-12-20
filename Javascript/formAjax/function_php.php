<?php
header('Access-Control-Allow-Origin: *');
$listUser = Array("tam123456789","123");
if($_GET["user"]){
	foreach ($listUser as $key => $username) {
		if($username == $_GET["user"]){
			echo 'Tim thay';
			break;
		}
	}
}
?>