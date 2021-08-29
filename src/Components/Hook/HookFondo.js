import { useState, useEffect } from "react";

export const HookFondo = () => {
  const [tamanoWidth, setTamanoWidth] = useState(window.innerWidth);
  const [tamanoHeight, setTamanoHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setTamanoWidth(window.innerWidth);
    setTamanoHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    tamanoWidth,
    tamanoHeight,
  };
};
