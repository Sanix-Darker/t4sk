<?php
    $json_file = "todo-list-data.json";
    $json_text = file_get_contents('php://input');
    
    if (file_put_contents($json_file, $json_text)) {
        echo 1;
    } else {
        echo 0;
    }