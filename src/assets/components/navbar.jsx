import React, { createRef, useRef, useState } from "react";
import nav_items from "../constants/nav_items";
import ScrollSpy from "react-scrollspy-navigation";
import scrollPosition from "react-scrollspy-navigation"

const Navbar = () => {
  return (

    <div className="w-full fixed top-0 z-40 bg-zinc-900">
      <nav className="w-screen h-[10vh]">

        <ul className="flex flex-row place-content-center space-between">
          <ScrollSpy activeClass="nav-active" scrollTargetIds={nav_items.map(item => item.id)}>
            {nav_items.map((page, index) => (
              <li className="py-[2vh]" key={index} ref={createRef()}>
                {/* Mobile View - Icons*/}
                <a href={`#${page.id}`}
                  aria-label={`Scroll to ${page.id}`}
                  className={`md:hidden relative flex hover:font-extrabold`}
                >
                  {page.icon}
                </a>
                {/* Display View - Text*/}
                <a
                  href={`#${page.id}`}
                  aria-label={`Scroll to ${page.id}`}
                  className={`hidden md:inline-block relative flex hover:font-extrabold `}
                >
                  {page.name}
                </a>
              </li>
            ))}
          </ScrollSpy>
        </ul>

      </nav>
    </div>

  );
};

export default Navbar;
