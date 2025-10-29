"use client";

import React from "react";
import Link from "next/link";
import SocialLinks from "@/components/socialLinks";
import { socialMediaLinks } from "@/data/socialMediaLinks";
import { useQuery } from "@tanstack/react-query";

interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  techStack: string[];
  summary: string;
  highlights: string[];
  isActive: boolean;
  createdAt: string;
}

export default function ExperienceContent() {
  const { data, isLoading, isFetching, error, refetch } = useQuery<
    Experience[],
    Error
  >({
    queryKey: ["experience"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/experience`
      );
      if (!res.ok) throw new Error("Failed to fetch experience data");
      return res.json();
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: Infinity,
  });

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const SkeletonLoader = () => (
    <div className="prose prose-neutral dark:prose-invert animate-pulse">
      {[...Array(2)].map((_, index) => (
        <div key={index}>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-2"></div>
          <div className="p-2">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          </div>
          <ul className="list-disc pl-6 p-4">
            {[...Array(3)].map((_, i) => (
              <li
                key={i}
                className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"
              ></li>
            ))}
          </ul>
          {index !== 1 && (
            <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
          )}
        </div>
      ))}
    </div>
  );

  const ErrorState = () => (
    <div className="prose prose-neutral dark:prose-invert text-center">
      <p className="text-red-500 dark:text-red-400">
        Failed to load experience data. Please try again.
      </p>
      <button
        onClick={() => refetch()}
        className="mt-4 h-10 flex items-center justify-center font-semibold border-[1px] border-none bg-white/5 p-4 text-sm rounded-md shadow-md hover:shadow-rose-500/40 active:translate-y-[2px] transition-all duration-300 ease-out"
      >
        Retry
      </button>
    </div>
  );

  const renderContent = () => {
    if (isLoading || isFetching) {
      return <SkeletonLoader />;
    }

    if (error) {
      return <ErrorState />;
    }

    return (
      <div className="prose prose-neutral dark:prose-invert">
        {data
          ?.filter((exp) => exp.isActive)
          .map((exp, index) => (
            <div key={exp.id}>
              <h2 className="font-medium text-xl mb-1 tracking-tighter">
                {exp.company}
              </h2>
              <p className="font-normal text-sm">
                {exp.role}, {formatDate(exp.startDate)} —{" "}
                {exp.endDate ? formatDate(exp.endDate) : "Present"} (
                {exp.location})
              </p>
              <p className="font-normal text-sm">
                <b className="font-normal text-sm">Technologies used:</b>{" "}
                {exp.techStack.join(", ")}
              </p>
              <p className="p-2">{exp.summary}</p>
              <ul className="list-disc pl-6 p-4">
                {exp.highlights.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
              {index !== data.length - 1 && (
                <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
              )}
            </div>
          ))}
      </div>
    );
  };

  return (
    <>
      {renderContent()}
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
    </>
  );
}
