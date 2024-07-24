import ExampleDropdown from "@/ui/Dropdown/example";
import fileConfig from "@/utils/files_config.json";

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
] as any;
