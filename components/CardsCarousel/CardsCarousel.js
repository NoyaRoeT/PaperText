import Image from "next/image";


const CardsCarousel = () =>{
    const handleCarouselButton = (event) => {
        event.preventDefault();
        const btn = event.currentTarget;
        const carouselElement = btn.parentElement.parentElement.lastChild;
        const width = carouselElement.clientWidth;
        if (btn.textContent === 'NEXT'){
            carouselElement.scrollBy({left:width});
        }
        else {
            carouselElement.scrollBy({left:-width});
        }
    };

    const dummyData = [
        {
            image: "/test_img0.webp",
            title: "Chainsaw Man",
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
            image: "/test_img0.webp",
            title: "Chainsaw Man",
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
            image: "/test_img0.webp",
            title: "Chainsaw Man",
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
            image: "/test_img0.webp",
            title: "Chainsaw Man",
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
            image: "/test_img0.webp",
            title: "Chainsaw Man",
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
            image: "/test_img0.webp",
            title: "Chainsaw Man",
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
            image: "/test_img0.webp",
            title: "Chainsaw Man",
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
            image: "/test_img0.webp",
            title: "Chainsaw Man",
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
        <div id ="cardContainer" className="relative">
            <div className="absolute flex justify-between transform z-10 left-0 right-0 top-1/3">
                <button onClick={handleCarouselButton} className="btn btn-square">BACK</button>
                <button onClick={handleCarouselButton} className="btn btn-square">NEXT</button>
            </div>

            <div id = "cards" className="carousel relative bg-base-200 gap-2">
                {dummyData.map((item, i)=> 
                <div key ={i} className="card carousel-item bg-base-100 shadow-xl">
                    <figure>
                        <Image
                        src={item.image}
                        alt
                        width={250}
                        height={250}/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{item.title}</h2>
                    </div>
                </div>
                )}
            </div>
        </div>
        
    )

}

export default CardsCarousel;