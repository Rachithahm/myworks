
<?php

// get form data
$json = file_get_contents('php://input');
$dataArray = json_decode($json, true);

// assign json form data
$name = $dataArray['name'];
$email = $dataArray['email'];
$phone = $dataArray['phone'];
$message = $dataArray['message'];
$company = $dataArray['company'];
$service = $dataArray['service'];
$city= $dataArray['city'];
$state= $dataArray['state'];





// If you are using Composer
require 'vendor/autoload.php';

// If you are not using Composer (recommended)
// require("path/to/sendgrid-php/sendgrid-php.php");

$request_body = json_decode('{
  "personalizations": [
    {
      "to": [
        {
          "email": "sales@altimiredge.com"
        }
      ],
      "cc": [{
          "email": "connect.blr@altimiredge.com"
      } ],
      "subject": "Enquiry from Altimir Edge Pvt. Ltd."
    }
  ],
  "from": {
    "email": "sales@altimiredge.com"
  },
  "content": [
    {
      "type": "text/html",
      "value": "<p>Customer Details:</p><p><b>Name:</b> '.$name.'<br><b>Email:</b> '.$email.'<br><b>Phone:</b> '.$phone.'<br><b>Company:</b>'.$company.'<br><b>City:</b>'.$city.'<br><b>State:</b>'.$state.'<br><b>Service:</b>'.$service.'<br><b>Message:</b> '.$message.'</p>"
    }
  ]
}');

$apiKey ='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';
$sg = new \SendGrid($apiKey);

try {
    $response = $sg->client->mail()->send()->post($request_body);
    sendreply($email);
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}

function sendreply($email)
{
  $from = new SendGrid\Email("Altimir Edge Pvt. Ltd.", "sales@altimiredge.com");
  $subject = "Enquiry From Altimir Edge Pvt. Ltd.";
  $to = new SendGrid\Email("user", $email);
  $content = new SendGrid\Content("text/html", "
  <h2>Thank you for enquiring with us, we will contact you soon!</h2>
  ");
  $mail = new SendGrid\Mail($from, $subject, $to, $content);
  $apiKey =  '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';
  $sg = new \SendGrid($apiKey);
  $response = $sg->client->mail()->send()->post($mail);
  echo "success";
}


 ?>
