import { DiMysql } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoGit } from "react-icons/bi";
import { BsUbuntu, BsWindows } from "react-icons/bs";
import { BiLogoSass } from "react-icons/bi";
import { BiLogoWordpress } from "react-icons/bi";
import { FaShopware } from "react-icons/fa";
import { BiLogoReact } from "react-icons/bi";

const iconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  fill: "none",
  className:
    "w-10 h-10 transition-transform duration-300 transform group-hover:scale-105 stroke-purple-700",
  width:"{20}"
};

const technologies = [
  {
    name: "html",
    icon: <DiHtml5 />
  },
  {
    name: "css",
    icon: <DiCss3 />
  },
  {
    name: "javascript",
    icon: <BiLogoJavascript />
  },
  {
    name: "python",
    icon: <DiPython />
  },

 
  // {
  //   name: "github",
  //   icon: <FaGithub />
  // },
  // {
  //   name: "linkedin",
  //   icon: <BiLogoLinkedin />
  // },
  {
    name: "mysql",
    icon: <DiMysql />
  },
  {
    name: "ubuntu",
    icon: <BsUbuntu />
  },
  {
    name: "windows",
    icon: <BsWindows />
  },
  {
    name: "wordpress",
    icon: <BiLogoWordpress />
  },
  {
    name: "shopware",
    icon: <FaShopware />
  },
  {
    name: "react",
    icon: <BiLogoReact />
  },
  {
    name: "tailwind",
    icon: <BiLogoTailwindCss />
  },
  {
    name: "bootstrap",
    icon: <DiBootstrap />
  },
  {
    name: "sass",
    icon: <BiLogoSass />
  },
  {
    name: "git",
    icon: <BiLogoGit />
  },
];

export { technologies, iconProps };