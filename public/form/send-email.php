<?php

$to = 'parveenjaiswal100@gmail.com';

function url() {
    return sprintf(
        "%s://%s",
        isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https' : 'http',
        $_SERVER['SERVER_NAME']
    );
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = trim(stripslashes($_POST['name']));
    $email = trim(stripslashes($_POST['email']));
    $mobile_no = trim(stripslashes($_POST['phone']));
    $subject = "Enquiry Form Submission"; // Static subject for the email
    $gender = trim(stripslashes($_POST['gender']));
    $state = trim(stripslashes($_POST['state']));
    $city = trim(stripslashes($_POST['city']));
    $specialization = trim(stripslashes($_POST['specialization']));
    $branch = trim(stripslashes($_POST['branch']));

    // Set Message
    $message = "Email from: " . $name . "<br />";
    $message .= "Email address: " . $email . "<br />";
    $message .= "Mobile no: " . $mobile_no . "<br />";
    $message .= "Gender: " . $gender . "<br />";
    $message .= "State: " . $state . "<br />";
    $message .= "City: " . $city . "<br />";
    $message .= "Specialization: " . $specialization . "<br />";
    $message .= "Branch: " . $branch . "<br />";
    $message .= "<br /> ----- <br /> This email was sent from your site " . url() . " contact form. <br />";

    // Set From: header
    $from = $name . " <" . $email . ">";

    // Email Headers
    $headers = "From: " . $from . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    ini_set("sendmail_from", $to); // for windows server
    $mail = mail($to, $subject, $message, $headers);

    if ($mail) {
        header('Location: ./a1.html');
    } else {
        echo "Something went wrong. Please try again.";
    }
}
?>
