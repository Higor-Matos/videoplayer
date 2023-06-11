import React from "react";
import useWebSocket from "../hooks/useWebSocket";
import { uint8ArrayToBase64 } from "../utils";
import ScreenCanvas from "./ScreenCanvas";

const ScreenStream: React.FC = () => {
  const { data } = useWebSocket("ws://localhost:1234/screen");

  const imgSrc = data && "data:image/jpeg;base64," + uint8ArrayToBase64(data);

  return <ScreenCanvas imgSrc={imgSrc || ""} />;
};

export default ScreenStream;
