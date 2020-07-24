<?php

$dir = "./subjectPhotos/";
$filenames = scandir($dir);
$filenamearray = \array_diff($filenames, [".", ".."]);
$index = [];
$fileNameFinal = [];
$numOfFile = count($filenamearray);
for ($i = 0; $i < 36; $i++) {
  array_push($index, rand(2,$numOfFile-1));
}

for ($i = 0; $i< 36;$i++){
  $num = $index[$i];
    array_push($fileNameFinal, $filenamearray[$num]);
}
echo json_encode($fileNameFinal);

?>
