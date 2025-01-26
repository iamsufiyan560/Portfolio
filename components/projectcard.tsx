"use client";
import Image from "next/image";
import NextLink from "next/link";
import { VscGithub } from "react-icons/vsc";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export type ProjectCardProps = {
  id: string;
  name: string;
  description: string;
  languages: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  images: string[];
  isActive: boolean;
  type: "WEB" | "MOBILE";
  order: number;
};

export const ThingsIveBuilt = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/projects`
      );
      if (!res.ok) throw new Error("Failed to fetch projects");
      return res.json();
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: Infinity,
  });

  // Pagination state
  const [page, setPage] = useState(1);
  const pageSize = 6; // Show 6 projects per page

  if (isLoading) {
    return (
      <section className="mt-10 px-4">
        <p className="text-xl">Things I&apos;ve built</p>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="relative rounded-lg border border-gray-300 bg-white shadow-md overflow-hidden h-48 animate-pulse flex flex-col"
            >
              <div className="w-full h-1/2 bg-gray-200 dark:bg-gray-700" />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-2" />
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4" />
                <div className="flex flex-wrap gap-2 mt-auto">
                  {[...Array(4)].map((_, j) => (
                    <span
                      key={j}
                      className="inline-block h-4 w-12 bg-gray-200 dark:bg-gray-700 rounded"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  if (error)
    return (
      <div className="mt-10 px-4 text-red-500">Error loading projects</div>
    );

  const projects = Array.isArray(data)
    ? data
        .filter((p: ProjectCardProps) => p.isActive)
        .sort((a: ProjectCardProps, b: ProjectCardProps) => a.order - b.order)
    : [];

  // Pagination logic
  const totalPages = Math.ceil(projects.length / pageSize);
  const paginatedProjects = projects.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <section className="mt-10 px-4">
      <p className="text-xl">Things I&apos;ve built</p>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {paginatedProjects.map((project: ProjectCardProps) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="p-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous page"
          >
            <FaChevronLeft />
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 rounded font-semibold ${
                page === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="p-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next page"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
};

const ProjectCard = ({
  name,
  description,
  githubUrl,
  liveUrl,
  languages,
  images,
  type,
}: ProjectCardProps) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images]);

  const imageHeightClass = "h-48"; // Use same height for both types

  return (
    <div
      className={
        "relative rounded-lg border border-gray-300 bg-white shadow-md overflow-hidden " +
        "transition-all duration-300 ease-in-out hover:bg-gray-100 dark:rounded-lg dark:border-[1px] dark:border-none dark:bg-white/5 dark:hover:bg-white/10 dark:shadow-none"
      }
    >
      <div
        className={`relative w-full ${imageHeightClass} bg-gray-100 dark:bg-gray-800 flex items-center justify-center`}
      >
        {images && images.length > 0 ? (
          <Image
            src={images[current]}
            alt={`Preview of ${name}`}
            fill
            className={`object-${type === "MOBILE" ? "contain" : "cover"} ${
              type === "MOBILE" ? "" : ""
            }`}
            aria-label={name}
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={current === 0}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
        {images && images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`inline-block w-2 h-2 rounded-full ${
                  idx === current ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold line-clamp-2 flex-1 pr-8">{name}</h3>
          {githubUrl && (
            <NextLink
              href={githubUrl}
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
          {languages.map((lang) => (
            <span
              key={lang}
              className="mr-2 mb-2 inline-block rounded-md border-[1px] border-zinc-700 px-2 py-1 font-mono text-xs font-semibold"
            >
              {lang}
            </span>
          ))}
        </div>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-blue-600 hover:underline text-sm"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ThingsIveBuilt;
