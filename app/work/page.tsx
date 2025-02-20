import React from "react";
import Link from "next/link";
import SocialLinks from "@/components/socialLinks";
import { socialMediaLinks } from "@/data/socialMediaLinks";

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Experience</h1>
      <div className="prose prose-neutral dark:prose-invert">
        {experienceData.map((exp, index) => (
          <div key={index}>
            <h2 className="font-medium text-xl mb-1 tracking-tighter">
              {exp.company}
            </h2>
            <p className="font-normal text-sm">
              {exp.role}, {exp.duration}
            </p>
            <p className="font-normal text-sm">
              <b className="font-normal text-sm">Technologies used:</b>{" "}
              {exp.technologies.join(", ")}
            </p>
            <p className="p-2">{exp.description}</p>
            <ul className="list-disc pl-6 p-4">
              {exp.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
            {index !== experienceData.length - 1 && (
              <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
            )}
          </div>
        ))}
      </div>

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

const experienceData = [
  {
    company: "Quadb Tech",
    role: "Jr Full Stack Developer",
    duration: "Aug 2024 — Jan 2025 (Remote)",
    technologies: [
      "Node.js",
      "React.js",
      "Express.js",
      "Next.js",
      "PostgreSQL",
      "Redux-Toolkit",
      "Tailwind Css",
      "REST API",
      "Git",
    ],
    description:
      "At Quadb Tech, I contributed to cutting-edge blockchain projects:",
    tasks: [
      "Led the development of the  Web3 application from scratch using React.js, ensuring a seamless and high-performance user interface.",
      "Implemented state management using Redux, optimizing application speed and improving overall efficiency.",
      "Integrated Web3 services, connecting the frontend with blockchain-based authentication, smart contracts, and wallet functionalities.",
      "Collaborated with backend development, creating RESTful APIs using Node.js and Express.js whenever needed for better system flexibility.",
      "Optimized performance, improving load times and reducing latency, resulting in a smoother user experience.",
    ],
  },
  {
    company: "TechCharm",
    role: " Full Stack Developer Intern",
    duration: "Jan 2024 — Aug 2024 (Remote)",
    technologies: [
      "Node.js",
      "React.js",
      "Express.js",
      "Next.js",
      "MongoDB",
      "Redux-Toolkit",
      "Tailwind Css",
      "REST API",
      "Git",
    ],
    description: "At TechCharm, I worked on diverse web projects:",
    tasks: [
      "Collaborated on building a high-performance e-commerce platform using Next.js and MERN stack, focusing on server-side rendering (SSR) and SEO optimization.",
      "Developed user authentication and authorization features using JWT and Passport.js for a secure and scalable login system.",
      "Implemented advanced search functionalities with MongoDB Atlas, improving product search performance by 40%.",
      "Designed and integrated interactive product pages with React components, improving the overall user experience and engagement.",
      "Worked on enhancing the site's performance, reducing load times by 30% by optimizing React components and leveraging server-side rendering (SSR) with Next.js.",
    ],
  },
];
