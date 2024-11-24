window.addEventListener('load', function() {
    // Crea una array de platos, que recoje el ID, nombre, precios, imagen y Tipo de Plato
    const platos = [
        { id: 1, nombre: "Lentejas con chorizo", precio: 3, imagen: "img/lentejasConChorizo.jpg", TipoPlato: "primer plato" },
        { id: 2, nombre: "Crema de calabaza", precio: 2, imagen: "img/cremaDeCalabaza.jpg", TipoPlato: "primer plato" },
        { id: 3, nombre: "Escarlope de pollo", precio: 4, imagen: "img/escalopeDePollo.jpg", TipoPlato: "segundo plato" },
        { id: 4, nombre: "Lubrina al horno", precio: 5, imagen: "img/lubinaAlHorno.jpg", TipoPlato: "segundo plato" },
        { id: 5, nombre: "Flan de huevo", precio: 1, imagen: "img/flanDeHuevo.jpeg", TipoPlato: "postre" },
        { id: 6, nombre: "Arroz con leche", precio: 2, imagen: "img/arrozConLeche.jpeg", TipoPlato: "postre" }
    ];

    // Crea una Array con los tipos de plato (Primero, Segundo y Postre)
    const tiposDePlatos = ["primer plato", "segundo plato", "postre"];

    // Crea una constante llamada ListasElement y lo asigna a Listas del HTML
    const listasElement = document.getElementById("Listas");

    // Creas un for each para que recorra todo los
    // tipos de platos y creas un elemento sin valor
    // denominado tipo
    tiposDePlatos.forEach(function(tipo) {

        // Llama a la funcion de crearSelección platos
        // con el elemento tipo 
        crearSeccionPlatos(tipo);
    });

    // Llama a l funcion crearDescuentoYBoton
    crearDescuentoYBoton();

    // Crea una funcion de crearSeccionPlatos con
    // un elemento "tipo" 
    function crearSeccionPlatos(tipo) {

        // Crea una constante llamada contenerdor
        // y le crea como un elemento div
        const contenedor = document.createElement('div');

        // Le asigna una clase con nombre "contenedor"
        contenedor.classList.add("contenedor");

        // Crea una constante llamada select y le asigna
        // la funcion de crearSelectPlato
        const select = crearSelectPlato(tipo);

        // Crea una constante con nombre img y lo asigna
        // a la funcion crearImagen
        const img = crearImagen(tipo);

        // Añadir el evento al select para cambiar la imagen
        select.addEventListener('change', function(event) {
            actualizarImagen(event, img);
        });

        // Agregar el select y la imagen al contenedor
        contenedor.appendChild(select);
        contenedor.appendChild(img);

        // Agregar el contenedor a la lista de platos
        listasElement.appendChild(contenedor);
    }

    // Función para crear un select para cada tipo de plato
    function crearSelectPlato(tipo) {
        const select = document.createElement('select');
        select.id = 'select-' + tipo.replace(" ", "-");
        select.classList.add("selectClase");

        // Opción por defecto
        const defaultOption = document.createElement('option');
        defaultOption.value = "";
        defaultOption.textContent = "Seleccione un plato";
        select.appendChild(defaultOption);

        // Crear opciones basadas en los platos
        const platosPorTipo = obtenerPlatosPorTipo(tipo);
        platosPorTipo.forEach(function(plato) {
            const option = document.createElement('option');
            option.value = plato.id;
            option.textContent = plato.nombre + " (" + plato.precio + "€)";
            select.appendChild(option);
        });

        return select;
    }

    // Función para obtener platos filtrados por tipo
    function obtenerPlatosPorTipo(tipo) {
        return platos.filter(function(plato) {
            return plato.TipoPlato === tipo;
        });
    }

    // Función para crear una imagen asociada a cada select
    function crearImagen(tipo) {
        const img = document.createElement('img');
        img.id = 'img-' + tipo.replace(" ", "-");
        img.alt = "Plato seleccionado";
        img.src = "img/default.jpg"; // Imagen por defecto
        img.style.display = "block"; // Mostrar la imagen por defecto al inicio
        return img;
    }

    // Función para actualizar la imagen del plato seleccionado
    function actualizarImagen(event, img) {
        const selectedId = parseInt(event.target.value);
        const selectedPlato = platos.find(function(plato) {
            return plato.id === selectedId;
        });

        if (selectedPlato) {
            img.src = selectedPlato.imagen;
        } else {
            img.src = "img/default.jpg"; // Volver a la imagen por defecto si no hay selección
        }
        img.style.display = "block"; // Mostrar la imagen
    }

    // Función para crear la sección del descuento y el botón
    function crearDescuentoYBoton() {
        const descuento = document.createElement('div');
        descuento.classList.add("Descuento");

        const checkbox = crearCheckboxDescuento();
        descuento.appendChild(checkbox);

        const textoDescuento = document.createElement('div');
        textoDescuento.innerHTML = "10% de descuento";
        descuento.appendChild(textoDescuento);

        listasElement.appendChild(descuento);

        const boton = crearBoton();
        listasElement.appendChild(boton);

        const resultado = document.createElement('div');
        listasElement.appendChild(resultado);

        // Agregar evento al botón para calcular el total
        boton.addEventListener('click', function() {
            calcularTotal(resultado, checkbox.checked);
        });
    }

    // Función para crear el checkbox del descuento
    function crearCheckboxDescuento() {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'checkbox1';
        return checkbox;
    }

    // Función para crear el botón
    function crearBoton() {
        const boton = document.createElement('input');
        boton.type = 'button';
        boton.id = 'button';
        boton.value = '¡A comer!';
        return boton;
    }

    // Función para calcular el total
    function calcularTotal(resultado, descuentoActivado) {
        let total = 0;
        tiposDePlatos.forEach(function(tipo) {
            const select = document.getElementById('select-' + tipo.replace(" ", "-"));
            const selectedId = parseInt(select.value);
            const selectedPlato = platos.find(function(plato) {
                return plato.id === selectedId;
            });
            if (selectedPlato) {
                total += selectedPlato.precio;
            }
        });

        if (descuentoActivado) {
            total *= 0.9; // Aplicar el descuento
        }

        // Mostrar el resultado sin usar interpolación de cadenas
        resultado.textContent = "Total: " + total + "€";
    }
});
