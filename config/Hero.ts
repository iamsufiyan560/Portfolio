import ReactNative from "@/components/technologies/ReactNative";
import TypeScript from "@/components/technologies/TypeScript";
import NextJs from "@/components/technologies/NextJs";
import ExpressJs from "@/components/technologies/ExpressJs";
import PostgreSQL from "@/components/technologies/PostgreSQL";
import NodeJs from "@/components/technologies/NodeJs";

export const skillComponents = {
  TypeScript: TypeScript,
  ReactNative: ReactNative,
  NextJs: NextJs,
  ExpressJs: ExpressJs,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
};

export const heroConfig = {
  skills: [
    {
      name: "Typescript",
      href: "https://www.typescriptlang.org/",
      component: "TypeScript",
    },
    {
      name: "React Native",
      href: "https://reactnative.dev/",
      component: "ReactNative",
    },
    {
      name: "Next.js",
      href: "https://nextjs.org/",
      component: "NextJs",
    },
    {
      name: "ExpressJs",
      href: "https://expressjs.com/",
      component: "ExpressJs",
    },
    {
      name: "PostgreSQL",
      href: "https://www.postgresql.org/",
      component: "PostgreSQL",
    },
  ],

  description: {
    template:
      "Full Stack Engineer building web and mobile apps with {skills:0}, {skills:1}, {skills:2}, {skills:3}, and {skills:4}.",
  },
  // Buttons Configuration
  buttons: [
    {
      variant: "outline",
      text: "Resume / CV",
      href: "/resume",
      icon: "CV",
    },
    {
      variant: "default",
      text: "Get in touch",
      href: "/contact",
      icon: "Chat",
    },
  ],
};
