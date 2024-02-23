import { __ } from '@wordpress/i18n';
import { InspectorControls, RichText, useBlockProps } from '@wordpress/block-editor';
import { Card, CardBody, CardDivider, CardFooter, CardHeader, CardMedia, Button, PanelBody, ToggleControl } from '@wordpress/components';
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

	const handleDeleteSlide = (index) => {
		const updatedCards = [...cards];
		updatedCards.splice(index, 1); // Remove the card at the specified index
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
				modules={[Navigation, Scrollbar, A11y]}
				spaceBetween={0}
				slidesPerView={4}
				navigation
				scrollbar={{ draggable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
			>
				{
					cards.map((card, index) => (
						<SwiperSlide key={index}>
							<Card>
								<CardMedia>
									Test
								</CardMedia>
								<CardHeader>
									<RichText
										tagName="h3"
										value={card.title}
										allowedFormats={['core/bold', 'core/italic']}
										onChange={(newTitle) => handleTitleChange(newTitle, index)}
										placeholder={__('Card Title...')}
									/>
								</CardHeader>
								<CardBody className='card-body'>
									<RichText
										tagName="p"
										value={card.content}
										allowedFormats={['core/bold', 'core/italic']}
										onChange={(newContent) => handleContentChange(newContent, index)}
										placeholder={__('Card Content...')}
									/>
								</CardBody>
								<CardFooter>
									<button onClick={() => handleDeleteSlide(index)}>Delete Slide</button>
								</CardFooter>
							</Card>
						</SwiperSlide>
					))
				}
			</Swiper>
		</>
	);
}
