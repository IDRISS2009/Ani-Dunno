const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const cardsContainer = document.querySelector('.cards-container');
let currentIndex = 0;
const cardCount = document.querySelectorAll('.card').length;

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCardsPosition();
    }
});

rightArrow.addEventListener('click', () => {
    if (currentIndex < cardCount - 1) {
        currentIndex++;
        updateCardsPosition();
    }
});

function updateCardsPosition() {
    const offset = -currentIndex * 270; // 250px width + 20px margin
    cardsContainer.style.transform = `translateX(${offset}px)`;
}



const cards = document.querySelectorAll('.character-card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        alert(`More about ${card.querySelector('h3').innerText}`);
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Effet de scroll
const sections = document.querySelectorAll("section");
const options = {
    threshold: 0.7 // Quand 70% de la section est visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});




const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0;

function updateCarousel() {
    const totalItems = items.length;
    if (index < 0) {
        index = totalItems - 1; // Boucle à la fin
    } else if (index >= totalItems) {
        index = 0; // Boucle au début
    }
    const offset = -index * (300 + 30); // 300px de largeur + 30px de marges
    carouselInner.style.transform = `translateX(${offset}px)`;
}

prevButton.addEventListener('click', () => {
    index--;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    index++;
    updateCarousel();
});


const links = document.querySelectorAll('nav a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


