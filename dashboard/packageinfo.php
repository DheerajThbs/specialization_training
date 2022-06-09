<?php

$con =mysqli_connect('localhost','root');
// if($con)
// {
//     echo "connection succesful";
// }
// else
// {
//     echo "connection failed";
// }

mysqli_select_db($con, 'thbsparkdata');
$name = $_POST['name'];
$email = $_POST['email'];
$phoneno = $_POST['phoneno'];
$date = $_POST['date'];
$package = $_POST['package'];
$price = $_POST['price'];

$query = " insert into packageinfodata (name, email, phoneno, date, package, price)
value ('$name', '$email', '$phoneno', '$date', '$package', '$price') ";

//echo "$query";

mysqli_query($con, $query );
header('Location: index.php');
exit;













?>