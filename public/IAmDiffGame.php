<?php

$dir = "./subjectPhotos/";
$filenames = scandir($dir);
$filenamearray = \array_diff($filenames, [".", ".."]);
$index = [];
$fileNameFinal = [];
$numOfFile = count($filenamearray);
for ($i = 0; $i < 36; $i++) {
  $ind = rand(2,$numOfFile-1);
  while(true){
    if(in_array($ind ,$index)){
      $ind = rand(2,$numOfFile-1);
    }else{
      array_push($index, $ind);
      break;
    }
  }
}

for ($i = 0; $i< 36;$i++){
  $num = $index[$i];
    array_push($fileNameFinal, $filenamearray[$num]);
}
echo json_encode($fileNameFinal);

?>
