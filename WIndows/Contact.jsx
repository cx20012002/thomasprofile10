import React from "react";
import WindowWrapper from "@/hoc/WindowWrapper";
import Image from "next/image";
import { socials } from "@/constants/dataConstants";
import WindowControls from "@/components/WindowControls";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>
      <div className="p-5 space-y-5">
        <Image
          src="/images/adrian.jpg"
          alt="Thomas"
          width={100}
          height={100}
          className="w-20 h-auto rounded-full"
        />
        <h3>Let&apos;s Connect</h3>
        <p>
          Got an idea? A bug to squash? Or just wanna talk tech? I&apos;m in the
          loop.
        </p>
        <p>contact@jsmastery.pro</p>

        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <Image
                  src={icon}
                  alt={text}
                  width={20}
                  height={20}
                  className="size-5"
                />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
