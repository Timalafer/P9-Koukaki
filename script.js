// Initialisation de Skrollr
var s = skrollr.init();
s.refresh(); //

// Initialisation du carrousel Swiper
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
        slideShadows: false,
    },
});

// Fonction pour animer les titres avec ScrollR et autres initialisations au chargement du document
jQuery(document).ready(function () {
    $('section').hide().fadeIn(2000);

    var links = document.querySelectorAll(".link");

    links.forEach(blk => {
        blk.addEventListener('click', () => {
            var menuContainer = document.getElementById("burger-menu");
            menuContainer.classList.toggle("active");
        });
    });

    var menuLinks = document.querySelectorAll('.burger-menu-items li a');

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            var menuToggle = document.querySelector('.menu-toggle');
            menuToggle.classList.remove('disabled');
        });
    });
});

// Fonction pour basculer l'état du menu burger
function toggleMenu() {
    var menuContainer = document.getElementById("burger-menu");
    menuContainer.classList.toggle("active");

    var siteTitle = document.querySelector(".site-title");
    siteTitle.style.display = menuContainer.classList.contains("active") ? "block" : "flex";

    var closeIcon = document.querySelector('.close-btn');
    var menuToggle = document.querySelector('.menu-toggle');

    if (menuContainer.classList.contains('active')) {
        closeIcon.style.display = 'inline';
        menuToggle.classList.add('disabled');
    } else {
        closeIcon.style.display = 'none';
        menuToggle.classList.remove('disabled');
    }
}


//paralaxe banner 

function parallaxBannerAndLogo() {
    var banner = document.querySelector('.banner');
    var logo = document.querySelector('.logo');

    if (window.innerWidth > 768) { // Garder l'effet pour les écrans plus larges que 768px
        window.addEventListener('scroll', function () {
            var scrollPosition = window.scrollY;
            var bannerHeight = banner.offsetHeight;
            var logoHeight = logo.offsetHeight;
            var maxScroll = bannerHeight - logoHeight - 50;

            if (scrollPosition < maxScroll) {
                logo.style.top = 50 + scrollPosition * 0.1 + '%';
            } else {
                logo.style.top = 50 + maxScroll * 0.1 + '%';
            }
        });
    } else {
        // Pour les écrans plus petits que 768px, désactiver l'effet de parallaxe
        logo.style.top = ''; // Réinitialiser la propriété CSS 'top' du logo
        // Ou ajuster la position du logo selon votre souhait pour les appareils mobiles ou les tablettes
    }
}




// Appel de l'effet de parallaxe pour la bannière et le logo après le chargement initial du document et lors du défilement
document.addEventListener('DOMContentLoaded', function () {
    parallaxBannerAndLogo();

    window.addEventListener('scroll', function () {
        parallaxBannerAndLogo();
    });
});

var controller = new ScrollMagic.Controller();
var tweenSmallCloud = gsap.to(".cloud-small", 1, { x: "-300px" });
var tweenLargeCloud = gsap.to(".cloud-large", 1, { x: "-300px" });

var sceneSmallCloud = new ScrollMagic.Scene({
    triggerElement: "#place",
    duration: "100%"
})
    .setTween(tweenSmallCloud)
    .addTo(controller);

var sceneLargeCloud = new ScrollMagic.Scene({
    triggerElement: "#place",
    duration: "100%"
})
    .setTween(tweenLargeCloud)
    .addTo(controller);


/* Mise en place des titres */

window.addEventListener('DOMContentLoaded', function () {
    var words = document.querySelectorAll('.word');

    words.forEach(function (word, index) {
        word.style.animationDelay = (index * 0.2) + 's';
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            } else {
                entry.target.style.animationPlayState = 'paused';
            }
        });
    });

    words.forEach(function (word) {
        observer.observe(word);
    });
});