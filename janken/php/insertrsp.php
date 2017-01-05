<?php

$connection = mysqli_connect('127.0.0.1','root','admin',"janken") or die("Error " . mysqli_error($connection));

# Escape user inputs for security
$janken_name = mysqli_real_escape_string($connection, $_POST['janken_name']);
$janken_score = mysqli_real_escape_string($connection, $_POST['janken_score']);
$janken_token = mysqli_real_escape_string($connection, $_POST['janken_token']);

$sql = "INSERT INTO new_score (id, name, score, token)
VALUES (NULL, '$janken_name', '$janken_score', '$janken_token')";

if(mysqli_query($connection, $sql)){
    echo "Records added successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($connection);
}

// close connection
mysqli_close($connection);
?>

