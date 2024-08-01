import { twMerge } from "tailwind-merge";

import IconArrowDown from "@/ui/Icons/ArrowDown";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/ui/Accordion";

interface Props {
  className?: string;
}

export default function ExampleAccordion({ className = "" }: Props) {
  const EXAMPLE = [
    {
      title: "Title 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
    },
    {
      title: "Title 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
    },
  ];
  return (
    <Accordion>
      {EXAMPLE.map((item, index) => (
        <AccordionItem key={index} index={index}>
          <AccordionTrigger>
            {({ isOpen }: any) => (
              <div className={twMerge("flex justify-between border-b py-1", className)}>
                <p>{item.title}</p>
                <IconArrowDown className={twMerge("clickable w-3", isOpen ? "rotate-180" : "rotate-0")} />
              </div>
            )}
          </AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
