<?php
  
    // Tratamiento de los input type='number'    
    $ide_coc = empty($_GET['ide_coc']) ? 0 : $_GET['ide_coc'];
  
    // Llamada a la conexión
    require_once 'Db/Con1Db.php';
    // Llamada al modelo
    require_once 'Models/EdicionConsulta1Model.php';

    // Instancia del objeto
    $oData = new Datos;

    // Llamada al método
    $sql = "select * from coches where ide_coc=$ide_coc";
    $data = $oData->getData1($sql);

    if(empty($data))
    {
        $mar_coc = "indefinido";
        $mod_coc = "indefinido";
        $aut_coc = "0";
    }
    else
    {
        foreach ($data as $row)
        {
            $mar_coc = $row->mar_coc;
            $mod_coc = $row->mod_coc;
            $aut_coc = $row->aut_coc;
        }
    }

?>