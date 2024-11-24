<?php

    // Tratamiento de los input type='text'
    $textoInsercion1 = empty($_POST['textoInsercion1']) ? '' : $_POST['textoInsercion1'];
    $textoInsercion2 = empty($_POST['textoInsercion2']) ? '' : $_POST['textoInsercion2'];
    $textoInsercion3 = empty($_POST['textoInsercion3']) ? '' : $_POST['textoInsercion3'];

    // Llamada a la conexión
    require_once "../Db/Con1Db.php";
    // Llamada a al modelo
    require_once "../Models/InsercionDeclaracionesPreparadas1Model.php";

    // Instanciación del objeto
    $oData = new Datos;
    // Llamada al método
    $sql = "insert into coches (mar_coc, mod_coc, aut_coc) values (?, ?, ?)";
    $data = $oData->setDataPreparedStatements1($sql, $textoInsercion1, $textoInsercion2, $textoInsercion3);
    
    // Devolución del resultado obtenido
    echo $data;

    // Documentación en:
    // https://www.php.net/manual/en/mysqli.quickstart.prepared-statements.php#mysqli.quickstart.prepared-statements
?>