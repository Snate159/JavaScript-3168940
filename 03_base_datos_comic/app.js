const heroContent = document.querySelector(".hero-content")
const characterGrid = document.querySelector(".character-grid")

console.log(heroContent)

heroContent.innerHTML = `

<h2>${comic.nombreComic}</h2>
      <p>${comic.sinopsis}</p>
      <button>Ver ahora</button>
`
console.log(comic.personajes)

comic.personajes.forEach(char => {
const article = document.createElement("article")
    article.classList.add("personajes")
    article.innerHTML = `
        <img src="${char.imagen}" alt="">
        <p>${char.nombre}</p>
        <p>${char.descripcion}</p>
    `
    
    characterGrid.appendChild(article)
});