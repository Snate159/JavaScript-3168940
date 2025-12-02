 export let comic = {
  "nombreComic": "El eco Olvidado",
  "numeroEpisodios": "3",
  "genero": "Fantasia, drama",
  "sinopsis": "Un joven de 17 años decide ir a un museo abandonado llevado por su curiosidad donde va a encontrar a un extraño maestro de la salsa del pasado",
  "autores": ["Santiago", "Salome", "Luis"] ,
  "portadaComic":".img/portada.jpg",
  "year": 2025,
  "personajes": [
    {
      "id": 1,
      "nombre": "Raizura",
      "descripcion": "Joven de 17 años amante a la musica",
      "imagen": "./raizura.jpeg",
      "frase": "Pasame la aguapanela",
      "biografia": "Raizura escucha una noticia donde un reportero anuncia la destruccion de un museo antiguo de musica del pasado el llevado por la curiosidad, decide ir antes de su demolicion y se encuentra el espiritu de Fruko, el cual se convierte en su mentor. Raizura y fruko pasan por una odisea de aprendizaje donde al final, raizura toma el legado de fruko y decide transmitir su musica a todo el mundo.",
      "años": "17",
      "esatura": "1,70 cm",
      "rol": "Musico en formacion",
    },
    {
      "id": 2,
      "nombre": "Fruko",
      "descripcion": "Un fantasma del pasado que que mantiene la salsa viva",
      "imagen": "./fruko.jpeg",
      "frase": "El ritmo sigue vivo",
      "biografia":"Julio Ernesto, mas conocido como fruko fue un gran canta autor colombiano que marco un antes y despues en la sala colombiana y en la musica, fue una gran inspiracion para todos, hasta que un dia fallecio y su alma quedo atrapada en su propio museo donde continua con la esperanza de revivir su musica",
      "años":"60 (antes de su muerte)",
      "estatura": "1,77 cm",
      "rol": "Fantamas de la salsa",
    },
    {
      "id": 3,
      "nombre": "Abuela",
      "descripcion": "Guia materno del personaje pricipal",
      "imagen": "./abuela.jpeg"
    },
    {
      "id": 4,
      "nombre": "Reportero",
      "descripcion": "Anunciante de las noticias",
      "imagen": "./reportero.jpeg"
    },
    {
      "id": 5,
      "nombre": "Constructores",
      "descripcion": "Encargados de destruir el museo",
      "imagen": "./trabajadores.jpeg"
    },
  ],
  "capitulos": [
    {
      "id": 1,
      "nombre": "Ua nota joven",
      "personajes": ["Raizura", "Abuela", "Reportero", "Constructores"],
      "portada": "./raizura.jpeg",
      "descripcion": "Conocemos a raizura, un joven lleno de curiosidad y fascinacion por la musica decide investigar un museo de musica"
    },
    {
      "id": 2,
      "nombre": "El fantasma de la sabrosura",
      "personajes": ["Raizura", "Fruko"],
      "portada": "./fruko.jpeg",
      "descripcion": "Raizura conoce a fruko, un fantasma que decide ayudarlo a revivir su musica",
    },
    {
      "id": 3,
      "nombre": "El primer y ultimo concierto",
      "personajes": ["Raizura", "Fruko", "Abuela", "Trabajadores", "Ciudadanos"],
      "portada": "./escenario.jpeg",
      "descripcion": "Raizura decide hacer un concierto para evitar una tragedia",
    }
  ]
}