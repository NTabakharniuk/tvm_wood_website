<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer(true);
$mail->CharSet = "utf-8";

$name = $_POST['name'];
$phone = $_POST['phone'];
$model = $_POST['model'];
$material = $_POST['material'];
$address = $_POST['adress'];
$region = $_POST['region'];
$city = $_POST['city'];
$department = $_POST['department'];
$comment = $_POST['comment'];

$mail->isSMPT();
$mail->Host = 'smpt.gmail.com';
$mail->SMPTPaut = true;
$mail->Username = 'kamila134vor@gmail.com';
$mail->Password ='$arbus098arbus';
$mail->SMTPSecure = 'ss1';
$mail->Port = 465;

$mail->SetFrom('kamila134vor@gmail.com');
$mail->addAddress('ntabaharnuk@gmail.com');
$mail->isHTML(true);

$mail->Subject = 'Замовлення з TVM.Wood';
$mail->Body = '' .$name . ' замовив  його номер телефону' .$number';


if(!$mail->send()) {
    echo 'Error';
} else{
    header('location: thank-you.html')
}

?> 