import { useEffect, useRef } from "react";

function useRotatingAnimation({ initialAngle = 0, rotationSpeed = 0.3 } = {}) {
  const ellipseRef = useRef(null);
  const ellipseAngle = useRef(initialAngle);
  const animationFrameId = useRef();

  useEffect(() => {
    const rotateEllipse = () => {
      if (ellipseRef.current) {
        ellipseAngle.current += rotationSpeed;
        ellipseRef.current.style.transform = `rotate(${ellipseAngle.current}deg)`;
      }
      animationFrameId.current = requestAnimationFrame(rotateEllipse);
    };

    animationFrameId.current = requestAnimationFrame(rotateEllipse);

    return () => {
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
    };
  }, [rotationSpeed]);

  return ellipseRef;
}

export default useRotatingAnimation;
