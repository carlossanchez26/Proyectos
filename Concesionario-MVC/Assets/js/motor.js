function disableButton(control1)
{
    control1.disable = true;
}

function enableButton(control1)
{
    control1.disable = false;
}

// INICIO - makeFetchFormRequest - Función que devuelve una promesa para formularios usando fetch
// Función para realizar la petición con fetch
async function makeFetchFormRequest(method, url, form) {
  const formData1 = new FormData(form);

  try {
      const response = await fetch(url, {method: method,body: formData1,});

      if (!response.ok) {
          throw new Error(`Error de red: ${response.statusText}`);
      }

      return await response.json();
  } catch (error) {
      throw new Error(`Captura del error: ${error.message}`);
  }
}
// FIN - makeFetchFormRequest - Función que devuelve una promesa para formularios usando fetch

// INICIO - Creción de los bloques HTML de respuesta
function createResponseBlock(item) {
  const bloque0 = document.createElement("div");
  bloque0.classList.add("bloque0");

  const fields = ["mar_coc", "mod_coc", "aut_coc"];
  fields.forEach(field => {
      const div = document.createElement("div");
      div.classList.add("bloque1");

      const link = document.createElement("a");
      link.href = `edicion-con-declaraciones-preparadas.php?ide_coc=${item.ide_coc}`;
      link.textContent = item[field];
      
      div.appendChild(link);
      bloque0.appendChild(div);
  });

  return bloque0;
}
// FIN - Creción de los bloques HTML de respuesta


// Opción 1: window.addEventListener("load", function(){...
// Cuando el DOM y todos los recursos dependientes (scripts, estilos e imágenes) se han cargado

// Opción 2: document.addEventListener("DOMContentLoaded", function(){
// Cuando el DOM y los scripts se han cargado y ejecutado 

document.addEventListener("DOMContentLoaded", function(){

  /* INICIO  - Enter tras escribir en el campo buscar */
  /*
  const botonConsulta1 = document.getElementById('botonConsulta1');
  if(botonConsulta1)
  {
    botonConsulta1.addEventListener('keydown', (e) => {
      if(e.key === 'Enter')
      {
        buscar1(botonConsulta1);
      }
    });     
  }
  */
  /* FIN  - Enter tras escribir en el campo buscar */

  // ---------------------------------- INICIO - (submit) Seleccionar 1
    // Paso 1 - Referencia de los elementos 
    const formConsulta1 = document.getElementById("formConsulta1");

    // Paso 2 - Asociar el elemento al evento y llamada a la función
    if (formConsulta1)
    {
        // Referencia de los elementos
        const button1 = document.getElementById("botonConsulta1");
        const controller1 = "Controllers/Consulta1Controller.php";
        const divResponse1 = document.getElementById("contenedor2");

        // Manejo del evento submit
        formConsulta1.addEventListener("submit", async function (event) {
          event.preventDefault();          
          disableButton(button1);

          try
          {
            const response1 = await makeFetchFormRequest('POST', controller1, formConsulta1);
            divResponse1.innerHTML = '';  // Limpiar div antes de añadir elementos

            if (response1.length > 0)
            {
              // Encabezado de la tabla
              const header = createResponseBlock({
                mar_coc: "Marca",
                mod_coc: "Modelo",
                aut_coc: "Autonomía (km)"
              });
              header.classList.add("negrita");
              divResponse1.appendChild(header);

              // Datos
              response1.forEach(item => {
                divResponse1.appendChild(createResponseBlock(item));
              });
            }
            else
            {
              divResponse1.textContent = 'No hay datos que coincidan con la búsqueda realizada';
            }
            formConsulta1.reset();
          }
          catch (error)
          {
            console.error("Error en la petición:", error.message);
            divResponse1.textContent = 'No se ha realizado la acción';
            formConsulta1.reset();
          }
          finally
          {
            enableButton(button1);
          }

        });        
    }
  // ---------------------------------- FIN - (submit) Seleccionar 1  

  /* ---------------------------------- INICIO - (click) Seleccionar 2 */
  // Paso 1 - Referencia del elemento que tiene asociado el evento
  const botonConsulta2 = document.getElementById("botonConsulta2");
  // Paso 2 - Asociación del elemento al evento y llamada a la función
  if(botonConsulta2)
  {
    // Referencia de los elementos
    controlador2 = "Controllers/Consulta2Controller.php";
    div2 = document.getElementById("contenedor2");
    // Evento y llamada a la función
    botonConsulta2.addEventListener("click", function(event){
      event.preventDefault();
      seleccionarDatos2(formConsulta1,botonConsulta2,controlador2,div2);
    });
  }
  /* ---------------------------------- FIN - (click) Seleccionar 2 */

  /* ---------------------------------- INICIO - (load) Seleccionar al cargar la página 1 */
  // Al cargar la página insercion-y-consulta.php...
  if (window.location.href.includes("insercion-y-consulta.php")){
    // y el DOM ha sido completamente cargado...
    addEventListener("DOMContentLoaded", async (event) => {

      event.preventDefault();

      // Paso 1 - Referencia de los elementos 
      const formInsercion2 = document.getElementById("formInsercion2");

      if (formInsercion2)
      {
        // Referencia de los elementos
        const button1 = document.getElementById("botonInsercion2");
        const controller1 = "Controllers/InsercionConsulta1Controller.php";
        const divResponse1 = document.getElementById("contenedor2");

        try
        {
          const response1 = await makeFetchFormRequest('POST', controller1, formInsercion2);
          // Limpiar div antes de añadir elementos
          divResponse1.innerHTML = '';

          if (response1.length > 0)
          {
            // Encabezado de la tabla
            const header = createResponseBlock({
              mar_coc: "Marca",
              mod_coc: "Modelo",
              aut_coc: "Autonomía (km)"
            });
            header.classList.add("negrita");
            divResponse1.appendChild(header);

            // Datos
            response1.forEach(item => {
              divResponse1.appendChild(createResponseBlock(item));
            });
          }
          else
          {
            divResponse1.textContent = 'No hay datos que coincidan con la búsqueda realizada';
          }

          formInsercion2.reset();
        }
        catch (error)
        {
          console.error("Error en la petición:", error.message);
          divResponse1.textContent = 'No se ha realizado la acción';
          formInsercion2.reset();
        }
        finally
        {
          enableButton(button1);
        }
      }
    }); 
  }
  /* ---------------------------------- FIN - (load) Seleccionar al cargar la página 1 */  




























  /* ---------------------------------- INICIO - (submit) Insertar 1 */
  // Paso 1: Obtener referencias:
  const formInsert1 = document.getElementById("formInsercion1");
  // Paso 2 - Asociación del elemento al evento (submit) y llamada a la función
  if (formInsert1) {
    const button1 = document.getElementById("botonInsercion1");
    const controller1 = "Controllers/Insercion1Controller.php";
    const divResponse1 = document.getElementById("contenedor2");

    // Manejo del evento submit para insertar los datos
    formInsert1.addEventListener("submit", function (event) {
        event.preventDefault();  // Evita el envío por defecto del formulario
        button1.disabled = true;  // Desactiva el botón para evitar envíos múltiples

        // Llamada a la función de inserción con fetch
        makeFetchFormRequest('POST', controller1, formInsert1)
            .then(response => {
                if (response.status === "success")
                {
                    divResponse1.textContent = response.message;  // Muestra el mensaje de éxito
                    formInsert1.reset();  // Limpia el formulario
                }
                else
                {
                    divResponse1.textContent = response.message || 'Error desconocido.';
                }
            })
            .catch(error => {
                console.error("Error en la inserción:", error.message);  // Muestra el error en la consola
                divResponse1.textContent = 'No se pudo realizar la inserción';
            })
            .finally(() => {
              // Habilita el botón nuevamente
              button1.disabled = false;  
            });
    });
  }
  /* ---------------------------------- FIN - (submit) Insertar 1 */























  
  /* ---------------------------------- INICIO - (submit) Insertar y Seleccionar 1 */
  // Paso 1: Obtener referencias:
  const formInsert2 = document.getElementById("formInsercion2");
  // Paso 2 - Asociación del elemento al evento (submit) y llamada a la función
  if (formInsert2)
  {
    const button1 = document.getElementById("botonInsercion2");
    const controller1 = "Controllers/InsercionConsulta2Controller.php";
    const divResponse1 = document.getElementById("contenedor2");

    formInsert2.addEventListener("submit", function(event) {
      event.preventDefault();
      button1.disabled = true;

      makeFetchFormRequest('POST', controller1, formInsert2)
      .then(response => {
        if (response.status === "success")
        {
          formInsert2.reset();
          actualizarContenedor2(response.data);
        }
        else
        {
          divResponse1.textContent = response.message || 'Error desconocido.';
        }
      })
      .catch(error => {
        console.error("Error en la inserción:", error.message);
        divResponse1.textContent = 'No se pudo realizar la inserción';
      })
      .finally(() => {
        button1.disabled = false;
      });
    });

    // Función para actualizar contenedor2 con todos los registros
    function actualizarContenedor2(data) {
      divResponse1.innerHTML = '';

      if (data && data.length > 0)
      {
        // Crear un contenedor para el encabezado
        const headerContainer = document.createElement("div");
        headerContainer.classList.add("bloque0"); // Clase opcional para agrupar el encabezado
    
        // Crear cada encabezado individualmente con la clase "bloque1"
        const headers = ["Marca", "Modelo", "Autonomía (km)"];
        headers.forEach(text => {
          const headerDiv = document.createElement("div");
          headerDiv.classList.add("bloque1");
          headerDiv.innerHTML = `<strong>${text}</strong>`;
          headerContainer.appendChild(headerDiv);
        });
    
        // Agregar el contenedor de encabezado al contenedor principal
        divResponse1.appendChild(headerContainer);
    
        // Agregar los datos de cada item usando createResponseBlock
        data.forEach(item => {
          divResponse1.appendChild(createResponseBlock(item));
        });
      }
      else
      {
        divResponse1.textContent = 'No hay datos disponibles.';
      }
    }
  }
  /* ---------------------------------- FIN - (submit) Insertar y Seleccionar 1 */  

  /* ---------------------------------- INICIO - (submit) Insertar y subir archivos 1 */
  // Paso 1: Obtener referencias:
  const formSubidaArchivos1 = document.getElementById("formSubidaArchivos1");
  // Paso 2 - Asociación del elemento al evento (submit) y llamada a la función
  if(formSubidaArchivos1)
  {
    // Referencia de los elementos
    boton1 = document.getElementById("botonInsercion1");
    controlador1 = "Controllers/InsercionConSubidaDeArchivos1Controller.php";
    div1 = document.getElementById("contenedor2");
    // Evento y llamada a la función
    formSubidaArchivos1.addEventListener("submit", function(event){
      event.preventDefault();
      insertarDatos1(formSubidaArchivos1,boton1,controlador1,div1);
    });
  }
  /* ---------------------------------- FIN - (submit) Insertar y subir archivos 1  */
 const formEdicion1 =document.getElementById("formEdicion1");
 if(formEdicion1){
  boton1 = document.getElementById("botonEdicion1");
    controlador1 = "Controllers/EdicionDeclaracionesPreparadas1Controller.php";
    div1 = document.getElementById("contenedor2");
    formEdicion1.addEventListener("submit", function(event){
      event.preventDefault();

      makeFetchFormRequest('POST', controlador1, formEdicion1)
      .then(response => {
        if (response.status === "success")
        {
          div1.textContent=response.message;
        }
        else
        {
          div1.textContent = response.message || 'Error desconocido.';
        }
      })
      .catch(error => {
        console.error("Error en la inserción:", error.message);
        div1.textContent = 'No se pudo realizar la inserción';
      })
      .finally(() => {
        boton1.disabled = false;
      });     
    });
}

});