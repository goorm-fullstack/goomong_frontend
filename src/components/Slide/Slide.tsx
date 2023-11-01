import React, { useState, useRef, useEffect, ReactNode } from 'react';
import * as S from './Style';

interface SlideProps {
  children: ReactNode[];
}

const Slide: React.FC<SlideProps> = ({ children }) => {
  const [translateX, setTranslateX] = useState(0);
  const animationFrameRef = useRef<number | null>(null);

  const slideWidth = children.length * 266;

  useEffect(() => {
    const slide = () => {
      if (translateX <= -slideWidth) {
        setTranslateX(0);
      } else {
        setTranslateX((prev) => prev - 0.5);
      }
      animationFrameRef.current = requestAnimationFrame(slide);
    };

    animationFrameRef.current = requestAnimationFrame(slide);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [translateX]);

  return (
    <S.Slide>
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
        {children.concat(children).map((child, index) => (
          <div key={index} style={{ transform: `translateX(${translateX}px)`, display: 'inline-block' }}>
            {child}
          </div>
        ))}
      </div>
    </S.Slide>
  );
};

export default Slide;
