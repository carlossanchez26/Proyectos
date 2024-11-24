<?php

    // Tratamiento input type='text'
    $bus = empty($_POST['textoConsulta1']) ? '' : $_POST['textoConsulta1'];

    // Preparación para el uso de LIKE
    $bus = "%" . $bus . "%";

    // Llamada a la conexión
    require_once '../Db/Con1Db.php';
    // Llamada al modelo
    require_once '../Models/InsercionConsulta1Model.php';    

    // Instanciación del objeto
    $obj1 = new Datos;
    // Definición de la instrucción
    $sql1 = "SELECT ide_coc, mar_coc, mod_coc, aut_coc FROM coches WHERE mar_coc LIKE ? OR mod_coc LIKE ? OR CAST(aut_coc AS CHAR) LIKE ? ORDER BY mar_coc, mod_coc, aut_coc";
    $sql1 = "SELECT ide_coc, mar_coc, mod_coc, aut_coc FROM coches WHERE mar_coc LIKE ? OR mod_coc LIKE ? OR aut_coc LIKE ? ORDER BY mar_coc, mod_coc, aut_coc";
    // Definición del tipo de parámetros
    $typeParameters = "sss"; // String String String 
    // Llamada al método
    $data1 = $obj1->getData1($sql1, $typeParameters, $bus);

    // Devolución de datos en formato JSON
    header('Content-Type: application/json');
    echo json_encode($data1);

?>