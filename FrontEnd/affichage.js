import { genererWorks } from './works.js';
import { genererFiltres, filtrerTout, filtrerObjets, filtrerAppartements, filtrerHotelsEtRestaurants } from './filters.js';

let works;

fetch('http://localhost:5678/api/works')
  .then(response => response.json())
  .then(data => {
    works = data;
    genererWorks(works);
    genererFiltres();
  })
  .catch(error => console.error(error));

/*
    let works;

function genererWorks(worksData = works) {
  const portfolioSection = document.querySelector('#portfolio');
  portfolioSection.innerHTML = '';
  for (let i = 0; i < worksData.length; i++) {
    const element = document.createElement("article");
    const imageElement = document.createElement("img");
    const texteElement = document.createElement("p")
    imageElement.src = worksData[i].imageUrl;
    texteElement.innerText = worksData[i].title;
    portfolioSection.appendChild(element);
    element.appendChild(imageElement);
    element.appendChild(texteElement);
  }
}
function genererFiltres () {
  const filtersContainer = document.querySelector('#filters');

// Crée un bouton pour "Tous" et l'ajoute au conteneur
const allButton = document.createElement('button');
allButton.textContent = 'Tous';
allButton.id = 'all';
filtersContainer.appendChild(allButton);

// Crée un bouton pour "objets" et l'ajoute au conteneur
const objetsButton = document.createElement('button');
objetsButton.textContent = 'objets';
objetsButton.id = 'objets';
filtersContainer.appendChild(objetsButton);

// Crée un bouton pour "Appartements" et l'ajoute au conteneur
const appartementsButton = document.createElement('button');
appartementsButton.textContent = 'Appartements';
appartementsButton.id = 'appartements';
filtersContainer.appendChild(appartementsButton);

// Crée un bouton pour "Hotels et Restaurants" et l'ajoute au conteneur
const hotelsEtRestaurantsButton = document.createElement('button');
hotelsEtRestaurantsButton.textContent = 'Hotels et Restaurants';
hotelsEtRestaurantsButton.id = 'hotels-et-restaurants';
filtersContainer.appendChild(hotelsEtRestaurantsButton);

}
fetch('http://localhost:5678/api/works')
  .then(response => response.json())
  .then(data => {
    works = data;
    genererWorks();
    genererFiltres();
  })
  .catch(error => console.error(error));
  // Sélectionne le conteneur où les boutons doivent être ajoutés


const filtrerTout = document.getElementById("all");
if (filtrerTout) {
  filtrerTout.addEventListener("click", function () {
    genererWorks();
  });
}

const filtrerObjets = document.getElementById("objets");
filtrerObjets.addEventListener("click", function() {
  const worksFiltre = works.filter(function (work) {
    return work.category.name === "objets";
  });
  genererWorks(worksFiltre);
});

const filtrerAppartements = document.getElementById("appartements");
filtrerAppartements.addEventListener("click", function() {
  const worksFiltre = works.filter(function (work) {
    return work.category.name === "appartements";
  });
  genererWorks(worksFiltre);
});

const filtrerHotelsEtRestaurants = document.getElementById("hotels-et-restaurants");
filtrerHotelsEtRestaurants.addEventListener("click", function() {
  const worksFiltre = works.filter(function (work) {
    return work.category.name === "Hotels & restaurants";
  });
  genererWorks(worksFiltre);
});
*/