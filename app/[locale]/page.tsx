"use client";
import DownloadFolder from "@/ui/download";
import ExampleDropdown from "@/ui/Dropdown/example";
import PageSection from "@/ui/Sections";

const BATATA = [
  {
    title: "Dropdown",
    description: "This is a dropdown component.",
    exampleComponent: ExampleDropdown,
    externalDependencies: [
      {
        name: "Tailwind merge",
        url: "",
        version: "0.1.0",
        install: {
          yarn: "yarn add tailwind-merge",
        },
      },
      {
        name: "Framer motion",
        url: "https://www.framer.com/motion/",
        version: "0.1.0",
        install: {
          yarn: "yarn add framer-motion",
        },
      },
    ],
    filesPath: ["ui/Dropdown/*"],
  },
];
export default function Home() {
  return (
    <div>
      <div className="mt-20 px-10">
        {BATATA.map((section, index) => (
          <PageSection key={index} {...section}>
            <section.exampleComponent />
          </PageSection>
        ))}
        <DownloadFolder />
      </div>
    </div>
  );
}
