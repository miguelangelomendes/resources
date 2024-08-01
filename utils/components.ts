import ExampleAccordion from "@/ui/Accordion/example";
import ExampleDropdown from "@/ui/Dropdown/example";
import ExampleTransitionFade from "@/ui/Transitions/example";
import fileConfig from "@/utils/files_config.json";
import { title } from "process";

export default [
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
    download: fileConfig.dropdown,
  },
  {
    title: "Accordion",
    description: "This is an accordion component.",
    exampleComponent: ExampleAccordion,
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
    download: fileConfig.accordion,
  },
  {
    title: "Transitions",
    description: "This is a transition component.",
    exampleComponent: ExampleTransitionFade,
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
    download: fileConfig.transitions,
  },
] as any;
