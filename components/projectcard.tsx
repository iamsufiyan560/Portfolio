import Image from "next/image";
import NextLink from "next/link";
import { VscGithub } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";
import { projects } from "@/data/projects";

export const ThingsIveBuilt = () => {
  return (
    <section className="mt-10 px-4">
      <p className="text-xl">Things I&apos;ve built</p>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

type ProjectCardProps = (typeof projects)[0];

const ProjectCard = ({
  title,
  description,
  gitLink,
  techStack,
  thumb,
}: ProjectCardProps) => {
  return (
    <div
      className={
        "relative rounded-lg border border-gray-300 bg-white shadow-md overflow-hidden " +
        "transition-all duration-300 ease-in-out hover:bg-gray-100 dark:rounded-lg dark:border-[1px] dark:border-none dark:bg-white/5 dark:hover:bg-white/10 dark:shadow-none"
      }
    >
      <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-800">
        <Image
          src={thumb}
          alt={`Preview of ${title}`}
          fill
          className="object-cover "
          aria-label={title}
        />
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold line-clamp-2 flex-1 pr-8">
            {title}
          </h3>
          {gitLink && (
            <NextLink
              href={gitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <VscGithub
                size={20}
                color="#333"
                className="fill-current  group-hover:text-white transition-all duration-300 ease-in-out"
              />
            </NextLink>
          )}
        </div>

        <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>

        <div className="flex flex-wrap items-center">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="mr-2 mb-2 inline-block rounded-md border-[1px] border-zinc-700 px-2 py-1 font-mono text-xs font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThingsIveBuilt;
