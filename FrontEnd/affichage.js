
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

fetch('http://localhost:5678/api/works')
  .then(response => response.json())
  .then(data => {
    works = data;
    genererWorks();
  })
  .catch(error => console.error(error));

const filtrerTout = document.getElementById("Tous");
filtrerTout.addEventListener("click", function () {
  genererWorks();
});

const filtrerObjets = document.getElementById("objets");
filtrerObjets.addEventListener("click", function() {
  const worksFiltre = works.filter(function (work) {
    return work.type === "objets";
  });
  genererWorks(worksFiltre);
});

const filtrerAppartements = document.getElementById("Appartements");
filtrerAppartements.addEventListener("click", function() {
  const worksFiltre = works.filter(function (work) {
    return work.type === "appartements";
  });
  genererWorks(worksFiltre);
});

const filtrerHotelsEtRestaurants = document.getElementById("HotelsEtRestaurants");
filtrerHotelsEtRestaurants.addEventListener("click", function() {
  const worksFiltre = works.filter(function (work) {
    return work.type === "hotels et restaurants";
  });
  genererWorks(worksFiltre);
});
