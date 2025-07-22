import React, { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const blobRefs = useRef([]);
  const initialPositions = [
    { x: -4, y: 0 },
    { x: -4, y: 0 },
    { x: 20, y: -8 },
    { x: 20, y: -8 },
  ];

  useEffect(() => {
    let currentScroll = 0;
    let requestId;

    const animate = () => {
      const newScroll = window.pageYOffset;
      const scrollDelta = newScroll - currentScroll;
      currentScroll = newScroll;

      blobRefs.current.forEach((blob, index) => {
        if (blob) {
          const initialPos = initialPositions[index];
          const xOffset = Math.sin(newScroll / 150 + index * 0.9) * 300; // Reduced range for mobile
          const yOffset = Math.cos(newScroll / 150 + index * 0.9) * 50; // Reduced vertical range
          const scale = 1 + Math.sin(newScroll / 300) * 0.2; // Smoother scale variation

          blob.style.transform = `translate(${initialPos.x + xOffset}px, ${initialPos.y + yOffset}px) scale(${scale})`;
          blob.style.transition = "transform 1.2s ease-in-out"; // Smoother transition
          blob.style.opacity = `${0.2 + Math.cos(newScroll / 400) * 0.05}`; // Adjusted opacity range
        }
      });

      requestId = requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestId);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0">
        <div
          ref={(ref) => (blobRefs.current[0] = ref)}
          className="absolute top-[-10%] left-[-5%] w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-red-500/70 rounded-full mix-blend-multiply filter blur-[120px] sm:blur-[150px] md:blur-[180px] opacity-30 md:opacity-25 transition-all duration-1000"
        ></div>
        <div
          ref={(ref) => (blobRefs.current[1] = ref)}
          className="absolute top-[-5%] right-[-5%] w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-red-700/60 rounded-full mix-blend-multiply filter blur-[120px] sm:blur-[150px] md:blur-[180px] opacity-30 md:opacity-25 hidden sm:block transition-all duration-1000"
        ></div>
        <div
          ref={(ref) => (blobRefs.current[2] = ref)}
          className="absolute bottom-[-10%] left-[-20%] sm:left-[-10%] md:left-[10%] w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-black/50 rounded-full mix-blend-multiply filter blur-[120px] sm:blur-[150px] md:blur-[180px] opacity-30 md:opacity-25 transition-all duration-1000"
        ></div>
        <div
          ref={(ref) => (blobRefs.current[3] = ref)}
          className="absolute bottom-[-10%] right-[10%] w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-gray-200/40 rounded-full mix-blend-multiply filter blur-[120px] sm:blur-[150px] md:blur-[180px] opacity-30 md:opacity-25 hidden sm:block transition-all duration-1000"
        ></div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ff00000d_1px,transparent_1px),linear-gradient(to_bottom,#ff00000d_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px]"></div>
    </div>
  );
};

export default AnimatedBackground;