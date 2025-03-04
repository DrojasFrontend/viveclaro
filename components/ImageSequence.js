"use client";
import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const ImageSequence = () => {
  const videoRef = useRef(null);
  const mobileVideoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const playVideo = async () => {
      try {
        const currentVideo = isMobile ? mobileVideoRef.current : videoRef.current;
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
      if (document.visibilityState === 'visible') {
        playVideo();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isMuted, isMobile]);

  const toggleAudio = () => {
    setIsMuted(!isMuted);
    const currentVideo = isMobile ? mobileVideoRef.current : videoRef.current;
    if (currentVideo) {
      currentVideo.muted = !isMuted;
    }
  };

  return (
    <div id="section-0" style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <button onClick={toggleAudio} className="button-play">
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
        
        {!isMobile && (
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
          >
            <source src="/video/video-hero-new-2025.mp4" type="video/mp4" />
          </video>
        )}

        {isMobile && (
          <video
            ref={mobileVideoRef}
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
          >
            <source src="/video/video-mobile-new-2025.mp4" type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  );
};

export default ImageSequence;