<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

?>

<?php
if ( ! empty( $attributes['swiper_cards'] ) ) {
	echo 'whatup';
}
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
<!-- Slider main container -->
<div class="swiper">
	<!-- Additional required wrapper -->
	<div class="swiper-wrapper">
		<!-- Slides -->
		<div class="swiper-slide">
			<div class="swiper-slide-wrapper">
				<h3>Body Scan</h3>
				<img src="http://localhost:8888/wp-content/uploads/2024/02/Body_Scan_-_Desktop_3x-2.webp" alt="" width="100%" height="auto">
				<p>Assess your risk for diseases like heart disease and diabetes, and track changes over time.</p>
				<a href="#" title="Some title">Learn more</a>
			</div>
		</div>
		<div class="swiper-slide">
			<div class="swiper-slide-wrapper">
				<h3>Body Scan</h3>
				<img src="http://localhost:8888/wp-content/uploads/2024/02/Body_Scan_-_Desktop_3x-2.webp" alt="" width="100%" height="auto">
				<p>Assess your risk for diseases like heart disease and diabetes, and track changes over time.</p>
				<a href="#" title="Some title">Learn more</a>
			</div>
		</div>
		<div class="swiper-slide">
			<div class="swiper-slide-wrapper">
				<h3>Body Scan</h3>
				<img src="http://localhost:8888/wp-content/uploads/2024/02/Body_Scan_-_Desktop_3x-2.webp" alt="" width="100%" height="auto">
				<p>Assess your risk for diseases like heart disease and diabetes, and track changes over time.</p>
				<a href="#" title="Some title">Learn more</a>
			</div>
		</div>
		<div class="swiper-slide">
			<div class="swiper-slide-wrapper">
				<h3>Body Scan</h3>
				<img src="http://localhost:8888/wp-content/uploads/2024/02/Body_Scan_-_Desktop_3x-2.webp" alt="" width="100%" height="auto">
				<p>Assess your risk for diseases like heart disease and diabetes, and track changes over time.</p>
				<a href="#" title="Some title">Learn more</a>
			</div>
		</div>
		<div class="swiper-slide">
			<div class="swiper-slide-wrapper">
				<h3>Body Scan</h3>
				<img src="http://localhost:8888/wp-content/uploads/2024/02/Body_Scan_-_Desktop_3x-2.webp" alt="" width="100%" height="auto">
				<p>Assess your risk for diseases like heart disease and diabetes, and track changes over time.</p>
				<a href="#" title="Some title">Learn more</a>
			</div>
		</div>
		<div class="swiper-slide">
			<div class="swiper-slide-wrapper">
				<h3>Body Scan</h3>
				<img src="http://localhost:8888/wp-content/uploads/2024/02/Body_Scan_-_Desktop_3x-2.webp" alt="" width="100%" height="auto">
				<p>Assess your risk for diseases like heart disease and diabetes, and track changes over time.</p>
				<a href="#" title="Some title">Learn more</a>
			</div>
		</div>
	</div>

	<!-- If we need navigation buttons -->
	<div class="swiper-button-prev"></div>
	<div class="swiper-button-next"></div>
</div>
</div>

<?php
echo '<pre>';
var_dump( $attributes );
echo '<pre>';
?>