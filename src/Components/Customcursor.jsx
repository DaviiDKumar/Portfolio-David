import React, { useEffect, useRef } from "react";
import "../Css/Customcursor.css";
import gsap from "gsap";

const Customcursor = () => {
  const cursorWrapper = useRef(null);

  useEffect(() => {
    const cursor = cursorWrapper.current;
    
    // Throttling to prevent excessive mousemove events
    let lastMove = 0;
    const throttleMove = (e) => {
      const now = Date.now();
      if (now - lastMove < 16) return; // Run the move function every ~16ms (60fps)
      lastMove = now;

      const { clientX, clientY } = e;
      const offsetX = 33; // Half of cursor circle size
      const offsetY = 33;

      // Move the main cursor
      gsap.to(cursor, {
        x: clientX - offsetX,
        y: clientY - offsetY,
        duration: 0.1,
        ease: "power1.out",
      });

      // Create and animate the trailing circle
      const trail = document.createElement("div");
      trail.className = "cursor-trail";
      trail.style.left = `${clientX - offsetX}px`;
      trail.style.top = `${clientY - offsetY}px`;
      document.body.appendChild(trail);

      // Remove the trail after it fades
      setTimeout(() => trail.remove(), 600);
    };

    window.addEventListener("mousemove", throttleMove);

    return () => window.removeEventListener("mousemove", throttleMove);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll("a, button, h1, h2, h3, h4, h5, h6");

    const handleMouseEnter = () => {
      cursorWrapper.current.classList.add("hovering");
    };

    const handleMouseLeave = () => {
      cursorWrapper.current.classList.remove("hovering");
    };

    targets.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup event listeners on unmount
    return () => {
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  useEffect(() => {
    // Adding touch ripple effect for mobile
    const handleTouchStart = (e) => {
      const ripple = document.createElement("div");
      ripple.className = "touch-ripple";
      ripple.style.left = `${e.touches[0].clientX - 25}px`;
      ripple.style.top = `${e.touches[0].clientY - 25}px`;
      document.body.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    };

    document.addEventListener("touchstart", handleTouchStart);

    return () => document.removeEventListener("touchstart", handleTouchStart);
  }, []);

  return (
    <div className="custom-cursor-wrapper" ref={cursorWrapper}>
      <div className="custom-cursor-circle"></div>
      <div className="custom-cursor-dot"></div>
    </div>
  );
};

export default Customcursor;
