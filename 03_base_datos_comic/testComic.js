const infoComic = document.querySelector(".info-comic")
const cardPersonajes = document.querySelector(".card-personajes")

console.log(infoComic)

infoComic.innerHTML = `

<small>${comic.year}</small>
<h3>${comic.nombreComic}</h3>
<a>${comic.verAhora}</a>
<p>${comic.sipnosis}</p>
<p>Género:${comic.genero}</p>
`
console.log(comic.personajes)

comic.personajes.forEach(char => {
    const div = document.createElement("div")
    div.classList.add("personajes")
    div.innerHTML = `
        <img src="${char.imagen}" alt="">
        <p>${char.nombre}</p>
        <p>${char.descripcion}</p>
    `
    
    cardPersonajes.appendChild(div)
});




