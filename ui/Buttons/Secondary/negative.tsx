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

export default function SecondaryNegativeButton({
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
        "transition-smooth relative rounded-md border border-secondary-300 px-3 py-2 text-sm text-secondary-300 hover:border-secondary-500 hover:text-secondary-500 disabled:cursor-not-allowed disabled:border-muted disabled:text-muted shadow-[0px_4px_26px_0px_rgba(0_0_0_0.25)]",
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
