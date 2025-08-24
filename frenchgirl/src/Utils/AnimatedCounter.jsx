import React, { useEffect, useState } from "react";

const AnimatedCounter = ({ end, duration = 2000, ...props }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    let frame;
    function update() {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        frame = requestAnimationFrame(update);
      } else {
        setCount(end);
        cancelAnimationFrame(frame);
      }
    }
    update();
    return () => cancelAnimationFrame(frame);
  }, [end, duration]);

  return (
    <span {...props}>{count.toLocaleString()}</span>
  );
};

export default AnimatedCounter;
