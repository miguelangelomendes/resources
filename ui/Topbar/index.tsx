import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

export default function Topbar({ className = "" }: Props) {
  return <div className={twMerge("h-20 w-full bg-red-500", className)}></div>;
}
