// Fonction exécutée lorsque le document est prêt
jQuery(document).ready(function () {
    $('section').hide().fadeIn(2000);

    // Initialiser le carrousel Swiper
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

    // Initialiser skrollr pour les effets de défilement
    var s = skrollr.init();
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
        // Ajoutez cette ligne pour réafficher le menu-toggle une fois le menu burger fermé
        menuToggle.style.display = "flex";
    }

}


