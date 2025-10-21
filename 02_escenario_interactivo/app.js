    const aumentos = document.querySelectorAll(".aumentos")
    const aumentos2 = document.querySelectorAll(".estrella")
    const tablero = document.querySelector("#contador-monedas")
    const tablero2 = document.querySelector("#contador-estrellas")
    let counter = 0

    aumentos.forEach(item => {

        item.addEventListener("click", () => {
            item.style.filter = "grayscale(1)"
            item.classList.add("saltar")
            counter++
            tablero.textContent = counter
        })
    })

    aumentos.forEach(item => {

        item.addEventListener("click", () => {
            item.style.filter = "grayscale(1)"
            item.classList.add("saltar")
            counter++
            tablero2.textContent = counter
        })
        
    })

