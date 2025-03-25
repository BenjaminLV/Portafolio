
        projectList = document.getElementById("project-list");
        projectImage = document.getElementById("project-image");
        categoryToggle = document.getElementById("category-toggle");
        categoryText = document.getElementById("category-text");

        webProjects = [
            { name: "1. Instituto", image: "imagenes/insti.png", description: "Primer proyecto web de una panadería que se esta dando a conocer", link: "https://github.com/BenjaminLV/Web-Instituto" },
            { name: "2. Panaderia", image: "imagenes/panaderia.png", description: "Segundo proyecto web de un instituto con todas sus subramas y enlaces como uno de verdad", link: "https://github.com/BenjaminLV/Web-Panaderia" },
            { name: "3. Proyecto 3", image: "imagenes/portfolio.png", description: "Hola homero, como comprenderas primero te lo tengo que enviar jajaja", link: "" }
        ];

        codeProjects = [
            { name: "1. Space Dumps", image: "imagenes/juego1.png", description: "Mi primer proyecto en el primer año de DAW y uno de mis favoritos, incluso con pocas herramientas, cree uno de mis mejores codigos", link: "" },
            { name: "2. Código 2", image: "imagenes/codigo2.png", description: "No tengo el codigo aqui todavia", link: "" },
            { name: "3. Código 3", image: "imagenes/codigo3.png", description: "No tengo el codigo aqui todavia", link: "" }
        ];

        let activeDetails = null; // Para rastrear el desplegable activo

        fonts = ["font1", "font2", "font3"];

function updateProjectList(projects) {
    projectList.innerHTML = ""; // Limpiar lista

    projects.forEach((project, index) => {
        li = document.createElement("li");
        li.classList.add("project-item", fonts[index % fonts.length]); // Asigna una fuente diferente
        li.textContent = project.name;
        li.setAttribute("data-image", project.image);

        // Crear contenedor de detalles desplegable
        details = document.createElement("div");
        details.classList.add("project-details");
        details.innerHTML = `
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">Ver más</a>
        `;

        // Evento de hover para cambiar imagen
        li.addEventListener("mouseover", () => {
            projectImage.src = project.image;
            projectImage.style.display = "block";
        });

        li.addEventListener("mouseleave", () => {
            projectImage.style.display = "none";
        });

        // Evento para desplegar detalles
        li.addEventListener("click", () => {
            if (activeDetails && activeDetails !== details) {
                activeDetails.style.display = "none"; // Oculta el anterior desplegable
            }
            details.style.display = details.style.display === "block" ? "none" : "block";
            activeDetails = details.style.display === "block" ? details : null;
        });

        li.appendChild(details);
        projectList.appendChild(li);
    });
}


        // Alternar entre "WEB" y "CÓDIGO"
        categoryToggle.addEventListener("click", () => {
            if (categoryText.textContent === "WEB") {
                categoryText.textContent = "CÓDIGO";
                updateProjectList(codeProjects);
            } else {
                categoryText.textContent = "WEB";
                updateProjectList(webProjects);
            }
        });

        // Inicializar con proyectos web
        updateProjectList(webProjects);

    