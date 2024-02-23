<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
echo "<pre>";
var_dump($attributes);
echo "<pre>";
?>
<p <?php echo get_block_wrapper_attributes(); ?>>
	<?php esc_html_e( 'Swiper Block – hello from a dynamic block!', 'swiper-block' ); ?>
</p>
