import { Gradient } from "./Gradient.js";
import { useEffect, useRef } from "react";

const gradient = new Gradient();
// https://whatamesh.vercel.app/

export default function GradientElement() {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      gradient.initGradient("#gradient-canvas");
    }
  }, [ref]);

  return (
    <>
      <canvas ref={ref} id="gradient-canvas" data-transition-in></canvas>
    </>
  );
}
