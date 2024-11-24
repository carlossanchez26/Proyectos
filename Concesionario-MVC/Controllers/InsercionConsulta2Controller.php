<?php

header('Content-Type: application/json');

try {
    // Verificar y obtener los datos del formulario
    $mar_coc = $_POST['textoInsercion1'] ?? null;
    $mod_coc = $_POST['textoInsercion2'] ?? null;
    $aut_coc = $_POST['textoInsercion3'] ?? null;

    if (!$mar_coc || !$mod_coc || !$aut_coc) {
        throw new Exception("Todos los campos son obligatorios.");
    }

    // Incluir el modelo y crear una instancia
    require_once "../Models/InsercionConsulta2Model.php";
    $obj1 = new Datos();

    // Paso 1: Insertar el nuevo registro
    $sqlInsert = "INSERT INTO coches (mar_coc, mod_coc, aut_coc) VALUES (?, ?, ?)";
    $typeParametersInsert = "ssi"; // String String Integer

    $insertResult = $obj1->insertData($sqlInsert, $typeParametersInsert, $mar_coc, $mod_coc, (int)$aut_coc);

    if ($insertResult['status'] !== "success") {
        echo json_encode($insertResult);
        exit;
    }

    // Paso 2: Consultar todos los registros después de la inserción
    $sqlSelect = "SELECT ide_coc, mar_coc, mod_coc, aut_coc FROM coches ORDER BY mar_coc, mod_coc, aut_coc";
    $data = $obj1->getData1($sqlSelect, "", ""); // Sin parámetros adicionales en la consulta

    // Devolver todos los registros en formato JSON
    echo json_encode(["status" => "success", "data" => $data]);

} catch (Exception $e) {
    // Manejo de errores
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
?>