// Definir la función addTask
async function addTask(url1, result1) {
    try {
        // Envío de datos al Servidor
        const response = await fetch(url1, {
            method: "GET",
        });

        // Devolución de datos del Servidor
        const result = await response.json();
        createElement(result1, result.task1);
    } catch (error) {
        console.log("Error: ", error);
    }
}

// Definir la función createElement
function createElement(div1, task1) {
    let d = document.createElement("div");
    d.classList.add("tarea");

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("cb1");

    let taskText = document.createElement("div");
    taskText.classList.add("t1");
    taskText.textContent = task1;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑️";
    deleteButton.classList.add("b1");

    d.appendChild(checkbox);
    d.appendChild(taskText);
    d.appendChild(deleteButton); // Agregar el botón a la tarea
    div1.appendChild(d);

    // Añadir el evento al botón de eliminar
    deleteButton.addEventListener("click", (event) => {
        event.preventDefault();
        d.remove(); // Elimina el elemento de la tarea
        // Aquí puedes agregar lógica adicional para enviar una solicitud al servidor
        // para eliminar la tarea de la base de datos
    });
}

// Definir función para añadir tarea al hacer clic en el botón
function addTaskOnClick() {
    const taskInput = document.querySelector("#task1");
    const result1 = document.querySelector("#result1");
    const nuevaTarea = taskInput.value.trim(); // Elimina espacios en blanco al principio y al final
    if (nuevaTarea !== '') { // Verifica si la tarea no está vacía
        const url1 = "servidor.php?task1=" + nuevaTarea;
        addTask(url1, result1);
        taskInput.value = "";
    } else {
        // Muestra un mensaje de error o realiza alguna otra acción para informar al usuario
        alert("Por favor, ingresa una tarea válida antes de añadir");
    }
}

// Esperar a que el DOM esté cargado
window.addEventListener('load', (event) => {
    const add1 = document.querySelector("#add1");

    if (add1) {
        // Agregar evento al botón de añadir tarea
        add1.addEventListener('click', (event) => {
            event.preventDefault();
            addTaskOnClick();
        });
    }
});