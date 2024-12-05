"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Volume2, VolumeX } from "lucide-react";

const ImageSequence = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          videoRef.current.muted = isMuted;
          videoRef.current.volume = 1;
          await videoRef.current.play();
        }
      } catch (err) {
        console.log("Error reproducing video:", err);
      }
    };

    playVideo();

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        playVideo();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isMuted]);

  const toggleAudio = () => {
    if (videoRef.current) {
      setIsMuted(!isMuted);
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <div id="section-0" style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <div className="container position-absolute top-40 start-50 translate-middle mt-5 z-2">
          <div className="container mb-45">
            <div className="d-block justify-content-center mb-40 text-center">
              {/* <Image
                src="/images/logotipo-viveclaro-white.png"
                alt="Vive Claro Logo"
                width={256}
                height={144}
                priority
              /> */}
              {/* <h2
                className="section-title large mb-20 lh-1"
                data-cs-delay="0.8"
                data-cs-stagger="0.07"
              >
                ¡TE DAMOS LA BIENVENIDA!
              </h2>
              <p className="responsive--description fw-medium mb-4 color-white col-md-10 m-auto">
                El primer y más versátil espacio multipropósito para la cultura
                y el entretenimiento en Colombia.
              </p> */}
            </div>
          </div>
        </div>
        {/* Botón de audio */}
        <button
          onClick={toggleAudio}
					className="button-play"
          style={{
           
          }}
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
        <video
        className="z-1"
          ref={videoRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
          autoPlay
          loop
          playsInline
          preload="auto"
          muted
        >
          <source src="/video/video-hero-new.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>

        <div className="visibleMobile">
        <video
          ref={videoRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
          autoPlay
          loop
          playsInline
          preload="auto"
          muted
        >
          <source src="/video/video-mobile.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        </div>
      </div>
    </div>
  );
};

export default ImageSequence;