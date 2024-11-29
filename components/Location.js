import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
	Navigation,
	Autoplay,
	Pagination,
	EffectCoverflow,
} from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

// Data Array
const shows = [
	{
		id: 1,
		image: "/images/location/fase-1.png",
		badge: "01",
		title: "Conciertos",
		rating: "Mayo 16",
		duration: "6PM - 10PM",
		quality: "8k Quality",
		genres: ["Family", "Comedy", "Drama"],
	},
	{
		id: 2,
		image: "/images/location/fase-2.png",
		badge: "02",
		title: "Eventos deportivos",
		rating: "Octubre 10",
		duration: "6PM - 10PM",
		quality: "8k Quality",
		genres: ["Action", "Comedy", "Crime"],
	},
	{
		id: 3,
		image: "/images/location/fase-3.png",
		badge: "03",
		title: "The Shadow",
		rating: "Noviembre 6",
		duration: "6PM - 10PM",
		quality: "8k Quality",
		genres: ["Family", "Comedy", "Drama"],
	},
	{
		id: 4,
		image: "/images/location/fase-4.png",
		badge: "04",
		title: "PÁRAMO PRESENTA",
		rating: "8.8",
		duration: "6PM - 10PM",
		rating: "Noviembre 16",
		genres: ["Action", "Comedy", "Crime"],
	},
	{
		id: 5,
		image: "/images/location/fase-1.png",
		badge: "01",
		title: "Conciertos",
		rating: "Mayo 16",
		duration: "6PM - 10PM",
		quality: "8k Quality",
		genres: ["Family", "Comedy", "Drama"],
	},
	{
		id: 6,
		image: "/images/location/fase-2.png",
		badge: "02",
		title: "Eventos deportivos",
		rating: "Octubre 10",
		duration: "6PM - 10PM",
		quality: "8k Quality",
		genres: ["Action", "Comedy", "Crime"],
	},
	{
		id: 7,
		image: "/images/location/fase-3.png",
		badge: "03",
		title: "The Shadow",
		rating: "Noviembre 6",
		duration: "6PM - 10PM",
		quality: "8k Quality",
		genres: ["Family", "Comedy", "Drama"],
	},
	{
		id: 8,
		image: "/images/location/fase-4.png",
		badge: "04",
		title: "PÁRAMO PRESENTA",
		rating: "8.8",
		duration: "6PM - 10PM",
		rating: "Noviembre 16",
		genres: ["Action", "Comedy", "Crime"],
	},
];

const Location = () => {
	const progressCircle = useRef(null);
	const swiperRef = useRef(null);
	const handlePrev = () => {
		if (swiperRef.current && !swiperRef.current.animating) {
			swiperRef.current.slidePrev(500);
		}
	};

	const handleNext = () => {
		if (swiperRef.current && !swiperRef.current.animating) {
			swiperRef.current.slideNext(500);
		}
	};
	return (
		<div className="location-area pb-80">
			<div className="col-md-6 m-auto">
				<div className="center-title">
					<div className="d-block justify-content-start mb-40">
						<h3 className="section-title small mb-20 lh-1 bckg-cfd952 color-black">
							¡Aquí se encuentra vive claro!
						</h3>
					</div>
				</div>
			</div>
			<div className="section-bckg">
				<div className="row">
					<div className="col-xl-5 col-lg-5">
						<div className="section-headeng position-relative mt-80">
							<Image
								src="/images/logotipo-viveclaro-white.png"
								alt="clock"
								width={256}
								height={144}
							/>
							<h2
								className="section-title large mb-20 lh-1 color-white"
								data-cs-stagger="0.07"
							>
								Ubicación
							</h2>
							<p className="section-description-2 mb-xl-4 mb-3 pb-2 fade-slide bottom color-white">
								Nos encontramos en una ubicación estratégica en la zona de
								Salitre de Bogota,{" "}
								<strong>
									entre la Calle 53, Calle 26 y Cra 60. ¡Te esperamos!
								</strong>
							</p>
							{/* <div className="home-4-3d-slider-control mt-50">
								<div className="d-flex align-item-center justify-content-center gap-4">
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
											<circle
												cx="24"
												cy="24"
												r="20"
												strokeLinecap="round"
											></circle>
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
								<div className="slider-pagination"></div>
							</div> */}
						</div>
					</div>
					<div className="position-relative col-xl-7 col-lg-7 col-md-12 overflow-hidden border-radius-50">
						<Image
							src="/images/location/fase-1.png"
							alt=""
							width={500}
							height={600}
							style={{
								objectFit: "cover",
								objectPosition: "center",
							}}
							className="w-100 flow-hidden border-radius-50"
						/>
					</div>
					{/* <div className="col-xl-8 col-lg-8 col-md-12 overflow-hidden">
						<div className="swiper swiper-3d-slider">
							<div className="swiper-container">
								<div className="swiper-wrapper">
									<Swiper
										modules={[
											Autoplay,
											EffectCoverflow,
											Navigation,
											Pagination,
										]}
										effect="coverflow"
										centeredSlides={true}
										speed={500}
										loop={true}
										slidesPerView={5.5}
										allowTouchMove={false}
										touchRatio={1.5}
										watchSlidesProgress={true}
										observer={true}
										onAutoplayTimeLeft={(s, time, progress) => {
											if (progressCircle.current) {
												progressCircle.current.style.setProperty(
													"--progress",
													1 - progress
												);
											}
										}}
										coverflowEffect={{
											rotate: -2,
											modifier: -1,
											slideShadows: false,
											stretch: "-80%",
										}}
										autoplay={{
											delay: 5000,
											disableOnInteraction: false,
											pauseOnMouseEnter: true,
										}}
										navigation={{
											nextEl: ".hero-4-3d-next-slide",
											prevEl: ".hero-4-3d-prev-slide",
										}}
										pagination={{
											el: ".slider-pagination",
											type: "fragtion",
										}}
										breakpoints={{
											0: {
												slidesPerView: 1,
												coverflowEffect: {
													stretch: "-98%",
												},
											},
											600: {
												slidesPerView: 2,
												coverflowEffect: {
													stretch: "-98%",
												},
											},
											992: {
												slidesPerView: 5.5,
												coverflowEffect: {
													stretch: "-95%",
												},
											},
											1024: {
												slidesPerView: 5.5,
												coverflowEffect: {
													stretch: "-85%",
												},
											},
											1366: {
												slidesPerView: 5.5,
												coverflowEffect: {
													stretch: "-85%",
												},
											},
										}}
										onSwiper={(swiper) => {
											swiperRef.current = swiper;
										}}
										className="mySwiper"
									>
										{shows.map((show) => (
											<>
												<SwiperSlide key={show.id}>
													<Image
														src={show.image}
														alt={show.title}
														width={500}
														height={600}
														style={{
															objectFit: "cover",
															objectPosition: "center",
														}}
														className="w-100"
													/>
												</SwiperSlide>
											</>
										))}
									</Swiper>
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Location;
