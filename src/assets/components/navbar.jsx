import React from "react";
import nav_items from "../constants/nav_items";

const Navbar = () => {
  const offset = 80; // height of the header

  const handleScrollTo = (id) => {
    scrollToWithOffset(id, offset);
  };

  return (
    <div className="w-full fixed top-0 z-40 bg-zinc-900">
      <nav className="h-[8vh]">
        <ul className="flex flex-row place-content-center space-x-[2vw]">
          {nav_items.map((page, index) => (
            <li className="py-[1.5vh] md:py-[2.5vh] px-[1vw] md:px-[2vw]" key={index}>
              {/* Mobile View - Icons */}
              <a
                href={`#${page.id}`}
                aria-label={`Scroll to ${page.id}`}
                className={`md:hidden relative flex hover:font-extrabold`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo(page.id);
                }}
              >
                {page.icon}
              </a>
              {/* Display View - Icon + Text */}
              <div className="hidden md:flex items-center justify-center space-x-2">
                <a
                  href={`#${page.id}`}
                  aria-label={`Scroll to ${page.id}`}
                  className={`flex items-center hover:font-extrabold`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo(page.id);
                  }}
                >
                  <span className="text-lg md:text-base lg:text-lg">
                    {React.cloneElement(page.icon, { className: "w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" })}
                  </span>
                  <span className="ml-1 text-sm lg:text-base">{page.name}</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

const scrollToWithOffset = (id, offset) => {
  const element = document.getElementById(id);
  if (element) {
    const yOffset = offset;
    const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

export default Navbar;
