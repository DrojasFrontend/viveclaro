"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import Image from "next/image";

const ImageSequence = () => {
  const videoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Función para forzar la reproducción con audio
    const forcePlayWithAudio = async () => {
      if (videoRef.current) {
        try {
          videoRef.current.muted = false;
          videoRef.current.volume = 1;
          await videoRef.current.play();
        } catch (error) {
          console.log("Error al intentar reproducir con audio:", error);
          // Si falla, intentamos reproducir muteado
          videoRef.current.muted = true;
          videoRef.current.play().catch(e => console.log("Error reproduciendo muteado:", e));
        }
      }
    };

    if (videoRef.current) {
      videoRef.current.load();
      // Intentar reproducir con audio inmediatamente
      forcePlayWithAudio();
    }

    const textAnimation = gsap.to(".container", {
      opacity: 0,
      y: -50,
      duration: 1,
      scrollTrigger: {
        trigger: ".track",
        start: "top top",
        end: "10% top",
        scrub: true,
      },
    });

    const handleScroll = () => {
      if (videoRef.current) {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
          forcePlayWithAudio();
        } else {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }
    };

    let scrollAnimation = gsap.to(
      {},
      {
        scrollTrigger: {
          scrub: 0.5,
          trigger: ".track",
          start: "top top",
          end: "bottom bottom",
          pin: ".brick-wrap",
          markers: false,
        },
      }
    );

    window.addEventListener("scroll", handleScroll);

    const splitChars = new SplitType(".split_chars", {
      types: "chars",
      absolute: false,
    });

    const chars = splitChars.chars;
    gsap.from(chars, {
      duration: 1.3,
      delay: 0.5,
      autoAlpha: 0,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".split_chars",
        start: "top 90%",
        markers: false,
      },
    });

    // Intenta reproducir con audio cada vez que el documento obtenga el foco
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        forcePlayWithAudio();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (scrollAnimation) scrollAnimation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="track" id="section-0">
      <div className="brick-wrap">
        <div className="container position-absolute top-40 start-50 translate-middle mt-5 z-2">
          <div className="container mb-45">
            <div className="d-block justify-content-center mb-40 text-center">
              <Image
                src="/images/logotipo-viveclaro-white.png"
                alt="Vive Claro Logo"
                width={256}
                height={144}
                priority
              />
              <h2
                className="section-title large mb-20 lh-1"
                ref={textRef}
                data-cs-delay="0.8"
                data-cs-stagger="0.07"
              >
                ¡TE DAMOS LA BIENVENIDA!
              </h2>
              <p className="responsive--description fw-medium mb-4 color-white col-md-10 m-auto">
                El primer y más versátil espacio multipropósito para la cultura
                y el entretenimiento en Colombia.
              </p>
            </div>
          </div>
        </div>
        <video
          ref={videoRef}
          className="visibleDesktop"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          playsInline
          preload="auto"
          autoPlay
        >
          <source src="/video/video-hero-new.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
    </div>
  );
};

export default ImageSequence;