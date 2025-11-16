import { useState, useEffect } from "react";

const useWindowWidth = (tabletBreakpoint: number) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = async () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth <= tabletBreakpoint;
};

export default useWindowWidth;
