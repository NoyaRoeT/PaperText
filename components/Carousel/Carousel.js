import Image from 'next/image';

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
];

const Carousel = () => {
	const handleCarouselButton = (event) => {
		event.preventDefault();
		const btn = event.currentTarget;
		const carouselElement = btn.parentElement.parentElement.parentElement;

		const href = btn.getAttribute('href');
		const target = carouselElement.querySelector(href);
		const left = target.offsetLeft;
		carouselElement.scrollTo({ left: left });
	};

	return (
		<div className='carousel bg-base-200'>
			{dummyData.map((item, i) => {
				return (
					<div
						key={i}
						id={`slide${i}`}
						className='carousel-item relative w-full'
					>
						<Image
							className='rounded-md'
							src={item.image}
							width={500}
							height={250}
							alt=''
						></Image>

						<div className='p-4'>
							<h2 className='mb-4 text-5xl'>{item.title}</h2>
							<p>{item.description}</p>
						</div>
						<div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
							<a
								href={`#slide${
									i - 1 < 0 ? dummyData.length - 1 : i - 1
								}`}
								onClick={handleCarouselButton}
								className='btn-circle btn'
							>
								❮
							</a>
							<a
								href={`#slide${
									i + 1 >= dummyData.length ? 0 : i + 1
								}`}
								onClick={handleCarouselButton}
								className='btn-circle btn'
							>
								❯
							</a>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Carousel;
