export function genererWorks(works = []) {
    const portfolioSection = document.querySelector('#portfolio');
    portfolioSection.innerHTML = '';

    works.forEach(work => {
        const workCard = document.createElement('div');
        workCard.classList.add('work-card');

        const workImage = document.createElement('img');
        workImage.src = work.imageUrl;

        const workTitle = document.createElement('h3');
        workTitle.textContent = work.title;

        const workCategory = document.createElement('p');
        workCategory.textContent = work.category.name;

        workCard.appendChild(workImage);
        workCard.appendChild(workTitle);
        workCard.appendChild(workCategory);

        portfolioSection.appendChild(workCard);
    });
}
  