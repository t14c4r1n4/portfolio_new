import { technologies } from "../constants/tech";
import React from "react";
import { useState, useMemo } from "react";

const useHover = () => {
  const [hovered, setHovered] = useState();

  const eventHandlers = useMemo(
    () => ({
      onMouseOver() {
        setHovered(true);
      },
      onMouseOut() {
        setHovered(false);
      },
    }),
    []
  );
  return [hovered, eventHandlers];
};

const icons = technologies.map((techImage, index) => (
  <article className="flex" key={index}>
    <div className="p-2 transition hover:scale-115 duration-300 group cursor-pointer hex glass place-content-center flex">
      {techImage.icon}
    </div>
    <button className="text-center hidden hover:display">
      {techImage.name}
    </button>
  </article>
));

export default function Tech() {
  return (
    <div className="flex flex-wrap justify-center gap-2 p-5 rounded-2xl max-w-[40vw]">
      {icons}
    </div>
  );
}
