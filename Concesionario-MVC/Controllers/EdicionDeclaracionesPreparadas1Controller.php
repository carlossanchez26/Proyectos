<?php
header('Content-Type: application/json');
    // Tratamiento de los input type='number'    
    $textoEdicion0 = empty($_POST['textoEdicion0']) ? 0 : $_POST['textoEdicion0'];
    // Tratamiento de los input type='text'
    $textoEdicion1 = empty($_POST['textoEdicion1']) ? '' : $_POST['textoEdicion1'];
    $textoEdicion2 = empty($_POST['textoEdicion2']) ? '' : $_POST['textoEdicion2'];
    $textoEdicion3 = empty($_POST['textoEdicion3']) ? '' : $_POST['textoEdicion3'];

    // Llamada a la conexión
    require_once "../Db/Con1Db.php";
    // Llamada a al modelo
    require_once "../Models/EdicionDeclaracionesPreparadas1Model.php";

    // Instanciación del objeto
    $oData = new Datos;
    // Llamada al método
    $sql = "update coches set mar_coc=?, mod_coc=?, aut_coc=? where ide_coc=?";
    $data = $oData->setDataPreparedStatements1($sql, $textoEdicion1, $textoEdicion2, $textoEdicion3, $textoEdicion0);
    
    // Devolución del resultado obtenido en Json
    echo json_encode($data);

    // Documentación en:
    // https://www.php.net/manual/en/mysqli.quickstart.prepared-statements.php#mysqli.quickstart.prepared-statements
?>