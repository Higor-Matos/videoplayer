import React, { useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import useCanvasImage from "../hooks/useCanvasImage";
import FullScreenButton from "./FullScreenButton";

interface ScreenCanvasProps {
  imgSrc: string;
}

const ScreenCanvas: React.FC<ScreenCanvasProps> = ({ imgSrc }) => {
  const dimensions = useWindowDimensions();
  const canvasRef = useCanvasImage(imgSrc, dimensions);
  const [showCursor, setShowCursor] = useState(false);

  const handleMouseEnter = () => setShowCursor(true);
  const handleMouseLeave = () => setShowCursor(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  const canvasStyle = {
    cursor: showCursor ? "auto" : "none",
    display: "block",
    margin: "0 auto",
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        style={canvasStyle}
        width={dimensions.width}
        height={dimensions.height}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <FullScreenButton onClick={toggleFullscreen} />
    </>
  );
};

export default ScreenCanvas;
