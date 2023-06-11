export function uint8ArrayToBase64(bytes: Uint8Array): string {
  const binary = bytes.reduce(
    (acc, byte) => acc + String.fromCharCode(byte),
    ""
  );
  return window.btoa(binary);
}
