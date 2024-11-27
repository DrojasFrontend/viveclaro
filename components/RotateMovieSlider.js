import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const movies = [
	{
		id: 1,
		image: "/images/foro.jpg",
		title: "FORO",
		rating: "Mayo 16",
		duration: "6PM - 10PM",
		quality: "4k Quality",
		description: "Descubre un espacio diseñado para envolverte en la magia de la música y el show. Con una estructura de graderías temporales y modulares que se adaptan a cada evento, este foro garantiza una conexión única con tus artistas favoritos.",
		certificates: [
			"/images/icons/certificate-1.webp",
			"/images/icons/certificate-2.webp",
			"/images/icons/certificate-3.webp",
		],
	},
	{
		id: 2,
		image: "/images/foro.jpg",
		title: "ARENA",
		rating: "Octubre 10 al 13",
		duration: "6PM - 10PM",
		quality: "4k Quality",
		description: "Si buscas un lugar donde la grandeza y la espectacularidad cobran vida, este es el sitio. Nuestra carpa central transforma cada evento en una experiencia memorable, alojando espectáculos circenses, exhibiciones de gran formato y eventos de alto impacto.",
		certificates: [
			"/images/icons/certificate-1.webp",
			"/images/icons/certificate-2.webp",
			"/images/icons/certificate-3.webp",
		],
	},
	{
		id: 3,
		image: "/images/foro.jpg",
		title: "ZONAS VERDES",
		rating: "Noviembre 6",
		duration: "6PM - 10PM",
		quality: "4k Quality",
		description: "Diseñadas para ser el epicentro de la diversión, los festivales y la cultura. Aquí, podrás disfrutar de una variedad de opciones gastronómicas, recreativas y de entretenimiento al aire libre, creando un entorno perfecto para explorar y relajarte en medio de la naturaleza.",
		certificates: [
			"/images/icons/certificate-1.webp",
			"/images/icons/certificate-2.webp",
			"/images/icons/certificate-3.webp",
		],
	},
	{
		id: 4,
		image: "/images/foro.jpg",
		title: "FOROS",
		rating: "Noviembre 6",
		duration: "6PM - 10PM",
		quality: "4k Quality",
		description: "Descubre un espacio diseñado para envolverte en la magia de la música y el show. Con una estructura de graderías temporales y modulares que se adaptan a cada evento, este foro garantiza una conexión única con tus artistas favoritos.",
		certificates: [
			"/images/icons/certificate-1.webp",
			"/images/icons/certificate-2.webp",
			"/images/icons/certificate-3.webp",
		],
	},
	{
		id: 5,
		image: "/images/foro.jpg",
		title: "ARENA",
		rating: "Noviembre 6",
		duration: "6PM - 10PM",
		quality: "4k Quality",
		description: "Si buscas un lugar donde la grandeza y la espectacularidad cobran vida, este es el sitio. Nuestra carpa central transforma cada evento en una experiencia memorable, alojando espectáculos circenses, exhibiciones de gran formato y eventos de alto impacto.",
		certificates: [
			"/images/icons/certificate-1.webp",
			"/images/icons/certificate-2.webp",
			"/images/icons/certificate-3.webp",
		],
	},
	{
		id: 6,
		image: "/images/foro.jpg",
		title: "ZONAS VERDES",
		rating: "Noviembre 6",
		duration: "6PM - 10PM",
		quality: "4k Quality",
		description: "Diseñadas para ser el epicentro de la diversión, los festivales y la cultura. Aquí, podrás disfrutar de una variedad de opciones gastronómicas, recreativas y de entretenimiento al aire libre, creando un entorno perfecto para explorar y relajarte en medio de la naturaleza.",
		certificates: [
			"/images/icons/certificate-1.webp",
			"/images/icons/certificate-2.webp",
			"/images/icons/certificate-3.webp",
		],
	},
];

const RotateMovieSlider = () => {
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
		<div className="movie-slider rotate-movie-slider py-80">
			<div className="container mb-45">
				<div className="d-block justify-content-start mb-40">
					<h2 className="section-title large mb-20 lh-1">
					UN LUGAR PARA TODOS
					</h2>
					<p className="responsive--description fw-medium mb-4 col-md-6 color-white">
						Vive Claro te sumergirá en un universo vibrante de emociones, con lugares versátiles diseñados para vivir momentos inolvidables. ¡Conócelos!
					</p>
				</div>
			</div>
			<Swiper
				modules={[Autoplay, EffectCoverflow]}
				speed={500} // Reducida la velocidad
				slidesPerView="auto"
				spaceBetween={0}
				centeredSlides={true}
				loop={true}
				preventClicks={true}
				preventClicksPropagation={true}
				touchRatio={1.5}
				watchSlidesProgress={true}
				autoplay={{
					delay: 10000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				}}
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
				}}
				slideToClickedSlide={true}
				effect="coverflow"
				coverflowEffect={{
					rotate: 0,
					stretch: 0, // Reducido
					depth: 0,
					modifier: 1,
					slideShadows: false,
				}}
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
				className="rotate-movie-slider"
			>
				{movies.map((movie) => (
					<SwiperSlide
						key={movie.id}
						className="rotate-movie-card position-relative"
					>
						<div className="thumb">
							<Image
								src={movie.image}
								alt={movie.title}
								fill
								style={{
										objectFit: "cover",
										objectPosition: "bottom",
									}}
							/>
						</div>

						<div className="content position-absolute start-0 bottom-0 w-100 text-center">
							<h3 className="card-title text-uppercase lh-1">
								<Link href="#" className="gradient-link">
									{movie.title}
								</Link>
							</h3>
							{/* <ul className="movie-info-list d-flex align-item-center justify-content-center gap-1 gap-lg-2">
								<li className="movie-info-list--item style-two radius-100">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
									>
										<path
											d="M8.00004 12.4493L3.05574 15.2169L4.16001 9.65938L0 5.81235L5.62676 5.14521L8.00004 0L10.3733 5.14521L16 5.81235L11.8401 9.65938L12.9443 15.2169L8.00004 12.4493Z"
											fill="currentColor"
										/>
									</svg>
									<span>{movie.rating}</span>
								</li>
								<li className="movie-info-list--item style-two radius-100">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="15"
										height="15"
										viewBox="0 0 15 15"
										fill="none"
									>
										<path
											d="M7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15ZM8.25 7.5V3.75H6.75V9H11.25V7.5H8.25Z"
											fill="currentColor"
										/>
									</svg>
									<span>{movie.duration}</span>
								</li>
								
							</ul> */}
							<p className="card-description">{movie.description}</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className="slider-btn-wrapper d-flex align-item-center justify-content-center gap-4 mt-4 pt-lg-1">
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

export default RotateMovieSlider;
