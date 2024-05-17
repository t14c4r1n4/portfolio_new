import { GoLaw } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import React, { useState } from "react";

const footerIconProps = {
  className:
    "size-6 transition-transform duration-300 group-hover:scale-115 group-hover:opacity-100 opacity-50 fill-zinc-600 rounded-2xl",
};

export default function Footer() {
  const [activeIndex, setActiveIndex] = useState(false);
  const YEAR = new Date().getFullYear();
  return (
    <footer className="fixed bottom-0 w-full bg-zinc-900 p-4 z-3">
      <div className="flex flex-cols justify-center divide-x divide-dotted divide-zinc-800 space-x-5 container">
        <div>
          <a
            href="/impressum"
            className={`${activeIndex === 0 ? "active" : ""} relative`}
            onMouseEnter={() => setActiveIndex(0)}
            onMouseLeave={() => setActiveIndex(false)}
          >
            <i className={`group rounded-full drop-shadow-xl`}>
              <GoLaw {...footerIconProps} />
            </i>
            {/* Tooltip visible if active*/}
            {activeIndex === 0 && <span className="-translate-y-24 absolute -translate-x-12 text-zinc-800 mx-5 align-center justify-center z-10 bg-purple-600 rounded-lg p-3 overflow-auto">Impressum</span>}
          </a>
        </div>

        {/* Container for Social Icons */}
        <div className="flex flex-row">
          <a href="https://github.com/t14c4r1n4" className={`${activeIndex === 1 ? "active" : ""} pl-3 relative`}
            onMouseEnter={() => setActiveIndex(1)}
            onMouseLeave={() => setActiveIndex(false)}>
            <i className="group flex justify-center rounded-full drop-shadow-xl">
              <FaGithub {...footerIconProps} />
            </i>
            {activeIndex === 1 && <span className="-translate-y-28 absolute -translate-x-12 text-zinc-800 mx-5 align-center justify-center z-10 bg-purple-600 rounded-lg p-3 overflow-auto">github:<br />t14c4r1n4</span>}
          </a>
          <a href="" className={`${activeIndex === 2 ? "active" : ""} pl-3 relative`}
            onMouseEnter={() => setActiveIndex(2)}
            onMouseLeave={() => setActiveIndex(false)}>
            <i className="group flex justify-center rounded-full drop-shadow-xl">
              <FaLinkedin {...footerIconProps} />
            </i>
            {/* Tooltip visible if active*/}
            {activeIndex === 2 && <span className="-translate-y-36 absolute -translate-x-8 text-zinc-800 mx-5 align-center justify-center z-10 bg-purple-600 rounded-lg p-3 overflow-auto">linkedin:<br />carina-webdev</span>}
          </a>
        </div>

        <p className="text-zinc-500 mx-5 pl-3">© {YEAR} Carina Arnold</p>
      </div>
    </footer>
  );
}
