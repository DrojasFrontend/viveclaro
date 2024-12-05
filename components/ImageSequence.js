"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Volume2, VolumeX } from "lucide-react";

const ImageSequence = () => {
 const videoRef = useRef(null);
 const mobileVideoRef = useRef(null);
 const [isMuted, setIsMuted] = useState(true);

 useEffect(() => {
   const playVideo = async () => {
     try {
       if (videoRef.current) {
         videoRef.current.muted = isMuted;
         videoRef.current.volume = 1;
         await videoRef.current.play();
       }
       if (mobileVideoRef.current) {
         mobileVideoRef.current.muted = isMuted;
         mobileVideoRef.current.volume = 1;
         await mobileVideoRef.current.play();
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
   setIsMuted(!isMuted);
   if (videoRef.current) {
     videoRef.current.muted = !isMuted;
   }
   if (mobileVideoRef.current) {
     mobileVideoRef.current.muted = !isMuted;  
   }
 };

 return (
   <div id="section-0" style={{ position: 'relative', width: '100%', height: '100vh' }}>
     <div style={{ position: 'relative', width: '100%', height: '100%' }}>
       <div className="container position-absolute top-40 start-50 translate-middle mt-5 z-2">
         <div className="container mb-45">
           <div className="d-block justify-content-center mb-40 text-center">
           </div>
         </div>
       </div>
       <button onClick={toggleAudio} className="button-play">
         {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
       </button>
       
       <video
         className="z-1 visibleDesktop"
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
         <source src="/video/video-hero-new.mp4" type="video/mp4" />
         Tu navegador no soporta el elemento de video.
       </video>

       <div className="visibleMobile">
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
           <source src="/video/video-mobile-new.mp4" type="video/mp4" />
           Tu navegador no soporta el elemento de video.
         </video>
       </div>
     </div>
   </div>
 );
};

export default ImageSequence;