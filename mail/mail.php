
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
        // $mail->Host = 'smtp.mailtrap.io';
        // $mail->SMTPAuth = true;
        // $mail->Port = 2525;
        // $mail->Username = 'c6b0b7a2c423a4';
        // $mail->Password = '7cd136bf961c30';    
        
        $mail->Host = 'smtp.office365.com';
        $mail->SMTPAuth = true;
        $mail->Port = 587;
        $mail->Username = 'contactNAP@petromin.com';
        $mail->Password = 'Cuq83683';    
    
        //Recipients
        $mail->setFrom('contactNAP@petromin.com', 'Contact National Auto Parts - Website');

        $mail->addAddress('sksoury@petromin.com');     //Add a recipient
        $mail->addAddress('jason.peter@petromin.com');     //Add a recipient
        
        $mail->addAddress('abdulhadi@brackets-tech.com');     //Add a recipient
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
    
        echo 'Thank you, one of our representatives will get back to you as soon as possible';
    } catch (Exception $e) {

        // Mailer Error: {$mail->ErrorInfo}
        echo "Message could not be sent. Please try again later.";
    }
}

