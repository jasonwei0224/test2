<?php

include('./MailChimp.php');    // You may have to modify the path based on your own configuration.

$api_key = "a8f091752e825a639f9df0e2c0be299a-us4";
$list_id = "7355b495b7";

use \MailChimp;

$Mailchimp = new MailChimp( $api_key );

try
{
  if(count($_POST)>0){
    $email = trim($_POST['EMAIL']);
    $name = trim($_POST['NAME']);
    $result = $Mailchimp->post("lists/$list_id/members", [
				'email_address' => $email,
				'status'        => 'subscribed',
			]);
    $subscriber_hash = MailChimp::subscriberHash($email);

    $result = $Mailchimp->patch("lists/$list_id/members/$subscriber_hash", [
				'merge_fields' => ['FNAME'=>$name],
                'interests' => ['65eed5e376' => true],
			]);
    }
}
catch (Exception $e)
{
    echo "Caught exception: " . $e;
}

if ( ! empty($subscriber['leid']) )
{
    echo "Subscriber added successfully.";
}
else
{
    echo "Subscriber add attempt failed.";
}

?>
