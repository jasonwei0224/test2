<?php
    // header('Content-Type: application/json; charset=utf-8');
    header("Access-Control-Allow-Origin: *"); // only for testing purposes - should change to domain
    header("Access-Control-Allow-Methods: PUT, GET, POST");
    if(count($_POST) > 0 && $_FILES['subjectPhoto']) {
        $senderFullname = trim($_POST['senderFullName']);
        $senderCity = trim($_POST['senderCity']);
        $senderEmail = trim($_POST['senderEmail']);
        $subjectFirstName = trim($_POST['subjectFirstName']);
        $subjectOccupation = trim($_POST['subjectOccupation']);
        $subjectEthnicity = trim($_POST['subjectEthnicity']);
        $subjectCity = trim($_POST['subjectCity']);

        $filename = rand(0,1000) . $senderFullname . $senderCity . $senderEmail . $subjectFirstName  . $subjectOccupation . $subjectEthnicity . $subjectCity . ".jpg";

        if($_FILES['subjectPhoto']['type'] === "image/jpeg" || $_FILES['subjectPhoto']['type'] === "image/png" && $_FILES['subjectPhoto']['size'] < 1000000) {
            move_uploaded_file($_FILES['subjectPhoto']['tmp_name'], "subjectPhotos/" . $filename);
            echo "valid";
        } else {
            echo "invalid";
        }
    }
?>
