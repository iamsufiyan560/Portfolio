import React from "react";
import { IconType } from "react-icons";

interface TechData {
  title: string;
  Icon: IconType;
  href: string;
}

interface TechIUseProps {
  tech: TechData[];
}

export const TechIUse = ({ tech }: TechIUseProps) => {
  return (
    <section className="mt-2 px-4">
      <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-5">
        {tech.map((techItem, index) => (
          <TechCard key={index} {...techItem} />
        ))}
      </div>
    </section>
  );
};

type TechCardProps = {
  title: string;
  Icon: IconType;
  href: string;
};

const TechCard = ({ title, Icon, href }: TechCardProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div
        className="h-22 flex flex-col items-center justify-center space-y-2 font-semibold 
        border-[1px] border-none bg-white/5 p-4 text-sm rounded-md shadow-md hover:shadow-rose-500/40 
        active:translate-y-[2px] transition-all duration-300 ease-out"
      >
        <Icon size={24} />
        <span className="whitespace-nowrap">{title}</span>
      </div>
    </a>
  );
};
