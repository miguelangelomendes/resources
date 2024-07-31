"use client";

import { twMerge } from "tailwind-merge";

import Spinner from "@/ui/Icons/spinner";

interface Props {
  className?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function NegativeButton({
  type,
  children,
  isLoading,
  isDisabled,
  className = "",
  onClick,
}: Props) {
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
        "transition-smooth hover:text-on-paragraph relative rounded-md border border-paragraph px-3 py-1.5 text-xs text-paragraph disabled:cursor-not-allowed disabled:bg-muted disabled:text-on-muted",
        className,
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
