import * as React from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../hooks/useDimensions";
import { ToggleMenu } from "./ToggleMenu";
import { Navigation } from "./Navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Example = () => {
  const containerRef = React.useRef(null);

  const [isOpen, toggleOpen] = useCycle(false, true);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      // custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation />
      <ToggleMenu toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
