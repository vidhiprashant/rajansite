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
    $subject ="Inquiry from Vendor Partnership [ www.buildedge.in/demo ]";

    $message ="Name of Person : ".$_POST['fname']. 
    "\n Company Name : ".$_POST['cname'].  
    "\n Company Name : ".$_POST['mobile']. 
    "\n Company Name : ".$_POST['email']. 
    "\n Company Name : ".$_POST['cs']. 
    "\n Company Name : ".$_POST['bd']. 
    "\n Company Name : ".$_POST['ts-number']. 
    "\n Company Name : ".$_POST['ex-number']. 
    "\n Upload Documents : ".$_POST['file'];
    
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