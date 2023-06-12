import { useEffect, useState } from "react";

const useFullscreenStatus = (elementRef: React.RefObject<HTMLElement>) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const openFullscreen = (elem: HTMLElement) => {
    if (elem.requestFullscreen) {
      elem.requestFullscreen().then(() => setIsFullscreen(true));
    } else if ((elem as any).mozRequestFullScreen) {
      /* Firefox */
      (elem as any).mozRequestFullScreen().then(() => setIsFullscreen(true));
    } else if ((elem as any).webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      (elem as any).webkitRequestFullscreen().then(() => setIsFullscreen(true));
    } else if ((elem as any).msRequestFullscreen) {
      /* IE/Edge */
      (elem as any).msRequestFullscreen().then(() => setIsFullscreen(true));
    }
  };

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.onclick = () =>
        openFullscreen(elementRef.current as HTMLElement);
    }
  }, [elementRef]);

  return isFullscreen;
};

export default useFullscreenStatus;
