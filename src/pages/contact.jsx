import React from "react";
import PrimaryHeading from "../components/common/primaryHeading";
import Button from "../components/common/button";
import { gmailLink } from "../data/data";
import { Send } from "lucide-react";

const socials = [
  {
    img: "https://cdn-icons-png.flaticon.com/128/3291/3291695.png", // GitHub
    href: "https://github.com/WebWithAstha",
    alt: "GitHub",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png", // LinkedIn
    href: "https://www.linkedin.com/in/asthalodhi",
    alt: "LinkedIn",
  },
];

const phone = import.meta.env.VITE_PHONE_NUMBER;
const whatsappLink = `https://wa.me/${phone.replace("+", "")}`;

const Contact = () => {
  return (
    <div className="pt-32 pb-16 lg:px-40 md:px-16 px-6 min-h-screen flex flex-col justify-center items-center text-center max-w-[1600px] mx-auto">
      <PrimaryHeading>
        Let's connect and build something impactful.
      </PrimaryHeading>

      <p className="text-zinc-600 max-w-xl mt-4 mb-10 text-sm md:text-base">
        Whether you're looking for a developer, designer, or someone who loves solving meaningful
        problems — feel free to reach out. I'm open to collaborations, freelance work, or a simple chat.
      </p>

      <Button
        variant="outline"
        showIcon
        icon={<Send size={18} />}
        onClick={() => window.open(gmailLink, "_blank")}
      >
        Send a Mail
      </Button>

      <div className="mt-8 flex flex-col items-center gap-2">
        <p className="text-sm text-zinc-500">Prefer a quick chat?</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--primary)] font-semibold hover:underline text-sm"
        >
          Message me on WhatsApp: {phone}
        </a>
      </div>

      <div className="mt-12">
        <h3 className="text-sm text-zinc-500 mb-4">Also find me here</h3>
        <div className="flex gap-6 justify-center">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              title={social.alt}
            >
              <img
                className="h-9 w-9 object-contain opacity-60 hover:opacity-100 transition duration-200 cursor-pointer"
                src={social.img}
                alt={social.alt}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
