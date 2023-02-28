<?php
extract($_POST);

//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
  if(isset($_POST['send'])){
    
//Create an instance; passing `true` enables exceptions
 $mail = new PHPMailer(true);

 try {
     //Server settings
   // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
     $mail->isSMTP();                                            //Send using SMTP
     $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
     $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
     $mail->Username   = 'amazingcreativeworld@gmail.com';                     //SMTP username
     $mail->Password   = 'lnhnirwabhmwjdok';                               //SMTP password
     $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
     $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
 
     //Recipients
     $mail->setFrom('amazingcreativeworld@gmail.com', 'Amazing Creative World');
     $mail->addAddress('amazingcreativeworld@gmail.com');     //Add a recipient

 /*   if($_FILES['pancard']['name']!=null){
    if(move_uploaded_file($_FILES['pancard']['tmp_name'],"uploads/{$_FILES['pancard']['name']}")){
      $mail->addAttachment("uploads/{$_FILES['pancard']['name']}");    //Optional name
    }  
   } */

     //Content
     $mail->isHTML(true);                                  //Set email format to HTML
     $mail->Subject = 'Amazing Creative World';
     $mail->Body    = 'First Name :' .$name.' ' .$lname.'<br> Phone :'  .$phone. ' <br> E-Mail :' .$email. '<br> Gender :'  .$gender. '<br> Pancard No. :'  .$pancard ;
   //  $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
 
     $mail->send();
     echo '<script>alert("Your message has been sent successfully");</script>';
     echo '<script> window.location.href =  "https://www.youtube.com/" ; </script>'; 
 } catch (Exception $e) {
     echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
 }

  }

?>