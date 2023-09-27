import React from "react";

// Import data
import { copyright } from "../data";

const Copyright = () => {
  // Destructure copyright data
  const { link1, link2, copyText, socialIcons } = copyright;

  return (
    <div
      className="flex flex-col items-center gap-y-2 lg:flex-row lg:justify-between"
      data-aos="fade-up"
      data-aos-offset="0"
      data-aos-delay="200"
    >
      {/* Links */}
      <div className="flex gap-x-6">
        <a className="hover:text-accent transition" href={link1.href}>
          {link1.name}
        </a>
        <a className="hover:text-accent transition" href={link2.href}>
          {link2.name}
        </a>
      </div>
      {/* Copyright text */}
      <div>{copyText}</div>
      {/* Social icons */}
      <ul className="flex gap-x-[12px]">
        {socialIcons.map((socialIcon, index) => {
          // Destructure socialIcon
          const { icon, href } = socialIcon;
          return (
            <li key={index}>
              <a href={socialIcon.href}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Copyright;
