import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import blackLodge from "../assets/Black_Lodge_no_border.jpg";
import LetterboxdButton from "../assets/Letterboxd_button.png";
import config from "./../Config/Config";
import "./Cinema.css";

export default function Cinema() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Vérifie à l’ouverture
    window.addEventListener("resize", handleResize); // Vérifie au redimensionnement

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="section cinema">
      <div className={`background-container ${isHovered ? "hover-effect" : ""}`}>
        {/* Effet de brume */}
        <div className="cinema-overlay"></div>

        {/* Image principale */}
        <img src={blackLodge} alt="Black Lodge" className="cinema-image" />

        {/* Bouton Letterboxd */}
        <a
          href={config.letterboxdUrl}
          onMouseEnter={() => !isMobile && setIsHovered(true)}
          onMouseLeave={() => !isMobile && setIsHovered(false)}
        >
          <motion.img
            src={LetterboxdButton}
            alt="Letterboxd Button"
            className="cinema-button"
            animate={
              isMobile
                ? {
                    scale: [1, 1.1, 1], // Zoom/dézoom constant
                    opacity: [0.8, 1, 0.8], // Légère pulsation d'opacité
                  }
                : {} // Désactiver l'animation sur desktop
            }
            initial={{ scale: 1, opacity: 0.8, filter: isMobile ? "none" : "blur(0.7px)" }}
            whileHover={
              !isMobile
                ? {
                    scale: 1.3, // Grossissement au hover
                    opacity: 1,
                    filter: "blur(0px)",
                    y: -20, // Léger déplacement
                  }
                : {} // Désactiver le hover effect sur mobile
            }
            transition={{
              duration: isMobile ? 1.4 : 0.8,
              repeat: isMobile ? Infinity : 0,
              ease: "easeInOut",
            }}
          />
        </a>
      </div>
    </div>
  );
}