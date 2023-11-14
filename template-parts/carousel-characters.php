<div class="swiper swiper-container">
<h3 data-600="background-position:center 200px; margin-top:100px opacity: 0; " data-1000="background-position:center 0px; margin-top:0px opacity: 1;" class="skrollable skrollable-after">Les personnages</h3>
    <div class="swiper-wrapper">
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

