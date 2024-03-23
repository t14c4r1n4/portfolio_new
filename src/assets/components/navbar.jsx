import React, { useState } from "react";
import nav_items from '../constants/nav_items'

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 z-40 bg-zinc-900">
      <div className="w-screen flex flex-row ">
        <nav className="text-cyan-500">
          <ul className="flex flex-row w-screen justify-center">
            {nav_items.map((page, index) => (
              <li className="my-3 px-4 py-2 nav-item" key={index}>
                <a href={page.href} aria-label={`Scroll to ${page.alt}`}>
                  <div className="w-10 sm:w-20 md:w-30 lg:w-40">
                    {page.icon}
                  </div>
                  <span className="hidden uppercase text-center"
                  >{page.alt}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;