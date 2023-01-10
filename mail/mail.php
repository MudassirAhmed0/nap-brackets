
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'php_mailer/src/Exception.php';
require 'php_mailer/src/PHPMailer.php';
require 'php_mailer/src/SMTP.php';



//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);


$data = $_GET;



if ( 
    isset($data['message_subject']) && 
    isset($data['name']) && 
    isset($data['email']) && 
    isset($data['message']) 
) {
    try {

        //Server settings
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->isSMTP();
        $mail->Host = 'smtp.mailtrap.io';
        $mail->SMTPAuth = true;
        $mail->Port = 2525;
        $mail->Username = 'c6b0b7a2c423a4';
        $mail->Password = '7cd136bf961c30';                                
    
        //Recipients
        $mail->setFrom('from@example.com', 'Mailer');
        $mail->addAddress('contactnap@petromin.com', 'Contact Nap');     //Add a recipient
        // $mail->addReplyTo('info@example.com', 'Information');
        // $mail->addCC('cc@example.com');
        // $mail->addBCC('bcc@example.com');
    
    
        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'Get in Touch NAP landing page';

        $message = '';
        $message .= '<strong>Message Subject: </strong>'  . $data['message_subject']  . '<br />';
        $message .= '<strong>Name: </strong>' . $data['name']   . '<br />';
        $message .= '<strong>Email: </strong>'  . $data['email']  . '<br />';
        $message .= '<strong>Message: </strong>'  . $data['message'];

        $mail->Body = $message;

        $mail->send();
    
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}

