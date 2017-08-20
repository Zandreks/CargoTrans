<?php
$name =  htmlspecialchars($_POST["name"]);
$email =  htmlspecialchars($_POST["email"]);
$phone = htmlspecialchars($_POST["phone"]);
// настройки для отправки письма
$HTTP_HOST = parse_url('http://'.$_SERVER["HTTP_HOST"]); // не трогать!!!
$HTTP_HOST = str_replace(array("http://","www."),"",$HTTP_HOST['host']); // не трогать!!! вырезает с адреса: "www" для формирования e-mail от которого придёт уведомление

$to = "cargotransastana@mail.ru"; // кому отсылать: адрес e-mail
$from = "test@test.startnext.kz"; // адрес, от которого придёт уведомление, желательно указать существующий ящик на хостинге!
$signature = 'Заявка на обратный звонок'; // подпись в письме
$title = "Заявка на обратный звонок с сайта http://".$_SERVER["HTTP_HOST"];
$body="<h1>Заявка на обратный звонок от  </h1> <br><p>Имя:$name Email:$email Телефон: $phone </p>";
require 'class.phpmailer.php'; // подключаем файл класса для отправки почты
$mail = new PHPMailer();
$mail->From = $from; // адрес, от которого придёт уведомление
$mail->FromName = $signature; // подпись в письме от кого
$mail->AddAddress($to); // кому: адрес e-mail
$mail->IsHTML(true); // выставляем формат письма HTML
$mail->CharSet = 'utf-8'; //кодировка письма
$mail->Subject = $title; // тема письма
$mail->Body = $body;
if(!$mail->Send()) {
    echo'Письмо не отправлено!<br>Ошибка: '.$mail->ErrorInfo;
} else {
    echo'ok';
}
?>
