    const aumentos = document.querySelectorAll(".aumentos")
    const aumentos2 = document.querySelectorAll(".estrella")
    const tablero = document.querySelector("#contador-monedas")
    const tablero2 = document.querySelector("#contador-estrellas")
    const sonidoMoneda = document.getElementById("snMoneda")
    const sonidoEstrella = document.getElementById("snEstrella")
    let counter = 0
    let counter2 = 0


    aumentos.forEach(item => {

        item.addEventListener("click", () => {
            item.style.filter = "grayscale(1)"
            item.classList.add("saltar")
            counter++
            tablero.textContent = counter
            sonidoMoneda.play()
        })
    })

    aumentos2.forEach(item => {

        item.addEventListener("click", () => {
            item.style.filter = "grayscale(1)"
            item.classList.add("saltar")
            counter2++
            tablero2.textContent = counter2
            sonidoEstrella.play()
        })
        
    })


    const notas = document.querySelectorAll(".notas")
    const tablero3 = document.querySelector("#contador-notas")
    const sonidoEstatica = document.getElementById("snEstatica")
    let total = 0

    notas.forEach(item => {

        item.addEventListener("click", () => {
            item.style.filter = "grayscale(1)"
            item.classList.add("saltar")
            total++
            tablero3.textContent = total
            sonidoEstatica.play()
        })
    })


    const circulo = document.querySelectorAll(".circulo")
    const tablero4 = document.querySelector("#contador-circulos")
    const sonidoRadio = document.getElementById("snRadio")
    let total2 = 0

    circulo.forEach(item => {

        item.addEventListener("click", () => {
            item.style.filter = "grayscale(1)"
            item.classList.add("saltar")
            total2++
            tablero4.textContent = total2
            sonidoRadio.play()
        })
    })





const escenariosCarrusel = [
  document.querySelector('.escenario'),
  document.querySelector('.escenario2'),
  document.querySelector('.escenario3')
];


const contenedorControles = document.createElement('div');
contenedorControles.classList.add('carrusel-controles');

const botonPrev = document.createElement('button');
botonPrev.textContent = '⟨';
botonPrev.classList.add('boton-carrusel');

const botonNext = document.createElement('button');
botonNext.textContent = '⟩';
botonNext.classList.add('boton-carrusel');


const miniaturas = document.createElement('div');
miniaturas.classList.add('miniaturas');
const minis = escenariosCarrusel.map((_, i) => {
  const btn = document.createElement('button');
  btn.classList.add('mini');
  miniaturas.appendChild(btn);
  return btn;
});


contenedorControles.appendChild(botonPrev);
contenedorControles.appendChild(botonNext);
document.body.appendChild(contenedorControles);
document.body.appendChild(miniaturas);


let indiceActivo = 0;

function mostrarEscenario(index) {
  escenariosCarrusel.forEach((esc, i) => {
    esc.classList.toggle('activo', i === index);
    minis[i].classList.toggle('activo', i === index);
  });
}


mostrarEscenario(indiceActivo);


botonPrev.addEventListener('click', () => {
  indiceActivo = (indiceActivo - 1 + escenariosCarrusel.length) % escenariosCarrusel.length;
  mostrarEscenario(indiceActivo);
});

botonNext.addEventListener('click', () => {
  indiceActivo = (indiceActivo + 1) % escenariosCarrusel.length;
  mostrarEscenario(indiceActivo);
});

minis.forEach((mini, i) => {
  mini.addEventListener('click', () => {
    indiceActivo = i;
    mostrarEscenario(indiceActivo);
  });
});



miniaturas.forEach(function (miniatura, i) {
    miniatura.addEventListener('click', function() {
        mostrarEscenario(i)
    })
})

mostrarEscena(0)

