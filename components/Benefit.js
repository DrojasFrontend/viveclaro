import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const categories = [
	{
		id: 1,
		image: "/images/clients/preventa.svg",
		title: "Preventa de boletería",
	},
	{
		id: 2,
		image: "/images/clients/parqueadero.svg",
		title: "Parqueadero preferente",
	},
	{
		id: 3,
		image: "/images/clients/fila-rapida.svg",
		title: "⁠Fila rápida",
	},
	{
		id: 4,
		image: "/images/clients/vip.svg",
		title: "⁠Zonas VIP",
	},
	{
		id: 5,
		image: "/images/clients/beneficio.svg",
		title: "⁠Beneficios en alimentos y bebidas",
	},
	{
		id: 6,
		image: "/images/clients/preventa.svg",
		title: "Preventa de boletería",
	},
	{
		id: 7,
		image: "/images/clients/parqueadero.svg",
		title: "Parqueadero preferente",
	},
	{
		id: 8,
		image: "/images/clients/fila-rapida.svg",
		title: "⁠Fila rápida",
	},
	{
		id: 9,
		image: "/images/clients/vip.svg",
		title: "⁠Zonas VIP",
	},
	{
		id: 10,
		image: "/images/clients/beneficio.svg",
		title: "⁠Beneficios en alimentos y bebidas",
	},
];

const CategoriesSlider = () => {
	return (
		<div className="bckg-FFFFFF pb-80">
			<div className="col-md-6 m-auto">
				<div className="position-relative center-title z-1">
					<div className="d-block justify-content-start mb-40">
						<h3 className="position-relative section-title small mb-20 lh-1 bckg-000000">¿ERES CLIENTE CLARO</h3>
						<p className="responsive--description fw-medium mt-30 text-center color-white">
							Conoce los excelentes beneficios que tenemos para ti.
						</p>
					</div>
				</div>
			</div>
			<div className="section-bckg">
				<div className="category pt-0 pb-20">
					<Swiper
						modules={[Autoplay]}
						speed={7000}
						spaceBetween={30}
						loop={true}
						autoplay={{
							delay: 1,
							pauseOnMouseEnter: true,
							disableOnInteraction: false,
						}}
						breakpoints={{
							0: { slidesPerView: 1 },
							576: { slidesPerView: 2 },
							768: { slidesPerView: 2 },
							992: { slidesPerView: 3 },
							1200: { slidesPerView: 5 },
							1500: { slidesPerView: 5 },
							1700: { slidesPerView: 5, spaceBetween: 40 },
						}}
						className="categories-slider"
					>
						{categories.map((category) => (
							<SwiperSlide key={category.id} className="category-card">
								<div className="thumbnail">
									<Image
										src={category.image}
										alt={category.title}
										width={80}
										height={80}
										className="thumb-img w-100"
									/>
								</div>
								<div className="details text-center justify-content-center color-black">
									<p className="">{category.title}</p>
									{/* <Link
										href="/category"
										className="hl-btn circle-btn flex-shrink-0"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="25"
											height="18"
											viewBox="0 0 25 18"
											fill="none"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M16.3368 0.763844V0H14.8091V0.763844C14.8091 3.66421 16.4166 6.45372 18.8361 8.10623H0V9.63392H18.8362C16.4166 11.2864 14.8091 14.0759 14.8091 16.9763V17.7401H16.3368V16.9763C16.3368 13.2214 19.6689 9.64694 23.6575 9.63396C23.6648 9.63398 23.672 9.63399 23.6793 9.63399H24.4431V9.63392V8.1063V8.10623H24.4425H23.6793H23.65C19.6648 8.0888 16.3368 4.51646 16.3368 0.763844Z"
												fill="currentColor"
											/>
										</svg>
									</Link> */}
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
      {/* <p className="col-md-7 m-auto text-center">
        *Al ingresar esta información, autorizas que tus datos sean tratados para fines informativos exclusivos de nuestra actividad comercial. Tus datos personales serán tratados con confidencialidad.
      </p> */}
		</div>
	);
};

export default CategoriesSlider;
