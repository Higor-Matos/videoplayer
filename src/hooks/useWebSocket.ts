import { useState, useEffect } from "react";

function useWebSocket(url: string) {
  const [data, setData] = useState<Uint8Array | null>(null);

  useEffect(() => {
    const ws = new WebSocket(url);
    ws.binaryType = "arraybuffer";
    ws.onmessage = (event) => {
      const data = new Uint8Array(event.data);
      setData(data);
    };
    return () => {
      ws.close();
    };
  }, [url]);

  return { data };
}

export default useWebSocket;
