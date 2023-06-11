import React, { useEffect, useRef } from "react";

interface ScreenCanvasProps {
  imgSrc: string;
}

const ScreenCanvas: React.FC<ScreenCanvasProps> = ({ imgSrc }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    img.src = imgSrc;
  }, [imgSrc]);

  return (
    <canvas
      ref={canvasRef}
      style={{ cursor: "none" }}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
};

export default ScreenCanvas;
