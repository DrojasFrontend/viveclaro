import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

// Data Array
const shows = [
	{
		id: 1,
		image: "/images/promotor/2.svg",
	},
	{
		id: 2,
		image: "/images/promotor/2.svg",
	},
	{
		id: 3,
		image: "/images/promotor/2.svg",
	},
	{
		id: 4,
		image: "/images/promotor/2.svg",
	},
	{
		id: 5,
		text: "APOYAN",
	},
	{
		id: 6,
		image: "/images/promotor/5.svg",
	},
	{
		id: 6,
		image: "/images/promotor/2.svg",
	},
	{
		id: 7,
		image: "/images/promotor/2.svg",
	},
	{
		id: 8,
		image: "/images/promotor/8.svg",
	},
	{
		id: 9,
		image: "/images/promotor/9.svg",
	},
	{
		id: 10,
		image: "/images/promotor/10.svg",
	},
	{
		id: 11,
		image: "/images/promotor/11.svg",
	},
	{
		id: 12,
		image: "/images/promotor/12.svg",
	},
	{
		id: 13,
		image: "/images/promotor/13.svg",
	},
];

const Promotor = () => {
	const [images, setImages] = useState(shows);
	const [fade, setFade] = useState(false);

	// const shuffleArray = (array) => {
	// 	const newArray = [...array];
	// 	for (let i = newArray.length - 1; i > 0; i--) {
	// 		const j = Math.floor(Math.random() * (i + 1));
	// 		[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
	// 	}
	// 	return newArray;
	// };

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setFade(true);

	// 		setTimeout(() => {
	// 			setImages((prevImages) => shuffleArray([...prevImages]));
	// 			setFade(false);
	// 		}, 100);
	// 	}, 1000);

	// 	return () => clearInterval(interval);
	// }, []);

	return (
		<div className="promotor-area pt-80 bckg-000000">
			<div className="position-relative container mb-45 z-1">
				<div className="d-block justify-content-start mb-40">
					<h2 className="section-title large mb-20 lh-1 color-E32D26">
						¿ERES PROMOTOR DE EVENTOS?
					</h2>
					<p className="responsive--description fw-medium mb-4 col-md-8 color-E32D26">
						Si deseas organizar un evento en Vive Claro, ¡hablemos!
					</p>
				</div>
			</div>
			<div className="container pb-80">
				<div className="col-md-10 m-auto">
					<div className="gallery bckg-FFFFFF">
						{images.map((show, index) => (
							<div key={`${show.id}-${index}`} className="gallery-img">
								{/* <div className={`image-wrapper ${fade ? "fade" : ""}`}> */}
								<div className="image-wrapper">
									{show.image && (
										<Image
											src={show.image}
											alt=""
											width={230}
											height={80}
											quality={75}
											style={{
												objectFit: "contain",
											}}
										/>
									)}
									{!show.image && <h3 className="color-black">{show.text}</h3>}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="bckg-000000 pt-30 pb-20">
				<div className="container">
					<div className="row">
						<div className="col-md-9">
							<h2 className="section-title small lh-1 color-white">
								¿ERES PROMOTOR DE EVENTOS?
							</h2>
							<p className="responsive--description fw-medium col-md-8 color-white">
								Si deseas organizar un evento en Vive Claro, ¡hablemos!
							</p>
						</div>
						<div className="col-md-3">
							<Link href="#" className="custom-button">
								CONTACTAR
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Promotor;
