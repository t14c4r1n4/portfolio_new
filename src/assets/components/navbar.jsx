import React, { useRef, useState } from "react";
import nav_items from "../constants/nav_items";
import ScrollSpy from "react-scrollspy-navigation";
import scrollPosition from "react-scrollspy-navigation"

const Navbar = () => {
  return (
    <ScrollSpy activeClass="nav-active" scrollTargetIds={nav_items.map(item => item.id)}>
    <div className="w-full fixed top-0 z-40 bg-zinc-900">
      <div className="w-screen flex flex-row ">
        <nav className="bg-gradient-to-r from-fuchsia-500 to-orange-500 text-transparent bg-clip-text">
          <ul className="flex flex-row w-screen justify-center">
            {nav_items.map((page, index) => (
              <li className="my-3 px-4 py-2 place-content-center" key={index}>
                <a
                  href={`#${page.id}`}
                  aria-label={`Scroll to ${page.id}`}
                  className={`relative flex justify-center hover:font-extrabold ${
                    scrollPosition >= document.getElementById(page.id)?.offsetTop &&
                    scrollPosition < document.getElementById(page.id)?.offsetTop + document.getElementById(page.id)?.offsetHeight
                      ? "nav-active"
                      : ""
                  }`}
                >
                  {page.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </ScrollSpy>
  );
};

export default Navbar;
