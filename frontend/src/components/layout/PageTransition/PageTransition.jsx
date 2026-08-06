
import { motion } from "motion/react";

import { pageVariants } from "../../../animations/variants";
import { pageTransition } from "../../../animations/transitions";

export default function PageTransition({ children }) {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      {children}
    </motion.main>
  );
}