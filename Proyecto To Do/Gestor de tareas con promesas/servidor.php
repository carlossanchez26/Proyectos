<?php

// Recepción de los datos en el servidor
$task1 = $_GET['task1'];

// Definición de una colección "tasks"
$tasks=array();
// Adición de un elemento "task1" a la colección "tasks"
array_push($tasks, $task1);

// Obtención del ultimo elemento añadido a la colección "task"
$lastTask1 = end($tasks); 

// Devolución de los datos al cliente
$responseData = array
(
    "task1"=> $lastTask1
);

/*
// Obtención del número de lementos de la colección
$responseData = array
(
    "task1"=> count($tasks)
);
*/

// Codificar los datos de respuesta a JSON
$responseJSON = json_encode($responseData);

// Establecer las cabeceras para indicar que la respuesta es JSON
header('Content-Type: application/json');

// Imprimir la respuesta JSON
echo $responseJSON;

?>