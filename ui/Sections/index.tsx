import CodeBlock from "@/ui/CodeBlock";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  children: ReactNode;
  description?: string;
  externalDependencies?: any[];
  className?: string;
}

export default function PageSection({ title, children, description, externalDependencies, className = "" }: Props) {
  return (
    <div className={twMerge("space-y-5", className)}>
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="h-px w-full bg-muted" />
      <div className="grid grid-cols-[30%_auto] gap-x-[2%]">
        <div className="space-y-5">
          <p>{description}</p>
          <div className="space-y-2">
            <h5 className="text-lg font-bold">External dependencies:</h5>
            <ul className="list-disc space-y-5 pl-5">
              {externalDependencies?.map((dependency) => (
                <li key={dependency.name} className="space-y-2">
                  {dependency.url ? (
                    <a href={dependency.url} target="_blank" rel="noreferrer" className="underline">
                      {dependency.name}
                    </a>
                  ) : (
                    <p>{dependency.name}</p>
                  )}
                  <CodeBlock>{dependency.install.yarn}</CodeBlock>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rounded-xl border border-primary-900 p-10">{children}</div>
      </div>
    </div>
  );
}
