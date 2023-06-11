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
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      let scale = Math.min(
        dimensions.width / img.width,
        dimensions.height / img.height
      );
      let imageWidth = img.width * scale;
      let imageHeight = img.height * scale;
      let x = (dimensions.width - imageWidth) / 2;
      let y = (dimensions.height - imageHeight) / 2;
      ctx?.drawImage(img, x, y, imageWidth, imageHeight);
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
    display: "block",
    margin: "0 auto",
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
