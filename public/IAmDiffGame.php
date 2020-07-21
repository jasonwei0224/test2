<?php

$dir = "./subjectPhotos/";
$filenames = scandir($dir);
$filenamearray = \array_diff($filenames, [".", ".."]);
count($filenamearray);

echo json_encode($filenamearray);

?>
