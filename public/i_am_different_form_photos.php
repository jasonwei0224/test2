<?php
    // header('Content-Type: application/json; charset=utf-8');
    header("Access-Control-Allow-Origin: *"); // only for testing purposes - should change to domain
    header("Access-Control-Allow-Methods: PUT, GET, POST");
<<<<<<< HEAD
    echo "in php";
    console.log(var_dump($_POST));
    console.log(var_dump($_FILES));
    if(count($_POST) > 0) {
=======
    if(count($_POST) > 0 && $_FILES['subjectPhoto']) {
>>>>>>> ee55aa2ad3815ab2c1aa77270e3542d6a942ff5a
        $senderFullname = trim($_POST['senderFullName']);
        $senderCity = trim($_POST['senderCity']);
        $senderEmail = trim($_POST['senderEmail']);
        $subjectFirstName = trim($_POST['subjectFirstName']);
        $subjectOccupation = trim($_POST['subjectOccupation']);
        $subjectEthnicity = trim($_POST['subjectEthnicity']);
        $subjectCity = trim($_POST['subjectCity']);
        $filename = $senderFullname . $senderCity . $senderEmail . $subjectFirstName  . $subjectOccupation . $subjectEthnicity . $subjectCity;
<<<<<<< HEAD
    }

    if($_FILES['subjectPhoto'])
    {
        if($_FILES['subjectPhoto']['type'] === "image/jpeg" || $_FILES['subjectPhoto']['type'] === "image/png" && $_FILES['subjectPhoto']['size'] < 1000000) {
            move_uploaded_file($_FILES['subjectPhoto']['tmp_name'], "subjectPhotos/" . $filename);
=======

        if($_FILES['subjectPhoto']['type'] === "image/jpeg" || $_FILES['subjectPhoto']['type'] === "image/png" && $_FILES['subjectPhoto']['size'] < 1000000) {
            move_uploaded_file($_FILES['subjectPhoto']['tmp_name'], "subjectPhotos/" . $filename);
            echo "valid";
        } else {
            echo "invalid";
>>>>>>> ee55aa2ad3815ab2c1aa77270e3542d6a942ff5a
        }
    }
?>