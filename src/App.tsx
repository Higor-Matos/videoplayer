import React, { useState, useEffect, useRef } from "react";

function uint8ArrayToBase64(bytes: Uint8Array): string {
  const binary = bytes.reduce(
    (acc, byte) => acc + String.fromCharCode(byte),
    ""
  );
  return window.btoa(binary);
}

function ScreenStream() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:1234/screen");
    ws.binaryType = "arraybuffer";
    ws.onopen = () => {
      setSocket(ws);
    };
    ws.onmessage = (event) => {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.onload = () => {
          ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
        const data = new Uint8Array(event.data);
        img.src = "data:image/jpeg;base64," + uint8ArrayToBase64(data);
      }
    };
    return () => {
      ws.close();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ cursor: "none" }}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
}

function App() {
  return (
    <div className="App">
      <ScreenStream />
    </div>
  );
}

export default App;
