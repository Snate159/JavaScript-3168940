
//"configuracion ESmodules 2611"

import { comic } from "./bd.js";

const params = new URLSearchParams(window.location.search)
const id = parseInt( params.get("id"))


const miPersonaje = comic.personajes.find (p => p.id === id )

if (!id || !miPersonaje) {
    window.location.href = "./index.html"; 
}


const padrePersonajes = document.querySelector(".padrePersonajes")

padrePersonajes.innerHTML = `

<div class="page-wrapper">

        <!-- ===== PANEL IZQUIERDO ===== -->
        <aside class="sidebar">

            <div class="panel-title">Personajes Relacionados</div>

            <div class="related-champions">
                <div class="related-champion-card">
                    <img src="fruko.jpeg" alt="Fruko">
                </div>

                <div class="related-champion-card">
                    <img src="abuela.jpeg" alt="Abuela">
                </div>

                <div class="related-champion-card">
                    <img src="trabajadores.jpeg" alt="Ciudadanos">
                </div>
            </div>

        </aside>

        <!-- ===== CONTENIDO CENTRAL ===== -->
        <main class="main-content">


            <div class="champion-header">
                <img class="profile-image" src="${miPersonaje.imagen}" alt="Raizura">
            </div>

     
            <div class="quote-block">
                <p>"${miPersonaje.frase}".</p>
                <p class="quote-author">~ ${miPersonaje.nombre}</p>
            </div>

    
            <section class="bio-section">
                <p class="bio-paragraph">
                    ${miPersonaje.biografia}
                </p>

                <button class="read-bio-button">Leer biografía →</button>
            </section>

        </main>

        <!-- ===== PANEL DERECHO ===== -->
        <aside class="info-panel">

            <div class="info-block">
                <p class="panel-title">${miPersonaje.años}</p>
            </div>

            <div class="info-block">
                <p class="panel-title">${miPersonaje.estatura}</p>
            </div>

            <div class="info-block">
                <p class="panel-title">${miPersonaje.rol}</p>
            </div>

        </aside>

    </div>
    <!-- ===== SECCIÓN DEL VIDEO ===== -->
    <section class="video-section">

        <div class="divider"></div>
        <p class="video-section-title">Video Destacado</p>
        <div class="divider"></div>

        <div class="video-container">

            <div class="video-card">
                <video src="${miPersonaje.video}" controls></video>
            </div>

        
        </div>

    </section>
` 

console.log(contenidoPersonaje)
