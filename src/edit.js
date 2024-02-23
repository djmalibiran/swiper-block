import { __ } from '@wordpress/i18n';
import { InspectorControls, RichText, useBlockProps } from '@wordpress/block-editor';
import { Button, PanelBody, ToggleControl } from '@wordpress/components';
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
	const { cards } = attributes;

	const handleTitleChange = (newTitle, index) => {
		const updatedCards = [...cards];
		updatedCards[index].title = newTitle;
		setAttributes({ cards: updatedCards });
	};

	const handleContentChange = (newContent, index) => {
		const updatedCards = [...cards];
		updatedCards[index].content = newContent;
		setAttributes({ cards: updatedCards });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody>
					<Button
						onClick={() => {
							const newCard = {
								title: '',
								content: ''
							};
							setAttributes({
								cards: [...cards, newCard]
							});
						}}
					>
						Add Card
					</Button>
				</PanelBody>
			</InspectorControls>
			<Swiper
				{...useBlockProps()}
				// install Swiper modules
				modules={[Navigation, A11y]}
				spaceBetween={0}
				slidesPerView={4}
				navigation
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
			>
				{
					cards.map((card, index) => (
						<SwiperSlide key={index}>
							<div>
								<RichText
									tagName="h3"
									value={card.title}
									allowedFormats={['core/bold', 'core/italic']}
									onChange={(newTitle) => handleTitleChange(newTitle, index)}
									placeholder={__('Card Title...')}
								/>
								<RichText
									tagName="p"
									value={card.content}
									allowedFormats={['core/bold', 'core/italic']}
									onChange={(newContent) => handleContentChange(newContent, index)}
									placeholder={__('Card Content...')}
								/>
								<svg width="13px" height="13px" class="Icon___StyledIconSvg-sc-1nk0uws-1 jhmZwX" viewBox="0 0 24 24"><path d="M6 5.122 12.877 12 6 18.878 8.123 21l8.998-9-8.998-9z"></path></svg>
							</div>
						</SwiperSlide>
					))
				}
			</Swiper>
		</>
	);
}
