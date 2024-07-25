"use client";
import {
  useState,
  createContext,
  useContext,
  Context,
  ReactNode,
  useMemo,
  useCallback,
  cloneElement,
  ReactElement,
} from "react";

import { twMerge } from "tailwind-merge";

import AccordionContentPrimitive from "@/ui/Accordion/Primitives/item";

interface ContextProps {
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
}

const defaultValue: ContextProps = {
  activeIndex: null,
  setActiveIndex: (index: number | null) => {},
};

const AccordionContext: Context<ContextProps> = createContext(defaultValue);

interface AccordionProps {
  children: ReactNode;
}

export const Accordion = ({ children }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const contextValue = {
    activeIndex,
    setActiveIndex,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <div>{children}</div>
    </AccordionContext.Provider>
  );
};

interface AccordionTriggerProps {
  children: ReactNode;
  index: number;
  className?: string;
}
export function AccordionTrigger({ children, index, className = "" }: any) {
  const { activeIndex, setActiveIndex } = useContext(AccordionContext);

  const isOpen = useMemo(() => index === activeIndex, [index, activeIndex]);

  const handleToggle = useCallback(() => {
    setActiveIndex(isOpen ? null : index);
  }, [isOpen, index, setActiveIndex]);

  return (
    <div onClick={handleToggle} className={twMerge("clickable", className)}>
      {children}
    </div>
  );
}

export const AccordionItem = ({ index = 0, children }: any) => {
  if (!Array.isArray(children)) {
    throw new Error("AccordionItem should have an AccordionTrigger and AccordionContent as children");
  }

  return children.map((child: ReactElement<any>) => cloneElement(child, { index }));
};

// Accordion Item Content Component
export const AccordionContent = ({ index, children, className = "" }: any) => {
  const { activeIndex } = useContext(AccordionContext);

  const isOpen = useMemo(() => index === activeIndex, [index, activeIndex]);

  return (
    <AccordionContentPrimitive isOpen={isOpen} className={className}>
      {children}
    </AccordionContentPrimitive>
  );
};
