// Mock Remotion hooks for demonstration purposes
import React, { useEffect, useState } from 'react';

export const useCurrentFrame = () => {
  const [frame, setFrame] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setFrame(prev => (prev + 1) % 300); // Loop every 300 frames (15 seconds at 20fps)
    }, 50); // ~20fps
    
    return () => clearInterval(interval);
  }, []);
  
  return frame;
};

export const useVideoConfig = () => {
  return {
    fps: 20,
    width: 1920,
    height: 1080,
    durationInFrames: 300
  };
};

export const interpolate = (
  input: number,
  inputRange: [number, number],
  outputRange: [number, number],
  options?: { extrapolateLeft?: string; extrapolateRight?: string }
) => {
  const [inputMin, inputMax] = inputRange;
  const [outputMin, outputMax] = outputRange;
  
  if (input <= inputMin) return outputMin;
  if (input >= inputMax) return outputMax;
  
  const progress = (input - inputMin) / (inputMax - inputMin);
  return outputMin + (outputMax - outputMin) * progress;
};

export const AbsoluteFill: React.FC<{ 
  children: React.ReactNode; 
  style?: React.CSSProperties 
}> = ({ children, style }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        ...style
      }}
    >
      {children}
    </div>
  );
};