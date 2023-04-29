import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

function ScrollDownAnimation({ children, cordinateY = "100" }) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, cordinateY], [0, 1]);
  const translateY = useTransform(scrollY, [0, cordinateY], ["100%", "0%"]);
  return (
    <motion.div
    transition={{ delay: 5 }}
      style={{
        opacity,
        translateY,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollDownAnimation;
