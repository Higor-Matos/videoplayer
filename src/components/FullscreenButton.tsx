import React from "react";
import { FiMaximize2 } from "react-icons/fi";

interface FullScreenButtonProps {
  onClick: () => void;
}

const FullScreenButton: React.FC<FullScreenButtonProps> = ({ onClick }) => (
  <div
    className="fullscreen-button"
    style={{
      position: "fixed",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      borderRadius: "50%",
      boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "50px",
      width: "50px",
    }}
    onClick={onClick}
  >
    <FiMaximize2 size={24} color="black" />
  </div>
);

export default FullScreenButton;
