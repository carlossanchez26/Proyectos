<?php

// Configurar el encabezado de respuesta como JSON
header('Content-Type: application/json');

try {
    // Obtener los datos del formulario
    $mar_coc = $_POST['textoInsercion1'] ?? null;
    $mod_coc = $_POST['textoInsercion2'] ?? null;
    $aut_coc = $_POST['textoInsercion3'] ?? null;

    // Validar que los datos no estén vacíos
    if (!$mar_coc || !$mod_coc || !$aut_coc) {
        throw new Exception("Todos los campos son obligatorios.");
    }

    // Incluir el modelo y crear una instancia
    require_once "../Models/Insercion1Model.php";
    $obj1 = new Datos();

    // Definir la instrucción SQL y los tipos de parámetros
    $sql1 = "INSERT INTO coches (mar_coc, mod_coc, aut_coc) VALUES (?, ?, ?)";
    $typeParameters = "ssi"; // String String Integer

    // Llamar al método del modelo para insertar los datos
    $data1 = $obj1->insertData($sql1, $typeParameters, $mar_coc, $mod_coc, (int)$aut_coc);

    // Enviar la respuesta como JSON
    echo json_encode($data1);

} catch (Exception $e) {
    // Manejo de excepciones y respuesta de error en JSON
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}

?>