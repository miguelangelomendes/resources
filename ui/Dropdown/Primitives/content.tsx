import { ReactNode, useEffect, useRef } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  className?: string;
}

const variants: any = {
  enter: {
    position: "absolute",
    opacity: 0,
    height: 0,
  },
  center: {
    position: "absolute",
    zIndex: 1,
    y: 0,
    opacity: 1,
    height: "auto",
  },
  exit: {
    zIndex: 0,
    opacity: 0,
    height: 0,
    position: "absolute",
  },
};

export default function DropdownContentPrimitive({ children, isOpen, onClose, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClick);
    }

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={ref}
          key="placeholder"
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.1 }}
          className={twMerge(
            "overflow-y-hidden rounded-sm border border-muted bg-surface px-2 py-1 shadow-sm",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
