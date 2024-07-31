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

export default function SecondaryButton({
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
        "transition-smooth relative rounded-lg bg-primary px-3 py-2 text-sm font-semibold uppercase text-on-primary hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-muted disabled:text-on-muted",
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
