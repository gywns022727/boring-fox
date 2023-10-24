import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "./style";
import { motion } from "framer-motion";
import Header from "../../Components/Layout/Header";
import BackBtn from "../../Components/Organisms/BackBtn";
import Footer from "../../Components/Layout/Footer";

export default function Index() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasSize: number =
    window.innerWidth >= 550 ? 500 : window.innerWidth / 1.2;

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    if (!canvas) return;
    const context: CanvasRenderingContext2D | null = canvas.getContext("2d");
    if (!context) return;

    interface PointProps {
      // index: number;
      x: number;
      y: number;
    }

    const Point = ({ x, y }: PointProps) => {
      const max: number = Math.random() * 100 + 150;
      const pointY = y + Math.sin(0.1) * max;

      context.beginPath();
      context.arc(x, pointY, 30, 0, 2 * Math.PI);
      console.log(pointY);
      context.fillStyle = "pink";
      context.fill();
      context.closePath();
    };

    const Wave = () => {
      Point({ x: canvasSize / 2, y: canvasSize / 2 });
      // requestAnimationFrame(Wave);
    };
    Wave();
    const WaveGroup = () => {};
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
