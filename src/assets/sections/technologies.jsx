import React, { useState } from "react";
import { technologies } from "../constants/tech";

export default function Tech() {
  const [activeIndex, setActiveIndex] = useState(null);

  const icons = technologies.map((techImage, index) => (
    <article
      className="flex relative place-content-center"
      key={index}
      onMouseEnter={() => setActiveIndex(index)}
      onMouseLeave={() => setActiveIndex(null)}
      onClick={() => setActiveIndex(index)}
    >
      <div className="p-2 transition hover:scale-115 duration-300 group cursor-pointer hex glass flex">
        {techImage.icon}
      </div>

      {activeIndex === index && (
        <span className="-translate-y-16 -translate-x-8 absolute text-zinc-200 mx-5 align-center justify-center z-10 bg-zinc-600 rounded-lg p-3 overflow-auto">
          {techImage.name}
        </span>
      )}
    </article>
  ));

  return (
    <div className="flex flex-wrap justify-center gap-2 p-3 rounded-2xl max-w-[70vw]">
      {icons}
    </div>
  );
}
