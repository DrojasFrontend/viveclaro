"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const HeroVideo = () => {
  return (
    <div className="track track-video" id="section-0">
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
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1
          }}
        >
          <source src="/video/video-hero.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
    </div>
  );
};

export default HeroVideo;