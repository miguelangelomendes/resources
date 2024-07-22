import { twMerge } from "tailwind-merge";

import { Dropdown, DropdownContent, DropdownTrigger } from "@/ui/Dropdown";

interface Props {
  className?: string;
}

export default function ExampleDropdown({ className = "" }: Props) {
  return (
    <Dropdown>
      <DropdownTrigger className="w-40 rounded-md bg-primary-500 px-4 py-1 text-center text-on-primary hover:bg-primary-700">
        Dropdown
      </DropdownTrigger>
      <DropdownContent className="h-40 w-40">
        {({ setIsOpen }: any) => (
          <div className="flex flex-col divide-y">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className={twMerge("clickable p-1 hover:bg-primary-900")}
                onClick={() => setIsOpen(false)}
              >
                {index}
              </div>
            ))}
          </div>
        )}
      </DropdownContent>
    </Dropdown>
  );
}
