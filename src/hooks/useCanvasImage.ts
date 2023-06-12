import { useEffect, useRef } from "react";

const useCanvasImage = (
  imgSrc: string,
  dimensions: { height: number; width: number }
) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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

  return canvasRef;
};

export default useCanvasImage;
