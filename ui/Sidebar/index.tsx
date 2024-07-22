import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

export default function Sidebar({ className = "" }: Props) {
  return <div className={twMerge("w-40", className)}></div>;
}
