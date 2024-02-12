<?php

/**
 * Plugin Name: FemArt Custom Block - 04
 * Description: FemArt Custom Block - 04: Emphasized content (lighter background) with optional button
 */

function femart_custom_block_04()
{
    register_block_type(__DIR__ . '/build');
}
add_action('init', 'femart_custom_block_04');
