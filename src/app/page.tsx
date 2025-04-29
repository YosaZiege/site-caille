"use client"
import { useEffect, useRef, useState } from "react";
import About from "@/components/about";
import Advantages from "@/components/advantages";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Header from "@/components/shared/header";
import Testimonials from "@/components/testimonials";

export default function Home() {
   const audioRef = useRef<HTMLAudioElement>(null);
   const [showPopup, setShowPopup] = useState(true);

   const handleAccept = async () => {
      try {
         await audioRef.current?.play();
      } catch (err) {
         console.error("Failed to play audio:", err);
      }
      setShowPopup(false);
   };

   const handleDecline = () => {
      setShowPopup(false);
   };

   return (
      <>
         <audio ref={audioRef} src="/charikatdajaj.mp3" preload="auto" loop />

         {showPopup && (
            <div style={popupStyles}>
               <div style={popupContentStyles}>
                  <p>Do you want to enable background music?</p>
                  <button onClick={handleAccept} style={buttonStyles}>Yes</button>
                  <button onClick={handleDecline} style={buttonStyles}>No</button>
               </div>
            </div>
         )}

         <Header />
         <Hero />
         <Advantages />
         <Testimonials />
         <About />
         <Contact />
         <Footer />
      </>
   );
}

// Simple styles
const popupStyles: React.CSSProperties = {
   position: "fixed",
   top: 0,
   left: 0,
   width: "100%",
   height: "100%",
   backgroundColor: "rgba(0, 0, 0, 0.5)",
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   zIndex: 1000,
};

const popupContentStyles: React.CSSProperties = {
   backgroundColor: "white",
   padding: "2rem",
   borderRadius: "8px",
   textAlign: "center",
};

const buttonStyles: React.CSSProperties = {
   margin: "0.5rem",
   padding: "0.5rem 1rem",
   fontSize: "1rem",
};


