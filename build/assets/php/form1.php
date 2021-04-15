<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

if(isset($_POST["name"]) && isset($_POST["phone"]) && isset($_POST["mail"]) && isset($_POST["text"]) && isset($_POST["file"])) {
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.yandex.ru';
        $mail->SMTPAuth   = true;
        $mail->Username   = '';
        $mail->Password   = '';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;

        //Recipients
        $mail->setFrom('', '');
        $mail->addAddress('');     // Add a recipient

        // Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'Форма обратной связи';
        $mail->Body    = "
                        <p><b>Имя:</b> ".htmlspecialchars(trim($_POST["name"]))."</p>
                        <p><b>Телефон:</b> ".htmlspecialchars(trim($_POST["phone"]))."</p>
                        <p><b>Email:</b> ".htmlspecialchars(trim($_POST["mail"]))."</p>
                        <p style='white-space: pre-line;'><b>Сообщение:</b> ".htmlspecialchars(trim($_POST["text"]))."</p>
                        ";
		$mail->addAttachment($_POST["file"]);
        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
