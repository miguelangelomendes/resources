import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

export default function Topbar({ className = "" }: Props) {
  return <div className={twMerge("h-20 w-full border-b", className)}></div>;
}
