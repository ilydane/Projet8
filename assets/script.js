const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



// test JS	
// Sélection des éléments du carrousel
const images = document.querySelectorAll('.carousel-image');
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
let currentIndex = 0;

// Fonction pour afficher une image spécifique
function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active'); // Retire la classe active de toutes les images
        if (i === index) {
            img.classList.add('active'); // Ajoute la classe active à l'image voulue
        }
    });
}

// Afficher la première image au chargement
showImage(currentIndex);

// Gestion des flèches de navigation
leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
});

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
});
