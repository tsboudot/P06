export function filtrerTout() {
    genererWorks(works);
  }
  
  export function filtrerObjets() {
    const worksFiltre = works.filter(function (work) {
      return work.category.name === "objets";
    });
    genererWorks(worksFiltre);
  }
  
  export function filtrerAppartements() {
    const worksFiltre = works.filter(function (work) {
      return work.category.name === "appartements";
    });
    genererWorks(worksFiltre);
  }
  
  export function filtrerHotelsEtRestaurants() {
    const worksFiltre = works.filter(function (work) {
      return work.category.name === "Hotels & restaurants";
    });
    genererWorks(worksFiltre);
  }
  
  export function genererFiltres() {
    const portfolioSection = document.getElementById('portfolio');
    const filtersContainer = document.createElement('div');
    filtersContainer.id = 'filters';
    portfolioSection.appendChild(filtersContainer);
  
    const filterButtons = [
      { name: 'Tous', id: 'all', action: filtrerTout },
      { name: 'objets', id: 'objets', action: filtrerObjets },
      { name: 'Appartements', id: 'appartements', action: filtrerAppartements },
      { name: 'Hotels et Restaurants', id: 'hotels-et-restaurants', action: filtrerHotelsEtRestaurants }
    ];
  
    filterButtons.forEach(button => {
      const filterButton = document.createElement('button');
      filterButton.textContent = button.name;
      filterButton.id = button.id;
      filtersContainer.appendChild(filterButton);
  
      button.element = filterButton;
    });
  }