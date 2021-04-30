<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['mail'];
$text = $_POST['text'];
$phone= $_POST['phone'];
$file1 = $_FILES['file1'];
$file2 = $_FILES['file2'];
$file3 = $_FILES['file3'];

// Формирование самого письма
$title = "Письмо с univerum.tech";
$body = "
<b>Имя:</b> $name<br>
<b>Почта:</b> $email<br><br>
<b>Телефон:</b> $phone<br><br>
<b>Задача:</b><br>$text
";



// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'mail.univerum.com'; // SMTP сервера вашей почты
    $mail->Username   = 'mailer@univerum.com'; // Логин на почте
    $mail->Password   = 'Tc#x^n}3Kjgh'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('mail@univerum.com', 'mailer@univerum.com'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('mail@univerum.com');

    
    // // Настройки вашей почты
    // $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера вашей почты
    // $mail->Username   = 'rudenscky2011'; // Логин на почте
    // $mail->Password   = 'nzxrrbghyjlhkbqv'; // Пароль на почте
    // $mail->SMTPSecure = 'ssl';
    // $mail->Port       = 465;
    // $mail->setFrom('rudenscky2011@yandex.ru', 'univerum'); // Адрес самой почты и имя отправителя

    // // Получатель письма
    // $mail->addAddress('rudenscky2011@yandex.ru');

    // Прикрипление файлов к письму
if (!empty($file1['name'][0])) {
    for ($ct1 = 0; $ct1 < count($file1['tmp_name']); $ct1++) {
        $uploadfile1 = tempnam(sys_get_temp_dir(), sha1($file1['name'][$ct1]));
        $filename1 = $file1['name'][$ct1];
        if (move_uploaded_file($file1['tmp_name'][$ct1], $uploadfile1)) {
            $mail->addAttachment($uploadfile1, $filename1);
            $rfile1[] = "Файл $filename1 прикреплён";
        } else {
            $rfile1[] = "Не удалось прикрепить файл $filename1";
        }
    }   
}

if (!empty($file2['name'][0])) {
    for ($ct2 = 0; $ct2 < count($file2['tmp_name']); $ct2++) {
        $uploadfile2 = tempnam(sys_get_temp_dir(), sha1($file2['name'][$ct2]));
        $filename2 = $file2['name'][$ct2];
        if (move_uploaded_file($file2['tmp_name'][$ct2], $uploadfile2)) {
            $mail->addAttachment($uploadfile2, $filename2);
            $rfile2[] = "Файл $filename2 прикреплён";
        } else {
            $rfile2[] = "Не удалось прикрепить файл $filename2";
        }
    }   
}

if (!empty($file3['name'][0])) {
    for ($ct3 = 0; $ct3 < count($file3['tmp_name']); $ct3++) {
        $uploadfile3 = tempnam(sys_get_temp_dir(), sha1($file3['name'][$ct3]));
        $filename3 = $file3['name'][$ct3];
        if (move_uploaded_file($file3['tmp_name'][$ct3], $uploadfile3)) {
            $mail->addAttachment($uploadfile3, $filename3);
            $rfile3[] = "Файл $filename3 прикреплён";
        } else {
            $rfile3[] = "Не удалось прикрепить файл $filename3";
        }
    }   
}

$recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
    $recaptcha_secret = '6LecjL0aAAAAAMQkvVE2Uz4eqoUYnm37UcO67i-z';
    $recaptcha_response = $_POST['recaptcha_response'];
 
    // Отправляем POST запрос и декодируем результаты ответа
    $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
    $recaptcha = json_decode($recaptcha);
 
    // Принимаем меры в зависимости от полученного результата
    if ($recaptcha->score >= 0.5) {
      // Отправка сообщения
      $mail->isHTML(true);
      $mail->Subject = $title;
      $mail->Body = $body; 
      
    } else {
      $status = "Сообщение не было отправлено. Причина ошибки: не пройдена проверка!";
    }


   

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);