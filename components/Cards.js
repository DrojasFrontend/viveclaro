import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const movies = [
	{
		id: 1,
		title: "INVENTARIO FASE 1",
		image: "/images/location/fase-1.png",
		rating: "7.9",
		duration: "02h 00m",
		quality: "4k Quality",
		genres: ["Menace", "Comedy"],
	},
	{
		id: 2,
		title: "INVENTARIO FASE 2",
		image: "/images/location/fase-2.png",
		rating: "5.8",
		duration: "02h 30m",
		quality: "4k Quality",
		genres: ["Action", "Comedy", "Crime"],
	},
	{
		id: 3,
		title: "INVENTARIO FASE 3",
		image: "/images/location/fase-3.png",
		rating: "5.8",
		duration: "02h 30m",
		quality: "4k Quality",
		genres: ["Action", "Comedy", "Crime"],
	},
	{
		id: 4,
		title: "INVENTARIO FASE 4",
		image: "/images/location/fase-4.png",
		rating: "5.8",
		duration: "02h 30m",
		quality: "4k Quality",
		genres: ["Action", "Comedy", "Crime"],
	},
];

const NewestReleases = () => {
	const [currentMovie, setCurrentMovie] = useState(null);
	const [currentIndex, setCurrentIndex] = useState(0);

	const openModal = (movie, index) => {
		setCurrentMovie(movie);
		setCurrentIndex(index);
		document.querySelector(".modal-overlay").classList.add("active");
		document.body.style.overflow = "hidden";
	};

	const closeModal = () => {
		setCurrentMovie(null);
		document.querySelector(".modal-overlay").classList.remove("active");
		document.body.style.overflow = "auto";
	};

	const prevMovie = (e) => {
		e.stopPropagation();
		if (currentIndex > 0) {
			const newIndex = currentIndex - 1;
			setCurrentIndex(newIndex);
			setCurrentMovie(movies[newIndex]);
		}
	};

	const nextMovie = (e) => {
		e.stopPropagation();
		if (currentIndex < movies.length - 1) {
			const newIndex = currentIndex + 1;
			setCurrentIndex(newIndex);
			setCurrentMovie(movies[newIndex]);
		}
	};

	useEffect(() => {
		const handleEsc = (e) => {
			if (e.key === "Escape") {
				closeModal();
			}
		};
		window.addEventListener("keydown", handleEsc);
		return () => window.removeEventListener("keydown", handleEsc);
	}, []);

	return (
		<>
			<div className="design-area pt-80 bckg-53301B">
				<div className="hl-container d-flex align-items-center justify-content-between mb--20">
					<div className="position-relative container z-1">
						<div className="d-block justify-content-start">
							<h2 className="section-title large mb-20 lh-1 text-center">
								CONOCE LA PROPUESTA DE DISEÑO <br /> PAISAJÍSTICO DE VIVE CLARO
							</h2>
							<p className="responsive--description fw-medium mb-4 col-md-10 color-white text-center m-auto">
								El diseño diseño paisajístico de Vive Claro{" "}
								<strong>
									busca consolidar un entorno natural que fomente la diversidad
									vegetal y la integración de la fauna urbana
								</strong>
								. Mediante la incorporación de{" "}
								<strong>herbáceas, arbustos y árboles</strong>, crearemos
								espacios visualmente atractivos que, además de{" "}
								<strong>
									embellecer el paisaje, ofrecen refugio y alimentación a la
									fauna
								</strong>
								, permitiendo su libre movilidad a lo largo del área. Este
								enfoque busca armonizar la naturaleza con el entorno urbano,
								creando un espacio sostenible y lleno de vida.
							</p>
						</div>
					</div>
					{/* <div className="slider-btn-wrapper d-flex align-items-center justify-content-center gap-3">
            <button className="slider-btn slider-btn--sm newest-release-prev-slide"></button>
            <button className="slider-btn next-slide slider-btn--sm newest-release-next-slide"></button>
          </div> */}
				</div>
				<div className="pt-80">
					<div className="hl-container">
						<div className="row pb-80">
							{movies.map((movie, index) => (
								<div
									className="movie-card-small position-relative style-three col-md-3"
									onClick={() => openModal(movie, index)}
									style={{ cursor: "pointer" }}
								>
									<div className="thumb">
										<Image
											src={movie.image}
											alt={movie.title}
											width={1000}
											height={300}
										/>
									</div>

									<div className="details details-two position-absolute">
										<h4 className="movie-name text-uppercase">
											<span className="gradient-link color-black">
												{movie.title}
											</span>
										</h4>
									</div>

									{/* <div className="options">
										{[
											{ icon: "add-playlist", alt: "playlist" },
											{ icon: "casting", alt: "casting" },
											{ icon: "add-favourite", alt: "favourite" },
											{ icon: "share", alt: "share" },
										].map((option, index) => (
											<button
												key={index}
												className={`option-btn options--${index + 1}`}
												onClick={(e) => e.stopPropagation()}
											>
												<Image
													src={`/images/icons/card/${option.icon}.svg`}
													alt={option.alt}
													width={24}
													height={24}
												/>
											</button>
										))}
									</div> */}
								</div>
							))}
						</div>
					</div>
				</div>

				{/* <Swiper
					modules={[Navigation]}
					navigation={{
						prevEl: ".newest-release-prev-slide",
						nextEl: ".newest-release-next-slide",
					}}
					spaceBetween={20}
					slidesPerView={4}
					breakpoints={{
						320: { slidesPerView: 1 },
						576: { slidesPerView: 2 },
						992: { slidesPerView: 3 },
						1200: { slidesPerView: 4 },
					}}
					className="pt-60 pb-80"
				>
					{movies.map((movie, index) => (
						<SwiperSlide key={movie.id}>
							<div
								className="movie-card-small position-relative style-three"
								onClick={() => openModal(movie, index)}
								style={{ cursor: "pointer" }}
							>
								<div className="thumb">
									<Image
										src={movie.image}
										alt={movie.title}
										width={1000}
										height={300}
									/>
								</div>

								<div className="details details-two position-absolute">
									<h4 className="movie-name text-uppercase">
										<span className="gradient-link color-black">
											{movie.title}
										</span>
									</h4>
								</div>

								<div className="options">
									{[
										{ icon: "add-playlist", alt: "playlist" },
										{ icon: "casting", alt: "casting" },
										{ icon: "add-favourite", alt: "favourite" },
										{ icon: "share", alt: "share" },
									].map((option, index) => (
										<button
											key={index}
											className={`option-btn options--${index + 1}`}
											onClick={(e) => e.stopPropagation()}
										>
											<Image
												src={`/images/icons/card/${option.icon}.svg`}
												alt={option.alt}
												width={24}
												height={24}
											/>
										</button>
									))}
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper> */}
			</div>

			{/* Modal */}
			<div className="modal-overlay" onClick={closeModal}>
				<div className="modal-content" onClick={(e) => e.stopPropagation()}>
					{currentMovie && (
						<>
							<button className="modal-close" onClick={closeModal}>
								×
							</button>

							<div className="modal-image-container">
								<Image
									src={currentMovie.image}
									alt={currentMovie.title}
									width={800}
									height={450}
									className="modal-image"
								/>

								{currentIndex > 0 && (
									<button
										className="modal-navigation modal-prev"
										onClick={prevMovie}
									>
										&#8249;
									</button>
								)}

								{currentIndex < movies.length - 1 && (
									<button
										className="modal-navigation modal-next"
										onClick={nextMovie}
									>
										&#8250;
									</button>
								)}
							</div>

							<div className="modal-info">
								<h3 className="modal-title">{currentMovie.title}</h3>

								{/* <div className="modal-stats">
									<span>
										<Image
											src="/images/icons/card/star-fill.svg"
											alt="star"
											width={16}
											height={16}
											className="mr-2"
										/>
										{currentMovie.rating}
									</span>
									<span>
										<Image
											src="/images/icons/card/clock-fill.svg"
											alt="clock"
											width={16}
											height={16}
											className="mr-2"
										/>
										{currentMovie.duration}
									</span>
									<span>
										<Image
											src="/images/icons/card/4k-fill.svg"
											alt="4k"
											width={16}
											height={16}
											className="mr-2"
										/>
										{currentMovie.quality}
									</span>
								</div> */}

								{/* <div className="modal-genres">
									{currentMovie.genres.map((genre, index) => (
										<span key={index} className="genre-tag">
											{genre}
										</span>
									))}
								</div> */}
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default NewestReleases;
