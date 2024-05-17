import React, { useRef, useState } from "react";
import nav_items from "../constants/nav_items";
import ScrollSpy from "react-scrollspy-navigation";
import scrollPosition from "react-scrollspy-navigation"

const Navbar = () => {
  return (
    <ScrollSpy activeClass="nav-active" scrollTargetIds={nav_items.map(item => item.id)}>
      <div className="w-full fixed top-0 z-40 bg-zinc-900">
          <nav className="w-screen h-[10vh]">
            <ul className="flex flex-row place-content-center space-between">
              {nav_items.map((page, index) => (
                <li className="py-[2vh]" key={index}>
                  {/* Mobile View */}
                  <a href={`#${page.id}`}
                    aria-label={`Scroll to ${page.id}`}
                    className={`md:hidden relative flex hover:font-extrabold ${scrollPosition >= document.getElementById(page.id)?.offsetTop &&
                        scrollPosition < document.getElementById(page.id)?.offsetTop + document.getElementById(page.id)?.offsetHeight
                        ? "nav-active"
                        : ""
                      }`}
                  >
                    {page.icon}
                  </a>
                  {/* Display View */}
                  <a
                    href={`#${page.id}`}
                    aria-label={`Scroll to ${page.id}`}
                    className={`hidden md:inline-block relative flex hover:font-extrabold ${scrollPosition >= document.getElementById(page.id)?.offsetTop &&
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
    </ScrollSpy>
  );
};

export default Navbar;
