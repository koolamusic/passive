<?php
require_once './vendor/autoload.php';

$helperLoader = new SplClassLoader('Helpers', './vendor');
$mailLoader   = new SplClassLoader('SimpleMail', './vendor');

$helperLoader->register();
$mailLoader->register();

use Helpers\Config;
use SimpleMail\SimpleMail;

$config = new Config;
$config->load('./config/config.php');


/*********** COMMON DIRECTION FOR USE **********************
Add fields to config.php 
Add Form routine in index.php 
Add validation in contactform.js

Set Reload Form to True or False 
Optionally Set Window Location to new website link below </body Tag>

************************************************************/



if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name           = stripslashes(trim($_POST['form-name']));
    $nationality    = stripslashes(trim($_POST['form-email']));
    $phone          = stripslashes(trim($_POST['form-name']));
    $subject        = stripslashes(trim($_POST['form-name']));
    $message        = stripslashes(trim($_POST['form-name']));
    $email          = stripslashes(trim($_POST['form-email']));
    $phone          = stripslashes(trim($_POST['form-name']));
    $subject        = stripslashes(trim($_POST['form-name']));
    $message        = stripslashes(trim($_POST['form-name']));
    $pattern        = '/[\r\n]|Content-Type:|Bcc:|Cc:/i';

    if (preg_match($pattern, $name) || preg_match($pattern, $email) || preg_match($pattern, $subject)) {
        die("Header injection detected");
    }



    $emailIsValid = filter_var($email, FILTER_VALIDATE_EMAIL);

    if ($name && $email && $emailIsValid && $subject && $message) {
        $mail = new SimpleMail();

        $mail->setTo($config->get('emails.to'));
        $mail->setFrom($config->get('emails.from'));
        $mail->setSender($name);
        $mail->setSenderEmail($email);
        $mail->setSubject($config->get('subject.prefix') . ' ' . $subject);

        $body = "
        <!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">
        <html>
            <head>
                <meta charset=\"utf-8\">
            </head>
            <body>
                <h1>{$subject}</h1>
                <p><strong>{$config->get('fields.email')}:</strong> {$email}</p>
                <p><strong>{$config->get('fields.name')}:</strong> {$name}</p>
                <p><strong>{$config->get('fields.phone')}:</strong> {$phone}</p>
                <p><strong>{$config->get('fields.message')}:</strong> {$message}</p>
            </body>
        </html>";

        $mail->setHtml($body);
        $mail->send();

        $emailSent = true;
    } else {
        $hasError = true;
    }
}
?><!DOCTYPE html>





<html>
<head>
    <title>Ukwa Carnival | Form</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#333">
    <meta charset="utf-8">
    <meta name="theme-color" content="red">
    <meta name="apple-mobile-web-app-status-bar-style" content="red">
    
    <!--Require Bootstrap | FontAwesome | Template.css from SPBuilder For Header and Form Styling-->
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" media="screen">
    <link href="http://ukwacarnival.com/templates/ts_eventor/css/template.css" rel="stylesheet">
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <!--<link rel="stylesheet" href="public/css/client.css"> USE FOR CUSTOM STYLING-->
</head>


<body class="wrapper">
    
<!--Add Ukwa Carnival Site Header -->
    <header id="sp-header">
                <div class="container">
                    <div class="row" style="position: relative;">
                        <div id="sp-logo" class="col-xs-5 col-sm-4 col-md-3">
                            <div class="sp-column ">
                                <div class="logo">
                                    <a href="index.php"><img class="sp-default-logo hidden-xs" src="http://ukwacarnival.com/images/ukwalogo.png" alt="Ukwa Carnival 2018 | Ukwa Royal Heritage"><img class="sp-retina-logo hidden-xs" src="http://ukwacarnival.com/images/ukwalogo.png" alt="Ukwa Carnival 2018 | Ukwa Royal Heritage" width="205" height="66"><img class="sp-default-logo visible-xs" src="http://ukwacarnival.com/images/ukwalogo.png" alt="Ukwa Carnival 2018 | Ukwa Royal Heritage"></a>
                                </div>
                            </div>
                        </div>
                        <div id="sp-menu" class="col-xs-1 col-sm-1 col-md-9" style="position: static;">
                            <div class="sp-column ">
                                <div class="sp-megamenu-wrapper">
                                    <a id="offcanvas-toggler" class="visible-sm visible-xs" href="#"><i class="fa fa-bars"></i></a>
                                        <ul class="sp-megamenu-parent menu-fade hidden-sm hidden-xs">
        <li class="sp-menu-item "><a href="../index.php?pg=1">Home</a></li>
        <li class="sp-menu-item  sp-has-child"><a href="#">About</a>
            <div class="sp-dropdown sp-dropdown-main sp-menu-center" style="width: 210px;left: -105px;">
                <div class="sp-dropdown-inner">
                    <ul class="sp-dropdown-items">
                      
                        <li class="sp-menu-item"><a href="about.php?pg=2">2018 Edition</a></li>
                        <li class="sp-menu-item"><a href="sponsors.php?pg=2">Sponsors</a></li>
                       
        
        <li class="sp-menu-item"><a href="contact-us.php?pg=2">Contact Us</a></li>
        </ul>
        </div>
        </div>
        </li>
        <li class="sp-menu-item sp-has-child "><a href="#">Resources</a>
            <div class="sp-dropdown sp-dropdown-main sp-menu-right" style="width: 210px;">
                <div class="sp-dropdown-inner">
                    <ul class="sp-dropdown-items">
                        <li class="sp-menu-item"><a href="forms.php?pg=3">Forms</a></li>
                        <li class="sp-menu-item"><a href="bands.php?pg=3">Bands</a></li>
                        <li class="sp-menu-item"><a href="parade-safety-rules.php?pg=3">Parade Safety Rules</a></li>
                    </ul>
                </div>
            </div>
        </li>
        <li class="sp-menu-item sp-has-child"><a href="#">Press Center</a>
            <div class="sp-dropdown sp-dropdown-main sp-menu-right" style="width: 210px;">
                <div class="sp-dropdown-inner">
                    <ul class="sp-dropdown-items">
                        <li class="sp-menu-item"><a href="press.html">Press Releases</a></li>
                        <li class="sp-menu-item"><a href="general-information.php">General Information</a></li>
                    </ul>
                </div>
            </div>
        </li>
        <li class="sp-menu-item sp-has-child"><a href="#">Media</a>
            <div class="sp-dropdown sp-dropdown-main sp-menu-right" style="width: 210px;">
                <div class="sp-dropdown-inner">
                    <ul class="sp-dropdown-items">
                        <li class="sp-menu-item"><a href="photos.php">Photos</a></li>
                        <li class="sp-menu-item"><a href="videos.php">Videos</a></li>
                    </ul>
                </div>
            </div>
        </li>
        <li class="sp-menu-item sp-has-child"><a href="events.php">Events</a>
            <!-- <div class="sp-dropdown sp-dropdown-main sp-menu-right" style="width: 210px;">
                <div class="sp-dropdown-inner">
                    <ul class="sp-dropdown-items">
                        <li class="sp-menu-item"><a href="schedule-list.php">Wrestling Competition</a></li>
                        <li class="sp-menu-item"><a href="missab.php">Ada Ukwa Carnival Queen</a></li>
                    </ul>
                </div>
            </div> -->
        </li>
    </ul>                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            
<!--End UkwaCarnival Site Header-->
    
    
    
    
    
<!--Site Introduction -->
    
    <div class="jumbotron wrapper">
        <div class="container">
            <h1> UKWA CARNIVAL 2018<h1>
    		<h2> REGISTRATION FORM</h2>
                <p> Please Fill this forms with the right Information</p>
        </div>
    </div>
    
<!--End Site Introduction-->
    
    
    
<!--PHP Statement to check for errors in form Refer to path/config/config.php for Error Messages-->

        <?php if(!empty($emailSent)): ?>
            <div class="col-md-6 col-md-offset-3">
                <div class="alert alert-success text-center"><?php echo $config->get('messages.success'); ?></div>
                <a href="http://ukwacarnival.com"><button class="btn btn-large btn-block btn-info">Visit Homepage</button></a>
            </div>
        <?php else: ?>
            <?php if(!empty($hasError)): ?>
            <div class="col-md-5 col-md-offset-4">
                <div class="alert alert-danger text-center"><?php echo $config->get('messages.error'); ?></div>
            </div>
            <?php endif; ?>
        
<!--End Error Checking Statement-->





<!--Begin Form Field Section-->

    <div class="col-md-6 col-md-offset-2" style="margin-top:40px;">
        
        
        <form action="/client/index.php/" enctype="application/x-www-form-urlencoded" id="registration-form" class="form-vertical" method="post">
      
          <div class="form-group col-12">
              <label for="form-email" class="control-label"><?php echo $config->get('fields.email'); ?></label>
                  <input type="email" class="form-control" id="form-email" name="form-email" placeholder="<?php echo $config->get('fields.email'); ?>" required>
              </div>

            <div class="form-group col-12">
                <label for="form-name" class="control-label"><?php echo $config->get('fields.name'); ?></label>
                    <input type="password" class="form-control" id="form-name" name="form-name" placeholder="<?php echo $config->get('fields.name'); ?>" required>
                </div>




<!--Form Submit Button-->
            <div class="form-group">
                    <button type="submit" style="color: #fff;
                      background-color: #ea1b1b;
                      border-color: #982d21;
                      height: 50px;
                      width: 100%;" class="btn btn-success btn-medium"><?php echo $config->get('fields.btn-send'); ?></button>

            </div>
<!--End Form Submit Button Section and other protocols-->

         <!--Form Credits and Protocols-->
            <div class="text-center">
                <p> By clicking the submit button, you have assured us that, all the information provided is right and accurate.</p>
                 <br>
			    <h6>Thank You.<br> (c)Ukwa Carnival 2018</h6>
            </div>
            <!--End Form Credits and Protocols-->


        </form>
        

        
    </div>
  </div>

   



    <?php
    // if(isset($_POST['POST']))
    //     { echo "<meta http-equiv='refresh' content='0'>";
    // }
   endif; ?>

    <script type="text/javascript" src="public/js/contact-form.js"></script>
    <script type="text/javascript">
        new ContactForm('#contact-form');
        document.getElementById("registration-form").onsubmit = function() {
           window.location.reload(true);
        }
            
        // document.getElementById("registration-form").onsubmit = setTimeout(function() {
        // window.location.href = "http://ukwacarnival.com";
        //     }, 1200);
    </script>
</body>
</html>
