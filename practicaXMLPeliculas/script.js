document.addEventListener("DOMContentLoaded", function() {
    //CSS en grid
    const app = document.getElementById("app");

    const seccionIzquierda = document.createElement("div");
    seccionIzquierda.classList.add("seccionIzquierda");

    const seccionXML = document.createElement("div");
    seccionXML.classList.add("seccionXML");

    const cDatosPelicula = document.createElement("div");
    cDatosPelicula.id = "pelicula-detalles";
    seccionXML.appendChild(cDatosPelicula);

    app.appendChild(seccionIzquierda);
    app.appendChild(seccionXML);

    //Conectamos con el XML
    const conexionXML = new XMLHttpRequest();
    conexionXML.open("GET", "peliculas.xml");  
    conexionXML.onreadystatechange = function() {
        if (conexionXML.readyState === 4) { 
                const conexion = conexionXML.responseXML;
                
                if (conexion) {
                    const peliculas = conexion.querySelectorAll("pelicula");
                     
                    peliculas.forEach(pelicula => {
                        const divPelicula = document.createElement("div");
                        divPelicula.classList.add("pelicula");

                        const imagen = document.createElement("img");
                        imagen.src = pelicula.querySelector("imagen").textContent;
                        imagen.alt = pelicula.querySelector("titulo").textContent;
                        divPelicula.appendChild(imagen);

                        const titulo = document.createElement("h3");
                        titulo.textContent = pelicula.querySelector("titulo").textContent;
                        divPelicula.appendChild(titulo);

                        imagen.addEventListener("click", function() {
                            const trailer = pelicula.querySelector("trailer").textContent;
                            const director = pelicula.querySelector("director").textContent;
                            const duracion = pelicula.querySelector("duracion").textContent;
                            const nacionalidad = pelicula.querySelector("nacionalidad").textContent;
                            const actores = pelicula.querySelector("actores").textContent;
                            const genero = pelicula.querySelector("genero").textContent;
                            const sinopsis = pelicula.querySelector("sinopsis").textContent;

                            cDatosPelicula.innerHTML = `
                                <video controls><source src="${trailer}" type="video/mp4"></video>
                                <h3>${pelicula.querySelector("titulo").textContent}</h3>
                                <div class="info">
                                    <p><strong>Director:</strong> ${director}</p>
                                    <p><strong>Duración:</strong> ${duracion}</p>
                                    <p><strong>Nacionalidad:</strong> ${nacionalidad}</p>
                                    <p><strong>Actores:</strong> ${actores}</p>
                                    <p><strong>Género:</strong> ${genero}</p>
                                    <p><strong>Sinopsis:</strong> ${sinopsis}</p>
                                </div>
                            `;
                        });
                        seccionIzquierda.appendChild(divPelicula);
                    });
            } else {
                console.error("Error al cargar el archivo XML. Estado: " + conexionXML.status);
            }
        }
    };
    conexionXML.send();
});
