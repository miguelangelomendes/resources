"use client";

import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  onClick?: () => void;
}

export default function IconArrowDown({ className = "", onClick }: Props) {
  return (
    <svg
      onClick={onClick}
      className={twMerge("fill-current", className)}
      viewBox="0 0 9 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.164752 0.162718C0.384422 -0.0542395 0.740578 -0.0542395 0.960248 0.162718L4.5 3.65877L8.03975 0.162718C8.25942 -0.0542395 8.61558 -0.0542395 8.83525 0.162718C9.05492 0.379676 9.05492 0.731435 8.83525 0.948393L4.89775 4.83728C4.67808 5.05424 4.32192 5.05424 4.10225 4.83728L0.164752 0.948393C-0.0549175 0.731435 -0.0549175 0.379676 0.164752 0.162718Z"
        fill="currentColor"
      />
    </svg>
  );
}
