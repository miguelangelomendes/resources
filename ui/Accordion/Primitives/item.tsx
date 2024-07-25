import { ReactNode } from "react";

import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  isOpen: boolean;
  children?: ReactNode;
  className?: string;
}

export default function AccordionContentPrimitive({ isOpen, children, className }: Props) {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0.5, height: 0 },
          }}
          className={twMerge("overflow-hidden", className)}
          transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
