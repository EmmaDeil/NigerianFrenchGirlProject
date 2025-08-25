import React, { useState, useEffect } from "react";
import "./RotatingText.css";

const RotatingText = ({ texts = [], rotationInterval = 2000, className = "" }) => {
   const [currentTextIndex, setCurrentTextIndex] = useState(0);

   useEffect(() => {
      if (!texts.length) return;
      
      const intervalId = setInterval(() => {
         setCurrentTextIndex((prevIndex) => 
            prevIndex === texts.length - 1 ? 0 : prevIndex + 1
         );
      }, rotationInterval);

      return () => clearInterval(intervalId);
   }, [texts.length, rotationInterval]);

   if (!texts.length) return null;

   return (
      <span className={`text-rotate ${className}`}>
         {texts[currentTextIndex]}
      </span>
   );
};

export default RotatingText;


