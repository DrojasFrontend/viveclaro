import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import LoadingCounter from "../components/LoadingCounter";
import ImageSequence from "../components/ImageSequence";
import HeroVideo from "../components/HeroVideo";
import MovieCardSliderSm from "../components/MovieCardSliderSm";
import DistritoCultura from "../components/DistritoCultura";
import Benefit from "../components/Benefit";
import Location from "../components/Location";
import Cards from "../components/Cards";
import HeroSlider from "../components/HeroSlider";
import Promotor from "../components/Promotor";
import Link from "next/link";
import RotateMovieSlider from "@/components/RotateMovieSlider";

const amx = localFont({
	src: "../public/fonts/AMX-Medium.woff",
	variable: "--font-amx",
	weight: "500",
});

const ctas = [
	{ id: 1, link: "Eventos" },
	{ id: 2, link: "Distrito Cultural" },
	{ id: 3, link: "Vive Claro" },
	{ id: 4, link: "Clientes Claro " },
	{ id: 5, link: "Ubicación" },
	{ id: 6, link: "Diseño Paisajístico" },
	{ id: 7, link: "Valores" },
	{ id: 8, link: "Contáctanos" },
	{ id: 9, link: "Patrocinadores" },
];

const sectionColors = {
	"section-0": "#510000",
	"section-1": "#ffa131",
	"section-2": "#000000",
	"section-3": "#cfd952",
	"section-4": "#000000",
	"section-5": "#7a253e",
	"section-6": "#034234",
	"section-7": "#6f7429",
	"section-8": "#000000",
};

export default function Home() {
	const [headerColor, setHeaderColor] = useState("#510000");
	const [currentSection, setCurrentSection] = useState(null);

	useEffect(() => {
		const sections = document.querySelectorAll('div[id^="section-"]');
		console.log("Secciones encontradas:", sections.length); // Para depuración

		const options = {
			threshold: 0.2, // Reducimos el threshold para mejor detección
			rootMargin: "10px 0px -250px 0px",
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const sectionId = entry.target.id;
					setCurrentSection(sectionId); // Para depuración
					console.log("Sección visible:", sectionId); // Para depuración
					if (sectionColors[sectionId]) {
						setHeaderColor(sectionColors[sectionId]);
					}
				}
			});
		}, options);

		sections.forEach((section) => {
			console.log("ID de sección:", section.id); // Para depuración
			observer.observe(section);
		});

		// Solo inicializar Hotjar en el lado del cliente
		if (typeof window !== "undefined") {
			import("@hotjar/browser")
				.then((hotjarModule) => {
					const Hotjar = hotjarModule.default;
					try {
						Hotjar.init(5231184, 6);
					} catch (error) {
						console.warn("Error initializing Hotjar:", error);
					}
				})
				.catch((error) => {
					console.warn("Error loading Hotjar module:", error);
				});
		}

		return () => {
			sections.forEach((section) => observer.unobserve(section));
		};
	}, []);

	return (
		<>
			<Head>
				<title>
					Viveclaro | El primer y más grande espacio verde multipropósito
				</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />

				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-FE4DTJ3LV5"
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FE4DTJ3LV5');
            `,
					}}
				/>
			</Head>
			<header
				className={`visibleDesktop ${amx.variable} header-area pt-10 pb-10 visibleDesktop`}
				style={{
					backgroundColor: headerColor,
					transition: "background-color 0.3s ease",
				}}
			>
				<div className="pl-2 pr-2">
					<div className="d-flex justify-content-between align-items-center">
						<div className="">
							<Image
								src="/images/logo-white.png"
								alt="logo"
								width={190}
								height={80}
							/>
						</div>
						<div className="d-flex align-items-center gap-3">
							{ctas.map((cta) => (
								<Link
									key={cta.id}
									className="color-white"
									href={`#section-${cta.id}`}
									onClick={(e) => {
										e.preventDefault();
										const element = document.getElementById(
											`section-${cta.id}`
										);
										if (element) {
											const elementPosition = element.offsetTop - 100;
											window.scrollTo({
												top: elementPosition,
												behavior: "smooth",
											});
										}
									}}
								>
									{cta.link}
								</Link>
							))}
						</div>
					</div>
				</div>
			</header>
			<div className={`${amx.variable}`}>
				<main>
					<div className="visibleDesktop">
						<ImageSequence />
					</div>
					<div className="visibleMobile">
						<HeroVideo />
					</div>
					<MovieCardSliderSm />
					<DistritoCultura />
					<RotateMovieSlider />
					<Benefit />
					<Location />
					<Cards />
					<HeroSlider />
					<Promotor />
				</main>
				<footer className="footer pt-30 pb-30">
					<div className="container">
						<div className="d-lg-flex justify-content-between align-content-center">
							<div class="col-lg-3 text-center mb-30 mb-lg-0">
								<Image
									src="/images/logotipo-viveclaro-distrito-red.png"
									alt="logo"
									width={256}
									height={186}
									className="logo-footer"
								/>
							</div>
							{/* <div className="col-lg-3 mb-30 mb-lg-0">
								<h5 className="">Suscríbete</h5>
								<form>
									<input
										type="email"
										placeholder="Tu correo electrónico"
										className="input"
									/>
									<button className="custom-button">Suscríbete</button>
								</form>
							</div> */}
							<div className="col-lg-3 d-flex align-items-center justify-content-center flex-column gap-4 gap-lg-0">
								<p>Síguenos en redes sociales</p>
								<div className="social d-flex flex-row gap-2">
									<Link
										href="https://www.instagram.com/viveclaro_co/ "
										target="_blank"
									>
										<Image
											src="/images/icons/social/instagram.svg"
											alt="instagram"
											width={30}
											height={30}
										/>
									</Link>
									<Link
										href="https://www.tiktok.com/@viveclaro_co"
										target="_blank"
									>
										<Image
											src="/images/icons/social/tiktok.svg"
											alt="facebook"
											width={30}
											height={30}
										/>
									</Link>

									<Link
										href="https://www.youtube.com/@ViveClaro_Co"
										target="_blank"
									>
										<Image
											src="/images/icons/social/youtube.svg"
											alt="youtube"
											width={30}
											height={30}
										/>
									</Link>

									{/* <Image src="/images/icons/social/whatsapp.svg" alt="whatsapp" width={30} height={30}/> */}
								</div>
							</div>
							<div className="col-lg-3 d-flex align-items-center justify-content-center mt-30 mt-lg-0">
								<Link href="">
									<span className="d-flex align-items-center gap-3">
										<Image
											src="/images/send.png"
											alt="clock"
											width={30}
											height={30}
										/>
										<div>
											<p>
												Calle 53 #66-19, <br />
												Bogotá D.C, Colombia.
											</p>
										</div>
									</span>
								</Link>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
}
