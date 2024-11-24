<?php
class Datos
{

    // Devuelve Datos (select)
    public function getData1($sql)
    {
        // Conexión
        $mysqli = Conex1::con1();


        // Ejecución de la sentencia
        $result=$mysqli->query($sql);

        // Obtención del numero de registros devueltos
        $data = [];

        if($result->num_rows >= 1) {
            // Obtención de los datos
            while ($row = $result->fetch_object()) {
                $data[] = $row;
            }
        }

        // Cierre de la conexión
        $mysqli->close();

        // Devolución del resultado
        return $data;
    }
    
}
?>