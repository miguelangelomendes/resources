"use client";
import { useState, createContext, useContext, Context, ReactNode } from "react";

import { twMerge } from "tailwind-merge";

import DropdownContentPrimitive from "@/ui/Dropdown/Primitives/content";

interface ContextProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const defaultValue: ContextProps = {
  isOpen: false,
  setIsOpen: (value: boolean) => {},
};

const DropdownContext: Context<ContextProps> = createContext(defaultValue);

interface DropdownProps {
  children: ReactNode;
}

export function Dropdown({ children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const contextValue = {
    isOpen,
    setIsOpen,
  };

  return <DropdownContext.Provider value={contextValue}>{children}</DropdownContext.Provider>;
}

interface DropdownTriggerProps {
  children: ReactNode;
  className?: string;
}

export function DropdownTrigger({ children, className = "" }: DropdownTriggerProps) {
  const { isOpen, setIsOpen } = useContext(DropdownContext);

  return (
    <div onClick={() => setIsOpen(!isOpen)} className={twMerge("clickable", className)}>
      {children}
    </div>
  );
}

interface DropdownContentProps {
  children: any;
  className?: string;
}

export function DropdownContent({ children, className = "" }: DropdownContentProps) {
  const { isOpen, setIsOpen } = useContext(DropdownContext);

  return (
    <DropdownContentPrimitive isOpen={isOpen} onClose={() => setIsOpen(false)} className={twMerge("", className)}>
      {children({ setIsOpen })}
    </DropdownContentPrimitive>
  );
}
