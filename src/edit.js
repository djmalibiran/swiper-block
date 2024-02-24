import { __ } from '@wordpress/i18n';
import { InspectorControls, MediaUpload, RichText, useBlockProps } from '@wordpress/block-editor';
import { Card, CardBody, CardDivider, CardFooter, CardHeader, CardMedia, Button, PanelBody, TextControl, ToggleControl } from '@wordpress/components';
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
	const { swiper_cards } = attributes;

	const handleTitleChange = (newTitle, index) => {
		const updatedCards = [...swiper_cards];
		updatedCards[index].title = newTitle;
		setAttributes({ swiper_cards: updatedCards });
	};

	const handleContentChange = (newContent, index) => {
		const updatedCards = [...swiper_cards];
		updatedCards[index].content = newContent;
		setAttributes({ swiper_cards: updatedCards });
	};

	const handleImageChange = (newImage, index) => {
		const updatedCards = [...swiper_cards];
		updatedCards[index].image = newImage;
		setAttributes({ swiper_cards: updatedCards });
	};

	const handleLinkChange = (newLink, index) => {
		const updatedCards = [...swiper_cards];
		updatedCards[index].link = newLink;
		setAttributes({ swiper_cards: updatedCards });
	};

	const handleDeleteSlide = (index) => {
		const updatedCards = [...swiper_cards];
		updatedCards.splice(index, 1); // Remove the card at the specified index
		setAttributes({ swiper_cards: updatedCards });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody>
					<Button
						variant="primary"
						onClick={() => {
							const newCard = {
								title: '',
								content: ''
							};
							setAttributes({
								swiper_cards: [...swiper_cards, newCard]
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
					swiper_cards.map((card, index) => (
						<SwiperSlide key={index}>
							<Button
								onClick={() => handleDeleteSlide(index)}
								title='Delete Slide'
								className='delete-slide'
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
									<path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
								</svg>
							</Button>
							<Card>
								<CardMedia>
									<MediaUpload
										onSelect={(newImage) => handleImageChange(newImage, index)}
										allowedTypes={['image']}
										value={card.image ? card.image.id : ''}
										render={({ open }) => (
											<Button onClick={open}>
												{card.image ? (
													<img
														src={card.image.url}
														alt={card.image.alt}
														style={{ width: '100%', height: 'auto' }}
													/>
												) : (
													__('Upload Image', 'swiper-block')
												)}
											</Button>
										)}
									/>
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
									<TextControl
										value={card.link}
										onChange={(newLink) => handleLinkChange(newLink, index)}
										placeholder={__('Enter Learn More Link...')}
									/>
								</CardFooter>
							</Card>
						</SwiperSlide>
					))
				}
			</Swiper>
		</>
	);
}
