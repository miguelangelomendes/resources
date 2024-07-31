"use client";
import { ReactNode } from "react";

import Spinner from "@/ui/Icons/spinner";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function PrimaryButton({ type, children, isLoading, isDisabled, className = "", onClick }: Props) {
  const handleClick = (event: any) => {
    event.stopPropagation();
    onClick?.();
  };

  return (
    <button
      disabled={isDisabled}
      type={type}
      onClick={handleClick}
      className={twMerge(
        "transition-smooth gradient-background relative rounded-md px-3 py-1.5 text-xs font-bold uppercase text-on-gradient disabled:cursor-not-allowed disabled:!grayscale",
        className
      )}
    >
      {children}
      {isLoading && (
        <div className="absolute inset-y-0 right-2 flex items-center justify-center">
          <Spinner className="aspect-square w-5" />
        </div>
      )}
    </button>
  );
}
