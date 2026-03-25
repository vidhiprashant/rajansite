<?php 
error_reporting(0);
session_start();
$errors = '';

if(isset($_POST['submit']))
{
    if(empty($errors))
    {
    
     $to = "rajanparmar3105@gmail.com";      
    $fromEmail = $_POST['email'];
    // $fromName = $_POST['fname'];
    $subject ="Inquiry from Career [ www.buildedge.in/demo ]";

    $message ="Name of Person : ".$_POST['name']. 
    "\n Email : ".$_POST['email'].  
    "\n Upload Documents : ".$_POST['file'].
    "\n Message : ".$_POST['message'];
    
    /* Start of headers */
    $headers = "From: ".$_POST["email"];
    $data = chunk_split(base64_encode($data));
 
    $flgchk = mail ("rajanparmar3105@gmail.com","$subject", "$message", "$headers");

    $flgchk1 = mail ("$to", "$subject", "$message", "$headers");
       
       
       if($flgchk)
       {
       ?>
        <script type="text/javascript">
            window.location.href='thankyou.html';
       </script>
        <?php
       exit();
       }
    }
}
?>