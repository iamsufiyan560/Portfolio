import Link from "next/link";
import { ProfileImage } from "../components/ProfileImage";
import { TechIUse } from "@/components/techCard";
import { languages } from "@/data/languages";
import { tools } from "@/data/tools";
import { libraries } from "@/data/libraries";
import SocialLinks from "@/components/socialLinks";
import { socialMediaLinks } from "@/data/socialMediaLinks";
import { parseTemplate } from "@/util/hero";
import { heroConfig, skillComponents } from "@/config/Hero";
import Skill from "@/components/Skill";
import { databases } from "@/data/databases";
import Contribution from "@/components/Contribution";
export default function Home() {
  const { skills, description } = heroConfig;

  const renderDescription = () => {
    const parts = parseTemplate(description.template, skills);

    return parts.map((part) => {
      if (part.type === "skill" && "skill" in part && part.skill) {
        const SkillComponent =
          skillComponents[part.skill.component as keyof typeof skillComponents];
        return (
          <Skill key={part.key} name={part.skill.name} href={part.skill.href}>
            <SkillComponent />
          </Skill>
        );
      } else if (part.type === "bold" && "text" in part) {
        return (
          <b key={part.key} className="whitespace-pre-wrap text-primary">
            {part.text}
          </b>
        );
      } else if (part.type === "text" && "text" in part) {
        return (
          <span key={part.key} className="whitespace-pre-wrap">
            {part.text}
          </span>
        );
      }
      return null;
    });
  };

  return (
    <section className="flex flex-col mx-auto">
      {/*  */}
      <div className="flex flex-row items-start">
        <ProfileImage />
        <div className="ml-4 flex flex-col justify-between h-full">
          <div>
            <h1 className="font-medium text-3xl mb-4 tracking-tighter">
              Hey I&apos;m
            </h1>
            <h1 className="font-medium text-3xl sm:text-4xl mb-4 tracking-tighter">
              SUFIYAN CHAUDHARI
            </h1>
          </div>
          <div className=" flex justify-start gap-4">
            <Resume_Contact_ME />
          </div>
        </div>
      </div>
      {/*  */}
      <hr className="my-6 border-neutral-300 dark:border-neutral-800" />
      <div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-base md:text-lg text-neutral-500 whitespace-pre-wrap">
        {renderDescription()}
      </div>

      <hr className="my-6 border-neutral-300 dark:border-neutral-800" />
      <h2 className="font-medium text-2xl mb-2 tracking-tighter pt-6">
        Tech Stack that i use:
      </h2>
      <h3 className="pt-4 ">Languages :</h3>
      <TechIUse tech={languages} />
      <h3 className="pt-4">Frameworks / Libraries :</h3>
      <TechIUse tech={libraries} />
      <h3 className="pt-4">Databases :</h3>
      <TechIUse tech={databases} />
      <h3 className="pt-4">Tools :</h3>
      <TechIUse tech={tools} />
      <hr className="my-6 border-neutral-300 dark:border-neutral-800" />

      <h2 className="font-medium text-2xl mb-2 tracking-tighter pt-2">
        Proof of Work :
      </h2>

      <Contribution />

      <hr className="my-6 border-neutral-300 dark:border-neutral-800" />

      <div className="flex flex-row justify-between items-center mt-0">
        <SocialLinks links={socialMediaLinks} />

        <div className="flex justify-end">
          <Link href="/contact">
            <div className="h-12 md:h-10 flex flex-col items-center justify-center space-y-2 font-semibold border-[1px] border-none bg-white/5 p-4 text-sm md:text-base rounded-md shadow-md hover:shadow-rose-500/40 active:translate-y-[2px] transition-all duration-300 ease-out">
              <span className="whitespace-nowrap">Contact Me</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

const Resume_Contact_ME = () => {
  return (
    <>
      <div className="h-12 md:h-10 flex flex-col items-center justify-center space-y-2 font-semibold border-[1px] border-none bg-white/5 p-4 text-sm md:text-base rounded-md shadow-md hover:shadow-rose-500/40 active:translate-y-[2px] transition-all duration-300 ease-out">
        <a
          href="/Resume/resume.pdf"
          target="_blank"
          className="whitespace-nowrap"
        >
          {" "}
          Resume{" "}
        </a>
      </div>
      <Link href="/contact">
        <div className="h-12 md:h-10 flex flex-col items-center justify-center space-y-2 font-semibold border-[1px] border-none bg-white/5 p-4 text-sm md:text-base rounded-md shadow-md hover:shadow-rose-500/40 active:translate-y-[2px] transition-all duration-300 ease-out">
          <span className="whitespace-nowrap">Contact Me</span>
        </div>
      </Link>
    </>
  );
};
