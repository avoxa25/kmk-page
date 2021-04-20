<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);

try {
  $mail->setFrom('abdullaev.vladimir@ya.ru', 'Обратная связь');
  $mail->addAddress('abdullaev.vladimir@ya.ru');

  $mail->isHTML(true);
  $mail->Subject = trim($_POST["form_subject"]);

  foreach ($_POST as $key => $value) {
    if ($value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject") {
      $body .= "
			" . (($c = !$c) ? '<tr>' : '<tr style="background-color: #f8f8f8;">') . "
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>
			";
    }
  }

  $mail->Body = $body;

  $mail->send();
  $message = 'Сообщение отправлено!';
} catch (Exception $e) {
  $message = "Ошибка: {$mail->ErrorInfo}";
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);