"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import Image from "next/image";

import { Volume2, VolumeX } from "lucide-react";
import LinkinPark from "/public/images/Linkin-Park_Banner-Web_con-logos.jpg";
import LinkinParkMobile from "/public/images/Linkin-Park_Banner-Web_con-logos_Vertical.jpg";

const ImageSequence = () => {
	const videoRef = useRef(null);
	const mobileVideoRef = useRef(null);
	const [isMuted, setIsMuted] = useState(true);
	const [isMobile, setIsMobile] = useState(false);

	const swiperRef = useRef(null);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);

		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	useEffect(() => {
		const playVideo = async () => {
			try {
				const currentVideo = isMobile
					? mobileVideoRef.current
					: videoRef.current;
				if (currentVideo) {
					currentVideo.muted = isMuted;
					currentVideo.volume = 1;
					await currentVideo.play();
				}
			} catch (err) {
				console.log("Error reproducing video:", err);
			}
		};

		playVideo();

		const handleVisibilityChange = () => {
			if (document.visibilityState === "visible") {
				playVideo();
			}
		};

		document.addEventListener("visibilitychange", handleVisibilityChange);
		return () =>
			document.removeEventListener("visibilitychange", handleVisibilityChange);
	}, [isMuted, isMobile]);

	const toggleAudio = () => {
		setIsMuted(!isMuted);
		const currentVideo = isMobile ? mobileVideoRef.current : videoRef.current;
		if (currentVideo) {
			currentVideo.muted = !isMuted;
		}
	};

	return (
		<Swiper
			modules={[Autoplay, EffectCoverflow]}
			slidesPerView={1}
			speed={500}
			spaceBetween={10}
			loop={true}
			centeredSlides={true}
			preventClicks={true}
			preventClicksPropagation={true}
			touchRatio={1.5}
			watchSlidesProgress={true}
			autoplay={{
				delay: 10000000,
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
		>
			<SwiperSlide>
				{!isMobile && (
					<Image
						src={LinkinPark}
						alt=""
						width={1980}
						height={1000}
						style={{
							objectFit: "contain",
							objectPosition: "center",
						}}
						className="w-100"
					/>
				)}
				{isMobile && (
					<div className="pt-100">
						<Image
							src={LinkinParkMobile}
							alt=""
							width={900}
							height={600}
							style={{ width: "100%", height: "auto" }}
							className="w-full"
						/>
					</div>
				)}
			</SwiperSlide>
			<SwiperSlide>
				<div
					id="section-0"
					style={{ position: "relative", width: "100%", height: "100vh" }}
				>
					<div style={{ position: "relative", width: "100%", height: "100%" }}>
						<button onClick={toggleAudio} className="button-play">
							{isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
						</button>

						{!isMobile && (
							<video
								className="z-1"
								ref={videoRef}
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
									objectFit: "contain",
								}}
								autoPlay
								loop
								playsInline
								preload="auto"
							>
								<source src="/video/video-hero-new-2025.mp4" type="video/mp4" />
							</video>
						)}

						{isMobile && (
							<video
								ref={mobileVideoRef}
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
									objectFit: "contain",
								}}
								autoPlay
								loop
								playsInline
								preload="auto"
							>
								<source
									src="/video/video-mobile-new-2025.mp4"
									type="video/mp4"
								/>
							</video>
						)}
					</div>
				</div>
			</SwiperSlide>
		</Swiper>
	);
};

export default ImageSequence;
