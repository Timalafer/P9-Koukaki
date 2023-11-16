// Fonction pour séparer le texte en mots
function splitTextIntoWords(text) {
    return text.split(' ');
}

// Fonction pour animer les titres avec ScrollR
function animateTitlesWithScrollR() {
    // Sélectionne tous les éléments de titre à animer dans la section .story et #studio h2
    var animateElements = document.querySelectorAll('.story h2, .story h3, #studio h2');

    animateElements.forEach((element) => {
        // Sépare le texte en mots
        var words = splitTextIntoWords(element.textContent);
        // Nettoie le contenu actuel pour éviter les problèmes
        element.innerHTML = '';

        // Crée des spans pour chaque mot du titre avec un espace entre les mots
        words.forEach((word, index) => {
            const span = document.createElement('span');
            span.textContent = word;
            span.classList.add('word');
            element.appendChild(span);

            // Ajoute un espace après chaque mot, sauf pour le dernier mot
            if (index < words.length - 1) {
                element.appendChild(document.createTextNode(' '));
            }
        });

        // Définit les animations pour chaque titre à l'aide de ScrollR
        var data = {};
        data['data-0'] = 'opacity: 0; transform: translateY(20px);';
        data['data-500'] = 'opacity: 1; transform: translateY(0);';
        element.setAttribute('data-0', 'opacity: 0; transform: translateY(20px);');
        element.setAttribute('data-500', 'opacity: 1; transform: translateY(0);');
    });

    // Rafraîchit skrollr après avoir défini les animations
    var s = skrollr.init();
    s.refresh();
}

// Fonction exécutée lorsque le document est prêt
jQuery(document).ready(function () {
    // Cache puis fait apparaître la section avec un fondu au chargement de la page
    $('section').hide().fadeIn(2000);

    // Initialise le carrousel Swiper
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        initialSlide: 0,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
    });

    // Appelle la fonction pour animer les titres avec ScrollR
    animateTitlesWithScrollR();

    // Gère le clic sur les liens du menu burger
    var links = document.querySelectorAll(".link");

    links.forEach(blk => {
        blk.addEventListener('click', () => {
            var menuContainer = document.getElementById("burger-menu");
            menuContainer.classList.toggle("active");
        })
    })
});

// Fonction pour basculer l'état du menu burger
function toggleMenu() {
    var menuContainer = document.getElementById("burger-menu");
    menuContainer.classList.toggle("active");

    var siteTitle = document.querySelector(".site-title");
    siteTitle.style.display = "block";

    var menuToggle = document.querySelector(".menu-toggle");

    if (menuContainer.classList.contains("active")) {
        menuToggle.style.display = "none";
    } else {
        menuToggle.style.display = "flex";
    }
}
// Fonction pour gérer le défilement et créer l'effet de parallaxe
function parallaxEffect() {
    var banner = document.querySelector('.banner');
    var logo = document.querySelector('.logo');

    window.addEventListener('scroll', function () {
        var scrollPosition = window.pageYOffset;
        var bannerHeight = banner.offsetHeight;
        var logoHeight = logo.offsetHeight;
        var maxScroll = bannerHeight - logoHeight - 50;

        if (scrollPosition < maxScroll) {
            logo.style.top = 50 + scrollPosition * 0.1 + '%';
        } else {
            logo.style.top = 50 + maxScroll * 0.1 + '%';
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    parallaxEffect();
});



