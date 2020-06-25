<?php
    // header('Content-Type: application/json; charset=utf-8');
    header("Access-Control-Allow-Origin: *"); // only for testing purposes - should change to domain
    header("Access-Control-Allow-Methods: PUT, GET, POST");
    if(count($_POST) > 0) {
        $firstName = trim($_POST['firstName']);
        $userEmail = trim($_POST['userEmail']);
        $description = trim($_POST['description']);
        $location = trim($_POST['location']);
        $date = trim($_POST['date']);
        $filename = $firstName . $userEmail . $description  . $location . $date;
    }

    if($_FILES['skyPhoto'])
    {
        if($_FILES['skyPhoto']['type'] === "image/jpeg" || $_FILES['skyPhoto']['type'] === "image/png" && $_FILES['skyPhoto']['size'] < 1000000) {
            move_uploaded_file($_FILES['skyPhoto']['tmp_name'], "skyPhotos/" . $filename);
        }
    }
?>