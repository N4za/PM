const container = document.querySelector(".container");
const coffees = [
  {
    name: "Real del monte",
    image: "images/image1.jpg",
    description1: "Es el Pueblo Mágico más alto del país, conocido especialmente por la fuerte influencia inglesa."
  },
  {
    name: "Mineral del Chico",
    image: "images/image2.jpg",
    description1: "Conserva las construcciones que son testimonio de este pasado."
  },
  {
    name: "Huichapan",
    image: "images/image3.jpg",
    description1: "Caminando por estas calles empedradas vas a cruzar casonas del Siglo XIX."
  },
  {
    name: "Tecozautla",
    image: "images/image4.jpg",
    description1: "Famoso por sus aguas termales, Tecozautla es un pequeño pueblo en medio del paisaje de semidesierto."
  },
  {
    name: "Zimapán",
    image: "images/image5.jpg",
    description1: "La pintoresca zona urbana combina la historia colonial española con la época minera."
  },
  {
    name: "Huasca de Ocampo",
    image: "images/image6.jpg",
    description1: "La imponente formación natural de los prismas basálticos es el principal atractivo turístico de Huasca de Ocampo."
  },
  {
    name: "Zempoala",
    image: "images/image7.jpg",
    description1: "Sitio declarado Patrimonio Cultural de la Humanidad por la UNESCO."
  },
  {
    name: "Zimapán",
    image: "images/image8.jpg",
    description1: "Estado, lo que ofrece una gran variedad de paisajes, atractivos y actividades como por ejemplo el vuelo en parapente."
  },
  {
    name: "Mexcaltitán",
    image: "images/image9.jpg",
    description1: " Se le conoce como cuna de la mexicanidad por la relación histórica que este lugar tiene con el legendario Aztlán."
  }
];

const coffees2 = [
  
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image, description1, description2 }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <h5 class="card--description">${description1}</h5>
                <h5 class="card--description">${description2}</h5>
              </div>
              `)
  );
  coffees2.forEach(
    ({ name2, description3 }) =>
      (output += `
              <div class="card2">
                <h1 class="card--title">${name2}</h1>
                <h5 class="card--description">${description3}</h5>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
