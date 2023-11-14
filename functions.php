<?php
// Enqueue parent style
add_action('wp_enqueue_scripts', 'theme_enqueue_styles');
function theme_enqueue_styles()
{
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css'); // Enfile le style parent
}

// Enqueue custom scripts

function enqueue_custom_scripts()
{
    wp_enqueue_script('jquery1','https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js'); // Enfile jQuery
    wp_enqueue_script('skroller-script', get_stylesheet_directory_uri() . '/js/skrollr.min.js', array('jquery'), '1.0', true); // Enfile un script personnalisé
   
    wp_enqueue_script('swiper-script', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', array(), null, true);
    wp_enqueue_style('swiper-style', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css', array(), null, 'all');
    wp_enqueue_script('custom-script', get_stylesheet_directory_uri() . '/script.js', array('jquery'), '1.0', true); // Enfile un script personnalisé
}


add_action( 'wp_enqueue_scripts','enqueue_custom_scripts');


// Sync customizer options with parent theme
if (get_stylesheet() !== get_template()) {
    // Synchronise les options du customizer avec le thème parent
    add_filter('pre_update_option_theme_mods_' . get_stylesheet(), function ($value, $old_value) {
        update_option('theme_mods_' . get_template(), $value);
        return $old_value; // Empêche la mise à jour des options du thème enfant
    }, 10, 2);

    add_filter('pre_option_theme_mods_' . get_stylesheet(), function ($default) {
        return get_option('theme_mods_' . get_template(), $default);
    });
}
?>
