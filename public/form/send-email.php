
<?php
// Allow requests from any origin
header("Access-Control-Allow-Origin: *");

// Allow the POST method from any origin
header("Access-Control-Allow-Methods: POST");

// Allow the Content-Type header
header("Access-Control-Allow-Headers: Content-Type");

// Set content type of response
header("Content-Type: application/json");

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Read input stream
    $data = file_get_contents("php://input");

    // Decode JSON data
    $formData = json_decode($data, true);

    // Get the 'toemail' parameter from the form data
    $toemail = $formData['toemail'];

    function url(){
        return sprintf(
          "%s://%s",
          isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https' : 'http',
          $_SERVER['SERVER_NAME']
        );
      }
   if ($formData) {
  $name = trim(stripslashes($formData['name']));
  $email = trim(stripslashes($formData['email']));
  $mobile_no = trim(stripslashes($formData['phone']));
  $gender = trim(stripslashes($formData['gender']));
  $state = trim(stripslashes($formData['state']));
  $city = trim(stripslashes($formData['city']));
  $specialization = trim(stripslashes($formData['specialization']));
  $branch = trim(stripslashes($formData['branch']));

  $subject = "Enquiry Form Submission"; // Default subject if not provided in the form

  // Set message
  $message = "Email from: " . $name . "<br />";
  $message .= "Email address: " . $email . "<br />";
  $message .= "Mobile no: " .  $mobile_no . "<br />";
  $message .= "Gender: " .  $gender . "<br />";
  $message .= "State: " .  $state . "<br />";
  $message .= "City: " .  $city . "<br />";
  $message .= "Specialization : " .  $specialization  . "<br />";
  $message .= "Branch: " .  $branch . "<br />";

  // Set From: header
  $from =  $name . " <" . $email . ">";

  // Email Headers
  $headers = "From: " . $from . "\r\n";
  $headers .= "Reply-To: ". $email . "\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

  // Send email
  $mail = mail($to, $subject, $message, $headers);

  if ($mail) { 
    // Send success response to the frontend
    http_response_code(200);
    echo json_encode(array("message" => "Email sent successfully"));
  } else { 
    // Send error response to the frontend
    http_response_code(500);
    echo json_encode(array("message" => "Something went wrong. Please try again."));
  }
} else {
  // Send error response if no form data is received
  http_response_code(400);
  echo json_encode(array("message" => "No data received"));
}
    echo json_encode($response);
} else {
    // If request method is not POST, return an error
    http_response_code(405); // Method Not Allowed
    $errorResponse = ["error" => "Method Not Allowed"];
    echo json_encode($errorResponse);
}
?>
