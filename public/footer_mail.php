<?php

if(count($_POST)>0){
  $to = "jasonwei0224@gmail.com";
  $subject = "New Submission Toronto TAIWANfest Website Contact Form";
  $headers  = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
  $message = '<html><body>';
  $message .= "<h4> Contact Us </h4>";
  $message .= "<strong> Name: </strong>" .trim($_POST['contact_name']) ."<br>";
  $message .= "<strong> Email: </strong>" .trim($_POST['contact_email']) ."<br>";
  $message .= "<strong> Message: </strong>" .trim($_POST['message']) ."<br>";
  $message .= "</body></html>";

  if(mail($to,$subject,$message,$headers)){
    echo "success";
  }else{
    echo "failed";
  }
}

?>
