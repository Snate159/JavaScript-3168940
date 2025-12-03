import { comic } from "./bd.js "
const heroContent = document.querySelector(".hero-content")
const characterGrid = document.querySelector(".character-grid")
const episodeGrid = document.querySelector(".episode-grid")


console.log(heroContent)

heroContent.innerHTML = `

<h2>${comic.nombreComic}</h2>
      <p>${comic.sinopsis}</p>
      <button>Ver ahora</button>
` 


characterGrid.innerHTML = '';

comic.personajes.forEach(char => {
const div = document.createElement("div")
    div.classList.add("character-card")
    div.innerHTML = `
        <a href="./index2.html?id=${char.id}">
        <img src="${char.imagen}" alt="">
        <h3>${char.nombre}</h3>
        <p>${char.descripcion}</p>
    `
    
    characterGrid.appendChild(div)
});

episodeGrid.innerHTML = '';

comic.capitulos.forEach(char => {
    const div = document.createElement("div")
    div.classList.add("episode-card")
    div.innerHTML = `
    <a href="./index3.html?id=${char.id}">
    <img src="${char.portada}" alt="">
        <h3>${char.nombre}</h3>
        <p>${char.descripcion}</p>
    `

    episodeGrid.appendChild(div)
})

console.log(comic.personajes)



