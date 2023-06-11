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

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);

    return (_) => {
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

  return (
    <canvas
      ref={canvasRef}
      style={{ cursor: "none" }}
      width={dimensions.width}
      height={dimensions.height}
    />
  );
};

export default ScreenCanvas;
