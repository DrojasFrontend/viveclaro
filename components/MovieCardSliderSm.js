import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

// Data Array
const shows = [
	{
		id: 1,
		image: "/images/popular-show/circo-del-sol.png",
		badge: "01",
		title: "CIRCO DEL SOL",
		rating: "Mayo 16",
		duration: "6PM - 10PM",
		quality: "8k Quality",
		genres: ["Family", "Comedy", "Drama"],
	},
	{
		id: 2,
		image: "/images/popular-show/the-phantom-menace.png",
		badge: "02",
		title: "The Phantom Menace",
		rating: "Octubre 10",
		duration: "6PM - 10PM",
		quality: "8k Quality",
		genres: ["Action", "Comedy", "Crime"],
	},
	{
		id: 3,
		image: "/images/popular-show/the-shadow.png",
		badge: "03",
		title: "The Shadow",
		rating: "Noviembre 6",
		duration: "6PM - 10PM",
		quality: "8k Quality",
		genres: ["Family", "Comedy", "Drama"],
	},
	{
		id: 4,
		image: "/images/popular-show/paramo-presenta.png",
		badge: "04",
		title: "PÁRAMO PRESENTA",
		rating: "8.8",
		duration: "6PM - 10PM",
		rating: "Noviembre 16",
		genres: ["Action", "Comedy", "Crime"],
	},
	{
		id: 5,
		image: "/images/popular-show/circo-del-sol.png",
		badge: "01",
		title: "CIRCO DEL SOL",
		rating: "Mayo 16",
		duration: "6PM - 10PM",
		quality: "8k Quality",
		genres: ["Family", "Comedy", "Drama"],
	},
	{
		id: 6,
		image: "/images/popular-show/the-phantom-menace.png",
		badge: "02",
		title: "The Phantom Menace",
		rating: "Octubre 10",
		duration: "6PM - 10PM",
		quality: "8k Quality",
		genres: ["Action", "Comedy", "Crime"],
	},
	{
		id: 7,
		image: "/images/popular-show/the-shadow.png",
		badge: "03",
		title: "The Shadow",
		rating: "Noviembre 6",
		duration: "6PM - 10PM",
		quality: "8k Quality",
		genres: ["Family", "Comedy", "Drama"],
	},
	{
		id: 8,
		image: "/images/popular-show/paramo-presenta.png",
		badge: "04",
		title: "PÁRAMO PRESENTA",
		rating: "8.8",
		duration: "6PM - 10PM",
		rating: "Noviembre 16",
		genres: ["Action", "Comedy", "Crime"],
	},
];

const MovieCardSliderSm = () => {
	const progressCircle = useRef(null);

	const swiperRef = useRef(null);

	const handlePrev = () => {
		if (swiperRef.current && !swiperRef.current.animating) {
			// Verifica si no está en animación
			swiperRef.current.slidePrev(500); // Especifica una duración más corta
		}
	};

	const handleNext = () => {
		if (swiperRef.current && !swiperRef.current.animating) {
			// Verifica si no está en animación
			swiperRef.current.slideNext(500); // Especifica una duración más corta
		}
	};
	return (
		<div className="position-relative section-bckg -mt-100 mb-80 pt-80 pb-100 bckg-510000 z-1">
			<div className="container mb-45">
				<div className="d-sm-flex text-lg-start text-center align-items-center justify-content-sm-between">
					<div className="d-inline-flex align-item-center section-header">
						{/* <span className="mb-2">👍</span> */}
						<h2 className="section-title mt-1 mt-lg-2 mb-0 lh-1 card-title text-uppercase lh-1">
							Eventos
						</h2>
					</div>
					<Image
						src="/images/logotipo-viveclaro-white.png"
						alt="clock"
						width={256}
						height={144}
					/>
				</div>
			</div>

			<Swiper
				modules={[Autoplay, EffectCoverflow]}
				speed={500}
				spaceBetween={10}
				loop={true}
				centeredSlides={true}
				preventClicks={true}
				preventClicksPropagation={true}
				touchRatio={1.5}
				watchSlidesProgress={true}
				autoplay={{
					delay: 10000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				}}
				className="movie-card-slider-sm"
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
				}}
				slideToClickedSlide={true}
				observer={true}
				observeParents={true}
				onAutoplayTimeLeft={(s, time, progress) => {
					if (progressCircle.current) {
						progressCircle.current.style.setProperty(
							"--progress",
							1 - progress
						);
					}
				}}
				breakpoints={{
					0: {
						slidesPerView: 1.2,
					},
					576: {
						slidesPerView: 1.7,
						spaceBetween: 20,
					},
					992: {
						slidesPerView: 2.5,
						spaceBetween: 20,
					},
					1366: {
						slidesPerView: 3.5,
						spaceBetween: 30,
					},
					1600: {
						slidesPerView: 3.9,
						spaceBetween: 30,
					},
				}}
			>
				{shows.map((show) => (
					<>
						<SwiperSlide key={show.id}>
							<div className="movie-card-small position-relative">
								<Image
									src={show.image}
									alt={show.title}
									width={377}
									height={380}
									style={{
										objectFit: "cover",
										objectPosition: "center",
									}}
									className="w-100"
								/>
								<div className="movie-badge position-absolute">
									<span>{show.badge}</span>
								</div>
								<a
									href="/video/video.mp4"
									className="video-play-btn popup_video position-absolute"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="29"
										viewBox="0 0 24 29"
										fill="none"
									>
										<path
											d="M22.2584 12.8002C23.5199 13.5823 23.5199 15.4177 22.2584 16.1998L3.05388 28.1066C1.72154 28.9326 6.40836e-07 27.9744 7.0936e-07 26.4068L1.75028e-06 2.59321C1.81881e-06 1.02557 1.72154 0.0673544 3.05388 0.893405L22.2584 12.8002Z"
											fill="currentColor"
										/>
									</svg>
								</a>
								<div className="details position-absolute text-center">
									<h4 className="movie-name text-uppercase fw-normal">
										<Link
											href="/movie-details"
											className="gradient-link fw-normal"
										>
											{show.title}
										</Link>
									</h4>
									<ul className="movie-info">
										<li>
											<Image
												src="/images/icons/card/star-stroke.svg"
												alt="star"
												width={16}
												height={16}
											/>
											<span>{show.rating}</span>
										</li>
										<li>
											<Image
												src="/images/icons/card/clock-stroke.svg"
												alt="clock"
												width={16}
												height={16}
											/>
											<span>{show.duration}</span>
										</li>
										{/* <li>
										<Image
											src="/images/icons/card/4k-stroke.svg"
											alt="4k"
											width={16}
											height={16}
										/>
										<span>{show.quality}</span>
									</li> */}
									</ul>
									{/* <ul className="movie-type">
									{show.genres.map((genre, index) => (
										<li key={index}>
											{genre}
											{index < show.genres.length - 1 ? "," : ""}
										</li>
									))}
								</ul> */}
								</div>
							</div>
						</SwiperSlide>
					</>
				))}
			</Swiper>
			<div className="d-flex align-item-center justify-content-center gap-4 mt-4 pt-lg-1">
				<button
					onClick={handlePrev}
					className="slider-btn slider-btn--big prev-slide"
					aria-label="Previous slide"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="29"
						viewBox="0 0 40 29"
						fill="none"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M12.91 1.5125V0.322754H15.2895V1.5125C15.2895 6.03007 12.7856 10.375 9.017 12.9489H38.3558V15.3284H9.01686C12.7856 17.9023 15.2895 22.2472 15.2895 26.7648V27.9545H12.91V26.7648C12.91 20.9162 7.71984 15.3487 1.50732 15.3285C1.496 15.3285 1.48468 15.3285 1.47336 15.3285H0.283611V15.3284V12.949V12.9489H0.284611H1.47336H1.519C7.72634 12.9217 12.91 7.35752 12.91 1.5125Z"
							fill="#fff"
						/>
					</svg>
				</button>
				<button
					onClick={handleNext}
					className="slider-btn slider-btn--big next-slide"
					aria-label="Next slide"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						width="90"
						height="90"
						className="linear-circle"
						ref={progressCircle}
					>
						<defs>
							<linearGradient id="bg_gradient">
								<stop offset="0%" stopColor="#AB1D44" />
								<stop offset="39%" stopColor="#AB1D44" />
								<stop offset="100%" stopColor="#AB1D44" />
							</linearGradient>
						</defs>
						<circle cx="24" cy="24" r="20" strokeLinecap="round"></circle>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="29"
						viewBox="0 0 40 29"
						fill="none"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M26.4206 1.7022V0.512451H24.0411V1.7022C24.0411 6.21977 26.5449 10.5647 30.3136 13.1386H0.974731V15.5181H30.3137C26.545 18.092 24.0411 22.4369 24.0411 26.9545V28.1442H26.4206V26.9545C26.4206 21.1059 31.6107 15.5384 37.8232 15.5181C37.8346 15.5182 37.8459 15.5182 37.8572 15.5182H39.047V15.5181V13.1387V13.1386H39.046H37.8572H37.8116C31.6042 13.1114 26.4206 7.54722 26.4206 1.7022Z"
							fill="#fff"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default MovieCardSliderSm;
