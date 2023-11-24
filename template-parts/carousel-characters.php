<div class="swiper swiper-container">
<h3><span class="word animatedFadeInUp fadeInUp one">Les</span>&nbsp;<span class="word animatedFadeInUp fadeInUp two">personnages</span></h3>    <div class="swiper-wrapper">
        <?php
        while ($characters_query->have_posts()) {
            $characters_query->the_post();
            echo '<div class="swiper-slide">';
            echo '<figure class="fade-in-up">';
            echo get_the_post_thumbnail(get_the_ID(), 'full');
            echo '<figcaption>';
            the_title();
            echo '</figcaption>';
            echo '</figure>';
            echo '</div>';
        }
        ?>
    </div>
</div>

