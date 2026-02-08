"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FloatingElement {
  left: number;
  top: number;
  duration: number;
  delay: number;
}

interface FloatingElementsProps {
  count: number;
  children: (index: number) => React.ReactNode;
  className?: string;
}

export const FloatingElements: React.FC<FloatingElementsProps> = ({
  count,
  children,
  className = "absolute inset-0 opacity-10",
}) => {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    // Generate random positions only on client side
    const newElements = Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 4 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setElements(newElements);
  }, [count]);

  // Don't render until client-side positions are generated
  if (elements.length === 0) {
    return <div className={className} />;
  }

  return (
    <div className={className}>
      {elements.map((element, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
          }}
        >
          {children(i)}
        </motion.div>
      ))}
    </div>
  );
};
