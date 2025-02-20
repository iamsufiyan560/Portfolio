import Image from "next/image";

export const ProfileImage = ({
  size = "lg",
  isInteractive = false,
}: {
  size?: "sm" | "lg";
  isInteractive?: boolean;
}) => {
  return (
    <div
      className={`rounded-full bg-gradient-to-tl from-midnight/60 to-rose-400/60 shadow-lg ${
        size === "sm" ? "p-[2px]" : "p-[3px]"
      } ${
        isInteractive
          ? "group transform transition ease-out hover:scale-105 hover:from-midnight hover:to-rose-400 hover:shadow-rose-500/25 active:translate-y-[2px]"
          : "ring-[5px] ring-rose-700/10"
      }`}
    >
      <div
        className={`rounded-full p-px ${
          size === "sm" ? "h-10 w-10" : "h-24 w-24"
        } ${
          isInteractive ? "transition duration-300 group-hover:scale-105" : ""
        }`}
      >
        <Image
          src="https://avatars.githubusercontent.com/u/140635114?v=4"
          alt="A picture of Shaun"
          priority
          className="rounded-full"
          width={size === "sm" ? 40 : 96}
          height={size === "sm" ? 40 : 96}
        />
      </div>
    </div>
  );
};
