    const aumentos = document.querySelectorAll(".aumentos")
    const aumentos2 = document.querySelectorAll(".estrella")
    const tablero = document.querySelector("#contador-monedas")
    const tablero2 = document.querySelector("#contador-estrellas")
    let counter = 0
    let counter2 = 0

    aumentos.forEach(item => {

        item.addEventListener("click", () => {
            item.style.filter = "grayscale(1)"
            item.classList.add("saltar")
            counter++
            tablero.textContent = counter
        })
    })

    aumentos2.forEach(item => {

        item.addEventListener("click", () => {
            item.style.filter = "grayscale(1)"
            item.classList.add("saltar")
            counter2++
            tablero2.textContent = counter2
        })
        
    })





    const notas = document.querySelectorAll(".notas")
    const tablero3 = document.querySelector("#contador-notas")
    let total = 0

    notas.forEach(item => {

        item.addEventListener("click", () => {
            item.style.filter = "grayscale(1)"
            item.classList.add("saltar")
            total++
            tablero3.textContent = total
        })
    })


