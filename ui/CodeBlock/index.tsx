"use client";
import { useCallback } from "react";

import { twMerge } from "tailwind-merge";

import IconCopyClipboard from "@/ui/Icons/CopyClipboard";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function CodeBlock({ children, className = "" }: Props) {
  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(children as string);
  }, [children]);
  return (
    <div className={twMerge("relative rounded-lg border border-slate-700 bg-slate-800 px-5 py-3", className)}>
      <p className="italic">{children}</p>
      <div className="absolute inset-y-0 right-2 flex items-center">
        <IconCopyClipboard onClick={copyToClipboard} className="clickable w-5 hover:text-primary-500" />
      </div>
    </div>
  );
}
