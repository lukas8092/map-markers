<?php

if(isset($_POST["cord"])){
    $cord = $_POST["cord"];
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "maps";

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }



  $stmt = $conn->prepare("INSERT INTO markers (cord1) VALUES (?)");
  $stmt->bind_param("s", $cord);

  $stmt->execute();

}

?>