"use client";
import Image from "next/image";
import NextLink from "next/link";
import { VscGithub } from "react-icons/vsc";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
} from "react-icons/fa";

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

  const [page, setPage] = useState(1);
  const pageSize = 6;

  if (isLoading) {
    return (
      <section className="mt-10 px-4">
        <p className="text-xl">Things I&apos;ve built</p>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="relative rounded-lg border border-gray-300 dark:border-neutral-800 bg-gray-100 dark:bg-white/5 overflow-hidden animate-pulse flex flex-col"
            >
              <div className="w-full h-48 bg-gray-300 dark:bg-neutral-800" />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div className="h-5 bg-gray-300 dark:bg-neutral-700 rounded w-2/3 mb-3" />
                <div className="h-4 bg-gray-300 dark:bg-neutral-700  rounded w-full mb-2" />
                <div className="h-4 bg-gray-300 dark:bg-neutral-700 rounded w-4/5 mb-4" />
                <div className="flex flex-wrap gap-2 mt-auto">
                  {[...Array(4)].map((_, j) => (
                    <span
                      key={j}
                      className="inline-block h-6 w-16 bg-gray-300 dark:bg-neutral-700 rounded-md"
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
            className="p-2 rounded bg-gray-300 hover:bg-gray-400 dark:bg-white/5 dark:hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous page"
          >
            <FaChevronLeft />
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 rounded font-semibold transition-colors ${
                page === i + 1
                  ? "bg-gray-800 text-white dark:bg-white/20 dark:text-white"
                  : "bg-gray-300 hover:bg-gray-400 dark:bg-white/5 dark:hover:bg-white/10"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="p-2 rounded bg-gray-300 hover:bg-gray-400 dark:bg-white/5 dark:hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!images || images.length <= 1 || isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images, isPaused]);

  const handlePrevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className={
        "relative rounded-lg border dark:border-neutral-800 bg-white/5 overflow-hidden " +
        "transition-all duration-300 ease-in-out hover:bg-white/10 shadow-md hover:shadow-rose-500/20"
      }
    >
      <div
        className="relative w-full h-48 bg-neutral-900 flex items-center justify-center group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {images && images.length > 0 ? (
          <>
            <Image
              src={images[current]}
              alt={`Preview of ${name}`}
              fill
              className={`object-${type === "MOBILE" ? "contain" : "cover"}`}
              aria-label={name}
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={current === 0}
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  aria-label="Previous image"
                >
                  <FaChevronLeft size={14} />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  aria-label="Next image"
                >
                  <FaChevronRight size={14} />
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrent(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === current
                          ? "bg-white w-6"
                          : "bg-white/50 hover:bg-white/70"
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-neutral-500">
            No Image
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-3 gap-2">
          <h3 className="text-lg font-bold line-clamp-2 flex-1">{name}</h3>
          <div className="flex gap-2 flex-shrink-0">
            {githubUrl && (
              <NextLink
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="View on GitHub"
              >
                <VscGithub size={18} />
              </NextLink>
            )}
            {liveUrl && (
              <NextLink
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="View live demo"
              >
                <FaExternalLinkAlt size={14} />
              </NextLink>
            )}
          </div>
        </div>
        <p className="text-sm text-neutral-400 mb-4 line-clamp-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {languages.map((lang) => (
            <span
              key={lang}
              className="inline-block rounded-md border border-neutral-700 px-2 py-1 font-mono text-xs font-semibold bg-white/5"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThingsIveBuilt;
