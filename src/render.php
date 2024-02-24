<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

?>

<?php if ( ! empty( $attributes['swiper_cards'] ) ) : ?>
	<div <?php echo get_block_wrapper_attributes(); ?>>
		<!-- Slider main container -->
		<div class="swiper">
			<!-- Additional required wrapper -->
			<div class="swiper-wrapper">

				<!-- Slides -->
				<?php
				$cards = $attributes['swiper_cards'];
				foreach ( $cards as $card ) :
					$card_image = isset( $card['image'] ) ? $card['image'] : array();
					?>

				<div class="swiper-slide">
					<div class="swiper-slide-wrapper">
						<h3><?php echo isset( $card['title'] ) ? esc_html( $card['title'] ) : ''; ?></h3>
						<img
							src="<?php echo isset( $card_image['url'] ) ? esc_url( $card_image['url'] ) : ''; ?>"
							alt="<?php echo isset( $card_image['alt'] ) ? esc_attr( $card_image['alt'] ) : ''; ?>"
							width="<?php echo isset( $card_image['width'] ) ? esc_attr( $card_image['width'] ) : ''; ?>"
							height="<?php echo isset( $card_image['height'] ) ? esc_attr( $card_image['height'] ) : ''; ?>"
						>
						<div class="swiper-slide-content-wrapper">
							<p><?php echo isset( $card['content'] ) ? esc_html( $card['content'] ) : ''; ?></p>
							<a
								href="<?php echo isset( $card['link'] ) ? esc_url( $card['link'] ) : ''; ?>"
								aria-label="Link to <?php echo isset( $card['title'] ) ? esc_html( $card['title'] ) : ''; ?>"
							>Learn more</a>
						</div>
					</div>
				</div>
				<?php endforeach; ?>

			</div>
		</div>
		<!-- If we need navigation buttons -->
		<div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div>
	</div>
<?php endif; ?>
