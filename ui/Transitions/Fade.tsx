"use client";
import { ReactNode, RefObject } from "react";

import { motion, AnimatePresence } from "framer-motion";

interface Props {
  isShown: boolean;
  children: ReactNode;
  className?: string;
  beforeLeave?: () => void;
  afterLeave?: () => void;
  onAnimationEnd?: () => void;
  ref?: RefObject<HTMLDivElement>;
}

const variants: any = {
  enter: {
    opacity: 0,
  },
  center: {
    zIndex: 1,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    opacity: 0,
  },
};

export default function TransitionFade({ isShown, children }: Props) {
  return (
    <AnimatePresence>
      {isShown && (
        <motion.div key="placeholder" variants={variants} initial="enter" animate="center" exit="exit">
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
