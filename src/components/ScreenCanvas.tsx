import React, { useEffect, useRef, useState } from "react";

interface ScreenCanvasProps {
  imgSrc: string;
}

const ScreenCanvas: React.FC<ScreenCanvasProps> = ({ imgSrc }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      ctx?.drawImage(img, 0, 0, dimensions.width, dimensions.height);
    };
    img.src = imgSrc;
  }, [imgSrc, dimensions]);

  const handleMouseEnter = () => {
    setShowCursor(true);
  };

  const handleMouseLeave = () => {
    setShowCursor(false);
  };

  const canvasStyle = {
    cursor: showCursor ? "auto" : "none",
  };

  return (
    <canvas
      ref={canvasRef}
      style={canvasStyle}
      width={dimensions.width}
      height={dimensions.height}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default ScreenCanvas;
