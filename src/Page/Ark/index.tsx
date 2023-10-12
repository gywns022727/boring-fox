import React, { useEffect, useRef } from "react";
import { Canvas } from "./style";
import { motion } from "framer-motion";
import Header from "../../Components/Layout/Header";
import BackBtn from "../../Components/Organisms/BackBtn";
import Footer from "../../Components/Layout/Footer";

export default function Index() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasSize: number =
    window.innerWidth >= 550 ? 500 : window.innerWidth / 1.2;

  let yPosition: number = 0;
  let direction: number = 1;
  const speed: number = 6;

  const Wave = () => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    if (!canvas) return;
    const context: CanvasRenderingContext2D | null = canvas.getContext("2d");
    if (!context) return;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "blue";
    context.fillRect(0, yPosition, 50, 50);

    yPosition += speed * direction;

    if (yPosition / 2 <= 0 || yPosition + 50 >= canvasSize) direction *= -1;

    // requestAnimationFrame(Wave);
  };
  const max: number = Math.random() * 100 + 150;
  console.log(max);

  useEffect(() => {
    Wave();
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <Canvas ref={canvasRef} width={canvasSize} height={canvasSize} />
      <BackBtn />
      <Footer />
    </motion.div>
  );
}
