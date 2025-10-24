"use client";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import { Activity } from "react-github-calendar";

const GitHubCalendar = dynamic(() => import("react-github-calendar"), {
  ssr: false,
  loading: () => <div className="h-[159px] " />,
});

function GithubCalender() {
  const [totalCount, setTotalCount] = useState(0);

  const { theme } = useTheme();

  const processContributions = useCallback((contributions: Activity[]) => {
    setTimeout(() => {
      const total = contributions
        .map((el) => el.count)
        .reduce((acc, curr) => acc + curr, 0);

      setTotalCount(total);
    }, 0);

    return contributions.slice(91, 365);
  }, []);

  return (
    <GitHubCalendar
      username="iamsufiyan560"
      transformData={processContributions}
      totalCount={totalCount}
      colorScheme={theme === "light" ? "light" : "dark"}
    />
  );
}

export default GithubCalender;
