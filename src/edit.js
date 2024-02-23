import { __ } from '@wordpress/i18n';
import { InspectorControls, RichText, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import './editor.scss';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Edit({ attributes, setAttributes }) {
	const { enableNavigation, enablePagination } = attributes;
	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__('Slider Settings', 'swiper-block')}
				>
					<ToggleControl
						checked={!!enableNavigation}
						label={__(
							'Enable Navigation',
							'swiper-block'
						)}
						onChange={() => {
							setAttributes({
								enableNavigation: !enableNavigation
							})
						}}
					/>
					<ToggleControl
						checked={!!enablePagination}
						label={__(
							'Enable Pagination',
							'swiper-block'
						)}
						onChange={() => {
							setAttributes({
								enablePagination: !enablePagination
							})
						}}
					/>
				</PanelBody>
			</InspectorControls>
			<Swiper {...useBlockProps()}
				// install Swiper modules
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				slidesPerView={3}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
			>
				<SwiperSlide>Slide 1</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
				<SwiperSlide>Slide 5</SwiperSlide>
				<SwiperSlide>Slide 6</SwiperSlide>
				<SwiperSlide>Slide 7</SwiperSlide>
			</Swiper>
		</>
	);
}
