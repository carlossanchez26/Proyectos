<?php require_once "Controllers/EdicionConsulta1Controller.php"; ?>
<div id="contenedor0" class="contenedor0">
    <div id="contenedor1" class="contenedor1">
        <form id="formEdicion1" class="bloque1">
            <input type="hidden" id="textoEdicion0" name="textoEdicion0" required class="campo1" placeholder="Identificador" value="<?php echo $_GET['ide_coc']; ?>">
            <input type="text" id="textoEdicion1" name="textoEdicion1" required class="campo1" placeholder="Marca" value="<?php echo $mar_coc; ?>">
            <input type="text" id="textoEdicion2" name="textoEdicion2" required class="campo1" placeholder="Modelo" value="<?php echo $mod_coc; ?>">
            <input type="number" id="textoEdicion3" name="textoEdicion3" required class="campo1" placeholder="Autonomía" value="<?php echo $aut_coc; ?>">
            <input type="submit" id="botonEdicion1" name="botonEdicion1" value="Actualizar" class="boton1">
        </form>
    </div>
    <div id="contenedor2" class="contenedor2"> 
    </div>
</div>