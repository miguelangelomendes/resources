"use client";

import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  onClick?: () => void;
}

export default function IconCopyClipboard({ className = "", onClick }: Props) {
  return (
    <svg
      onClick={onClick}
      className={twMerge("stroke-current", className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinejoin="round"
        strokeWidth="2"
        fill="none"
        stroke="currentColor"
        d="M14 4v3a1 1 0 0 1-1 1h-3m4 10v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2m11-3v10a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7.87a1 1 0 0 1 .24-.65l2.46-2.87a1 1 0 0 1 .76-.35H18a1 1 0 0 1 1 1Z"
      />
    </svg>
  );
}
