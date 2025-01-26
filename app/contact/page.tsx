import { TechIUse } from "@/components/techCard";
import { contacts } from "@/data/contacts";
import { Metadata } from "next";
import { LuSendHorizontal } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Get in touch with me through this contact form.",
};

export default function Page() {
  return (
    <section>
      <div className="prose prose-neutral dark:prose-invert">
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">
          Say Hello!
        </h1>
        <hr className="my-6 border-neutral-700 dark:border-neutral-800" />

        <form
          action="https://formsubmit.co/msufiyanhusen@gmail.com"
          method="POST"
          className="flex flex-col mt-0 mb-8"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://sufiyan-dev.vercel.app/thanks"
          />

          <input
            type="text"
            name="name"
            required
            className="p-4 mb-2 border-b border-gray-300 transition ease-in-out duration-500 focus:outline-none focus:border-black"
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email"
            required
            className="p-4 mb-2 border-b border-gray-300 transition ease-in-out duration-500 focus:outline-none focus:border-black"
            placeholder="Your E-mail"
          />
          <textarea
            name="message"
            required
            className="p-4 mb-2 border-b border-gray-300 transition ease-in-out duration-500 focus:outline-none focus:border-black"
            placeholder="Your Message"
          ></textarea>

          <button
            type="submit"
            className="h-12 px-4 py-2 flex items-center justify-center space-x-2 font-semibold bg-white/5 p-4 text-sm rounded-md shadow-md hover:shadow-rose-500/40 active:translate-y-[2px] transition-all duration-300 ease-out"
          >
            <LuSendHorizontal className="mr-2" />
            Submit Message
          </button>
        </form>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">
          Also Follow me on:
        </h1>
        <TechIUse tech={contacts} />
      </div>
    </section>
  );
}
