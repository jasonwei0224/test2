<?php

if(count($_POST)>0){
  $to = "jasonwei0224@gmail.com";
  $subject = "Toronto TAIWANfest Website Contact Form";
  $message = trim($_POST['message']);
  $headers = "From: jasonwei0224@gmail.com";

  if(mail($to,$subject,$message,$headers)){
    echo "success";
  }else{
    echo "failed";
  }
}

?>
