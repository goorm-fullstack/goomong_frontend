import React, { useState, useRef, useEffect, ReactNode } from 'react';
import '../../style/global.css';
import './Slide.css';

interface SlideProps {
  children: ReactNode[];
}

const Slide: React.FC<SlideProps> = ({ children }) => {
  const [translateX, setTranslateX] = useState(0);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const slide = () => {
      setTranslateX((prev) => prev - 0.5);
      animationFrameRef.current = requestAnimationFrame(slide);
    };

    animationFrameRef.current = requestAnimationFrame(slide);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      className="slide-container"
      onMouseEnter={() => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
          animationFrameRef.current = null;
        }
      }}
      onMouseLeave={() => {
        if (!animationFrameRef.current) {
          const slide = () => {
            setTranslateX((prev) => prev - 1);
            animationFrameRef.current = requestAnimationFrame(slide);
          };
          animationFrameRef.current = requestAnimationFrame(slide);
        }
      }}>
      {children.map((child, index) => (
        <div key={index} style={{ transform: `translateX(${translateX}px)`, display: 'inline-block' }}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default Slide;
