import React, { useState, useEffect } from "react";
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
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const handleMouseEnter = () => setShowCursor(true);
  const handleMouseLeave = () => setShowCursor(false);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  const canvasStyle = {
    cursor: showCursor ? "auto" : "none",
    display: "block",
    margin: "0 auto",
    width: isFullscreen ? "100vw" : "auto",
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
