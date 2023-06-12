import { useEffect } from "react";

const useCanvasImage = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  imgSrc: string,
  dimensions: { width: number; height: number }
) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(
        dimensions.width / img.width,
        dimensions.height / img.height
      );
      const imageWidth = img.width * scale;
      const imageHeight = img.height * scale;
      const x = (dimensions.width - imageWidth) / 2;
      const y = (dimensions.height - imageHeight) / 2;
      ctx?.drawImage(img, x, y, imageWidth, imageHeight);
    };
    img.src = imgSrc;
  }, [imgSrc, dimensions, canvasRef]);

  return canvasRef;
};

export default useCanvasImage;
