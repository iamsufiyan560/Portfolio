import ExperienceContent from "@/components/ExperienceContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "My professional experience and achievements.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Experience</h1>
      <ExperienceContent />
    </section>
  );
}
