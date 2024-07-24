import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

export default function DisplayUserAgent({ className = "" }: Props) {
  return <div className={twMerge("", className)}></div>;
}
