import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

export default function TestEnvItem({ className = "" }: Props) {
  return <div className={twMerge("", className)}></div>;
}
