const express = require("express");
const cors = require("cors");

const PORT = 5000;

const server = express();
const router = express.Router();

router.get("/personajes", (req, res) => {
  const personajes = [
    {
      name: "Geralt de Rivia",
      raza: "Brujo",
      profesion: "Brujo",
      about: "Como todos los brujos, Geralt era un cazador de monstruos a sueldo. Poseía habilidades sobrehumanas y era un maestro espadachín. Durante la Prueba de las Hierbas, Geralt exhibió una tolerancia inusual a los mutágenos que concedían a los brujos sus habilidades. Por lo tanto, Geralt fue expuesto a otros experimentos más fuertes, que le concedieron el pelo blanco, dándole mayor velocidad, fuerza y resistencia que sus compañeros brujos.",
      img: "https://cdna.artstation.com/p/assets/images/images/016/392/540/large/astor-alexander-geralt-2100px.jpg?1551982033"
    },
    {
      name: "Triss Merigold",
      raza: "Humana",
      profesion: "Consejera",
      about: "Triss Merigold de Maribor fue una legendaria hechicera temeria. Sus contemporáneos la llamaron 'Decimocuarta del Monte' porque se pensó erróneamente que fue asesinada durante la Batalla del Monte de Sodden, pasando a la historia como Merigold la Intrépida.",
      img: "https://cdnb.artstation.com/p/assets/images/images/016/392/545/large/astor-alexander-triss-2100px.jpg?1551981789"
    },
    {
      name: "Cirilla",
      raza: "Humana",
      profesion: "Emperatriz de Nilfgaard",
      about: "Cirilla Fiona Elen Riannon, mejor conocida como Ciri, nació en 1252 o 1253, probablemente durante la fiesta de Belleteyn. Era la princesa de Cintra, la hija de Pavetta y Emhyr var Emreis (quien en ese momento usaba el alias 'Duny'), y la nieta de la reina Calanthe.",
      img: "https://cdnb.artstation.com/p/assets/images/images/016/392/543/large/astor-alexander-ciri-2100px.jpg?1551981786"      
    },
    {
      name:"Yennefer",
      raza: "Cuarterona",
      profesion: "Hechicera",
      about: "Yennefer, nacida en la fiesta de Belleteyn de 1173, fue una hechicera que vivió en Vengerberg, la capital de Aedirn. Era el verdadero amor de Geralt de Rivia y una figura materna para Ciri, a quien veía como una hija hasta el punto en que hizo todo lo posible para rescatar a la niña y evitar que sufriera daños.",
      img: "https://cdna.artstation.com/p/assets/images/images/016/392/546/large/astor-alexander-yennefer-2100px.jpg?1551981792"
    },
  ];
  res.send(personajes);
});

router.get("/lugares", (req, res) => {
  const lugares = [
    {
      name: "Kaer Morhen",
      country: "Kaedwen",
      region: "Hertch",
      img: "https://sm.ign.com/ign_es/screenshot/default/198458alfabetajuega-the-witcher-3-kaer-morhen-170717_h8gp.jpg"
    },
    {
      name: "Novigrado",
      country: "Redania",
      region: "Delta del Pontar",
      img: "https://vignette.wikia.nocookie.net/witcher/images/6/66/TW3_screen-Novigrad.jpg/revision/latest?cb=20160822065306"
    },
    {
      name: "Huerto Blanco",
      country: "Temeria",
      region: "Wyzima",
      img: "https://static.wikia.nocookie.net/witcher/images/4/4e/Tw3_white_orchard.png/revision/latest?cb=20150921170332"
    },
    {
      name: "Oxenfurt",
      country: "Redania",
      region: "Pontar River",
      img: "https://static.wikia.nocookie.net/brujo/images/2/20/Plaza_de_Oxenfurt.jpg/revision/latest?cb=20191109200553&path-prefix=es"
    },
  ];
  res.send(lugares);
});




server.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

server.use("/", router);

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
