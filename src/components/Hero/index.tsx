import React, { useRef, useEffect } from "react";

const Hero = (props: any) => {
  const canvasRef = useRef(null);

  const draw = () => {
    const width = document.body.offsetWidth;
    const height = document.body.offsetHeight;
    const canvas: any = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = height;

    const axisYPosition = Array(
      Math.floor(document.body.offsetWidth / 20) + 1
    ).fill(0);

    context.fillStyle = "rgba(255,255,255,1)";
    context.fillRect(0, 0, width, height);

    setInterval(() => {
      context.fillStyle = "rgba(255,255,255,0.2)";
      context.fillRect(0, 0, width, height);

      context.fillStyle = "rgba(0, 0, 0, 1)";
      context.font = "16px monospace";

      axisYPosition.forEach((y, index) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = index * 20;
        context.fillText(text, x, y);
        if (y > 100 + Math.random() * 10000) axisYPosition[index] = 0;
        else axisYPosition[index] = y + 20;
      });
    }, 50);
  };
  useEffect(() => {
    draw();
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Hero;
