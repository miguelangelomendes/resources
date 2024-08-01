"use client";
import TransitionFade from "@/ui/Transitions/Fade";
import TransitionFadeWithPlaceholder from "@/ui/Transitions/FadeWithPlaceholder";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

export default function ExampleTransitionFade({ className = "" }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className={twMerge("space-y-10", className)}>
      <button
        onClick={() => setIsLoading(!isLoading)}
        className="clickable rounded-md bg-primary-500 px-4 py-2 text-on-primary hover:bg-primary-200"
      >
        Toggle IsLoading
      </button>
      <div className="grid grid-cols-2">
        <div>
          <p>Transition fade with placeholder</p>
          <TransitionFadeWithPlaceholder
            isLoading={isLoading}
            placeholder={<div className="h-40 w-40 animate-pulse rounded-full bg-muted" />}
          >
            <div className="h-40 w-40 rounded-full bg-secondary-500" />
          </TransitionFadeWithPlaceholder>
        </div>
        <div>
          <p>Transition fade</p>
          <TransitionFade isShown={isLoading}>
            <div className="h-40 w-40 rounded-full bg-secondary-500" />
          </TransitionFade>
        </div>
      </div>
    </div>
  );
}
