import React from "react";

interface Link {
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface SocialLinksProps {
  links: Link[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <ul className="font-sm mt-0 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
      {links.map((link, index) => (
        <li key={index}>
          <a
            className="flex items-center transition-all font-medium hover:text-neutral-900 dark:hover:text-neutral-200"
            rel="noopener noreferrer"
            target="_blank"
            href={link.href}
          >
            {link.icon}
            <p className="ml-2 h-7 font-bold">{link.name}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
