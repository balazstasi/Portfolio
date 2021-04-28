import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ menuItem, i }) => {
  const style = {
    border: `2px solid #3275fc`,
    textAlign: "center",
    paddingTop: "2px",
    color: "#3275fc",
  };
  return (
    <motion.li variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <div className="icon-placeholder" style={style}>
        <i className={`${menuItem.icon}`} style={{ padding: "11px 0", color: "#3275fc" }} />
      </div>
      <div className="text-placeholder" style={style}>
        {menuItem.name}
      </div>
    </motion.li>
  );
};
