const infoComic = document.querySelector(".info-comic")

console.log(infoComic)

infoComic.innerHTML = `

<small>${comic.year}</small>
<h3>${comic.nombreComic}</h3>
<a>${comic.verAhora}</a>
<p>${comic.sipnosis}</p>
<p>Género:${comic.genero}</p>
`
console.log(comic.Personajes)

comic.Personajes.forEach(char => {
    const div = document.createElement("div")
    div.classList.add("personaje")
    
    console.log(char.nombre)
    document.body.innerHTML += `<img src="${char.imagen}" width="200">`
});
