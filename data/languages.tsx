import { IoLogoJavascript } from "react-icons/io5";
import { FaGolang } from "react-icons/fa6";
import {
  TbBrandTypescript,
  TbBrandPython,
  TbBrandCSharp,
} from "react-icons/tb";
import { GrJava } from "react-icons/gr";

export const languages = [
  {
    title: "Java",
    Icon: GrJava,
    href: "https://www.java.com/en/",
  },
  {
    title: "JavaScript",
    Icon: IoLogoJavascript,
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: "TypeScript",
    Icon: TbBrandTypescript,
    href: "https://www.typescriptlang.org/",
  },
  {
    title: "Python",
    Icon: TbBrandPython,
    href: "https://www.python.org/",
  },
  {
    title: "Golang",
    Icon: FaGolang,
    href: "https://go.dev/",
  },
  {
    title: "C Sharp",
    Icon: TbBrandCSharp,
    href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
  },
];
