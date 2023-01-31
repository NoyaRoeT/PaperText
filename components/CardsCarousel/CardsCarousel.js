import Image from 'next/image';
import { useRef } from 'react';
// CardCarousel component

const CardsCarousel = () => {
	const cardsRef = useRef();

	const handleCarouselButton = (event) => {
		event.preventDefault();
		const btn = event.currentTarget;
		const carouselElement = cardsRef.current;
		const width = carouselElement.clientWidth;
		if (btn.id === 'next') {
			carouselElement.scrollBy({ left: width });
		} else {
			carouselElement.scrollBy({ left: -width });
		}
	};

	const dummyData = [
		{
			image: '/test_img0.webp',
			title: 'Chainsaw Man',
			description: `"Denji is robbed of a normal teenage life, left with
                            nothing but his deadbeat father's overwhelming debt. His
                            only companion is his pet, the chainsaw devil Pochita,
                            with whom he slays devils for money that inevitably ends
                            up in the yakuza's pockets. All Denji can do is dream of
                            a good, simple life: one with delicious food and a
                            beautiful girlfriend by his side. But an act of greedy
                            betrayal by the yakuza leads to Denji's brutal, untimely
                            death, crushing all hope of him ever achieving
                            happiness.",`,
		},
		{
			image: '/test_img0.webp',
			title: 'Chainsaw Man',
			description: `"Denji is robbed of a normal teenage life, left with
                            nothing but his deadbeat father's overwhelming debt. His
                            only companion is his pet, the chainsaw devil Pochita,
                            with whom he slays devils for money that inevitably ends
                            up in the yakuza's pockets. All Denji can do is dream of
                            a good, simple life: one with delicious food and a
                            beautiful girlfriend by his side. But an act of greedy
                            betrayal by the yakuza leads to Denji's brutal, untimely
                            death, crushing all hope of him ever achieving
                            happiness.",`,
		},
		{
			image: '/test_img0.webp',
			title: 'Chainsaw Man',
			description: `"Denji is robbed of a normal teenage life, left with
                            nothing but his deadbeat father's overwhelming debt. His
                            only companion is his pet, the chainsaw devil Pochita,
                            with whom he slays devils for money that inevitably ends
                            up in the yakuza's pockets. All Denji can do is dream of
                            a good, simple life: one with delicious food and a
                            beautiful girlfriend by his side. But an act of greedy
                            betrayal by the yakuza leads to Denji's brutal, untimely
                            death, crushing all hope of him ever achieving
                            happiness.",`,
		},
		{
			image: '/test_img0.webp',
			title: 'Chainsaw Man',
			description: `"Denji is robbed of a normal teenage life, left with
                            nothing but his deadbeat father's overwhelming debt. His
                            only companion is his pet, the chainsaw devil Pochita,
                            with whom he slays devils for money that inevitably ends
                            up in the yakuza's pockets. All Denji can do is dream of
                            a good, simple life: one with delicious food and a
                            beautiful girlfriend by his side. But an act of greedy
                            betrayal by the yakuza leads to Denji's brutal, untimely
                            death, crushing all hope of him ever achieving
                            happiness.",`,
		},
		{
			image: '/test_img0.webp',
			title: 'Chainsaw Man',
			description: `"Denji is robbed of a normal teenage life, left with
                            nothing but his deadbeat father's overwhelming debt. His
                            only companion is his pet, the chainsaw devil Pochita,
                            with whom he slays devils for money that inevitably ends
                            up in the yakuza's pockets. All Denji can do is dream of
                            a good, simple life: one with delicious food and a
                            beautiful girlfriend by his side. But an act of greedy
                            betrayal by the yakuza leads to Denji's brutal, untimely
                            death, crushing all hope of him ever achieving
                            happiness.",`,
		},
		{
			image: '/test_img0.webp',
			title: 'Chainsaw Man',
			description: `"Denji is robbed of a normal teenage life, left with
                            nothing but his deadbeat father's overwhelming debt. His
                            only companion is his pet, the chainsaw devil Pochita,
                            with whom he slays devils for money that inevitably ends
                            up in the yakuza's pockets. All Denji can do is dream of
                            a good, simple life: one with delicious food and a
                            beautiful girlfriend by his side. But an act of greedy
                            betrayal by the yakuza leads to Denji's brutal, untimely
                            death, crushing all hope of him ever achieving
                            happiness.",`,
		},
		{
			image: '/test_img0.webp',
			title: 'Chainsaw Man',
			description: `"Denji is robbed of a normal teenage life, left with
                            nothing but his deadbeat father's overwhelming debt. His
                            only companion is his pet, the chainsaw devil Pochita,
                            with whom he slays devils for money that inevitably ends
                            up in the yakuza's pockets. All Denji can do is dream of
                            a good, simple life: one with delicious food and a
                            beautiful girlfriend by his side. But an act of greedy
                            betrayal by the yakuza leads to Denji's brutal, untimely
                            death, crushing all hope of him ever achieving
                            happiness.",`,
		},
		{
			image: '/test_img0.webp',
			title: 'Chainsaw Man',
			description: `"Denji is robbed of a normal teenage life, left with
                            nothing but his deadbeat father's overwhelming debt. His
                            only companion is his pet, the chainsaw devil Pochita,
                            with whom he slays devils for money that inevitably ends
                            up in the yakuza's pockets. All Denji can do is dream of
                            a good, simple life: one with delicious food and a
                            beautiful girlfriend by his side. But an act of greedy
                            betrayal by the yakuza leads to Denji's brutal, untimely
                            death, crushing all hope of him ever achieving
                            happiness.",`,
		},
	];

	return (
		<div id='cardContainer' className='relative'>
			<div className='absolute left-0 top-1/3 z-10 transform'>
				<button
					id='back'
					onClick={handleCarouselButton}
					className='btn-square btn rounded-l-sm'
				>
					{' '}
					❮{' '}
				</button>
			</div>
			<div className='absolute right-0 top-1/3 z-10 transform'>
				<button
					id='next'
					onClick={handleCarouselButton}
					className='btn-square btn rounded-r-sm'
				>
					{' '}
					❯{' '}
				</button>
			</div>

			<div
				id='cards'
				ref={cardsRef}
				className='carousel gap-2 bg-base-200'
			>
				{dummyData.map((item, i) => (
					<div
						key={i}
						className='carousel-item card bg-base-100 shadow-xl'
					>
						<figure>
							<Image
								className='transition duration-75 ease-linear hover:brightness-50'
								src={item.image}
								alt
								width={250}
								height={250}
							/>
						</figure>
						<div className='card-body items-center text-center'>
							<h2 className='card-title hover:text-primary'>
								{item.title}
							</h2>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CardsCarousel;
