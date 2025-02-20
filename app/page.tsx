import Link from "next/link";
import { ProfileImage } from "../components/ProfileImage";
import { TechIUse } from "@/components/techCard";
import { languages } from "@/data/languages";
import { tools } from "@/data/tools";
import { libraries } from "@/data/libraries";
import SocialLinks from "@/components/socialLinks";
import { socialMediaLinks } from "@/data/socialMediaLinks";
export default function Home() {
  return (
    <section className="flex flex-col max-w-screen-xl mx-auto">
      <div className="flex flex-row items-center">
        <ProfileImage />
        <div className="ml-4">
          <h1 className="font-medium text-3xl mb-4 tracking-tighter">
            Hey I&apos;m
          </h1>
          <h1 className="font-medium text-4xl mb-4 tracking-tighter">
            SUFIYAN CHAUDHARI
          </h1>
          <div className="flex justify-end">
            <div className="h-12 mr-4 md:h-10 flex flex-col items-center justify-center space-y-2 font-semibold border-[1px] border-none bg-white/5 p-4 text-sm md:text-base rounded-md shadow-md hover:shadow-rose-500/40 active:translate-y-[2px] transition-all duration-300 ease-out">
              <a
                href="/Resume/resume.pdf"
                download="Sufiyan_Resume.pdf"
                target="_blank"
                className="whitespace-nowrap"
              >
                Resume
              </a>
            </div>
            <Link href="/contact">
              <div className="h-12 md:h-10 flex flex-col items-center justify-center space-y-2 font-semibold border-[1px] border-none bg-white/5 p-4 text-sm md:text-base rounded-md shadow-md hover:shadow-rose-500/40 active:translate-y-[2px] transition-all duration-300 ease-out">
                <span className="whitespace-nowrap">Contact Me</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <p className="p-4 prose prose-neutral dark:prose-invert">
        I&apos;m a software developer with a strong focus on Web Applications
        and Backend APIs. My work revolves around building scalable digital
        solutions, optimizing performance, and enhancing user experiences.
      </p>
      <p className="p-4">
        I&apos;m always open to collaborating on exciting projects and
        connecting with like-minded professionals. If you&apos;d like to discuss
        web development, tech trends, or innovative ideas,{" "}
        <b>
          <Link href="/contact">let&apos;s connect!</Link>
        </b>
      </p>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      <h2 className="font-medium text-2xl mb-2 tracking-tighter pt-6">
        Tech Stack that i use:
      </h2>
      <h3 className="pt-4 ">Languages :</h3>
      <TechIUse tech={languages} />
      <h3 className="pt-4">Frameworks / Libraries :</h3>
      <TechIUse tech={libraries} />
      <h3 className="pt-4">Tools :</h3>
      <TechIUse tech={tools} />

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
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
