"use client";
import { ReactNode } from "react";

import { motion, AnimatePresence } from "framer-motion";

interface Props {
  isLoading: boolean;
  children: ReactNode;
  placeholder: ReactNode;
}

const variants: any = {
  enter: {
    opacity: 1,
  },
  center: {
    zIndex: 1,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    opacity: 0,
    position: "absolute",
  },
};

export default function TransitionFadeWithPlaceholder({ isLoading, placeholder, children }: Props) {
  return (
    <>
      <AnimatePresence>
        {isLoading ? (
          <motion.div key="placeholder" variants={variants} initial="enter" animate="center" exit="exit">
            {placeholder}
          </motion.div>
        ) : (
          <motion.div key="content" variants={variants} initial="enter" animate="center" exit="exit">
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
