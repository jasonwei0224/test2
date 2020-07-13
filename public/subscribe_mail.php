<?php

include('./MailChimp.php');    // You may have to modify the path based on your own configuration.
include('./env.php');
include('./autoload.php');

$api_key = env('API_KEY');
$list_id = env('LIST_ID');
$interest_id = env('INTEREST_ID');

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
                'interests' => [$interest_id => true],
			]);

    }
}
catch (Exception $e)
{
    echo "Caught exception: " . $e;
}

// if ( ! empty($subscriber['leid']) )
// {
//     echo "Subscriber added successfully.";
// }
// else
// {
//     echo "Subscriber add attempt failed.";
// }

?>
