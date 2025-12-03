//"configuracion ESmodules 2611"

import { comic } from "./bd.js";

const params = new URLSearchParams(window.location.search)
const id = parseInt( params.get("id"))


const miCapitulo = comic.capitulos.find (p => p.id === id )

//console.log("El id del personaje es", miPersonaje)
const chapterwrapper = document.querySelector(".chapter-wrapper")

chapterwrapper.innerHTML = `

<!-- TÍTULO -->
        <h1 class="chapter-title">${miCapitulo.nombre}</h1>

        <!-- SEPARADOR -->
        <div class="divider"></div>

        <!-- DESCRIPCIÓN -->
        <div class="chapter-description">
            <p>
               ${miCapitulo.biografia}
            </p>
        </div>

        <!-- SUBTÍTULO -->
        <h2 class="section-title">Personajes del capítulo</h2>

        <!-- GALERÍA -->
        <div class="characters-gallery">
            <div class="character-card">
                <img src="raizura.jpeg" alt="raizura">
            </div>
            <div class="character-card">
                <img src="abuela.jpeg" alt="abuela">
            </div>
            <div class="character-card">
                <img src="reportero.jpeg" alt="reportero">
            </div>
            <div class="character-card">
                <img src="trabajadores.jpeg" alt="trabajadores">
            </div>
        </div>

        <section class="video-section">
    <h2 class="video-title">Video Destacado</h2>

    <div class="video-container">
        <video controls>
            <source src="${miCapitulo.video}" type="video/mp4">
            Tu navegador no soporta el video.
        </video>
    </div>
</section>

`