<?php 
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$comment = $_POST['user_comment'];

$mail->isSMTP();
$mail->Host = 'mail.hosting.reg.ru';
$mail->SMTPAuth = true;
$mail->Username = 'robot@wantweb.site'; // логин от почты с которой будут отправляться письма
$mail->Password = 'bgbzst-2143'; // пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('robot@wantweb.site'); // От кого будет уходить письмо
$mail->addAddress('wantwebsite@mail.ru'); // Кому будет уходить письмо
$mail->isHTML(true);

$body = '<h2>Заявка на обратную связь</h2>';
$body.= '<p><b>Имя: </b>'.$name.'</p>';
$body.= '<p><b>Телефон: </b>'.$phone.'</p>';
$body.= '<p><b>Комментарий: </b>'.$comment.'</p>';

$mail->Subject = 'Заявка с сайта';
$mail->Body    = $body;

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: success.html');
}
?>