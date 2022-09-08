
<?php

// get form data
$json = file_get_contents('php://input');
$dataArray = json_decode($json, true);


$firstname=$dataArray["name"];
$email=$dataArray["email"];
$phone=$dataArray["phone"];
$udf1=$dataArray["check_in_date"];
$udf2=$dataArray["check_out_date"];
$adults=$dataArray["adults"];
$childrens=$dataArray["childrens"];


// If you are using Composer
require 'vendor/autoload.php';

// If you are not using Composer (recommended)
// require("path/to/sendgrid-php/sendgrid-php.php");
$from = new SendGrid\Email("The Thash Resort", "booking@thethash.com");
$subject = "Booking Canceled by customer";
$to = new SendGrid\Email("user", "info@thethash.com");
$content = new SendGrid\Content("text/html", "<p>Customer Details:</p>
<p>
  <b>Name :</b>$firstname<br>
  <b>Phone :</b>$phone<br>
  <b>Email :</b>$email<br>

  <b>Check-in-date :</b>$udf1<br>
  <b>Check-out-date :</b>$udf2<br>

</p>");
$mail = new SendGrid\Mail($from, $subject, $to, $content);
$apiKey =  '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';
$sg = new \SendGrid($apiKey);
$response = $sg->client->mail()->send()->post($mail);

 ?>
