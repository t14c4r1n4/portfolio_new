import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import careerEvents from '../constants/experience';

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const list = careerEvents.map((e, index) => (
    <li key={index} className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
      onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
      <div className="md:flex flex-start">
        <div className="bg-zinc-900 w-12 h-12 flex items-center justify-center rounded-full -ml-6">
          <img
            className="hover:scale-150 w-8 h-8 rounded-md"
            src={e.icon}
            alt={e.company}
          />
        </div>
      </div>
      <div className="block p-6 rounded-lg shadow-lg glass max-w-md ml-6 mb-10">
        <div className="flex justify-between mb-4">
          <button className="font-medium text-cyan-600 hover:text-cyan-700 focus:text-cyan-800 duration-300 transition ease-in-out text-sm">
            {e.company}, {e.location}
          </button>
          <button className="font-medium text-cyan-600 hover:text-cyan-700 focus:text-cyan-800 duration-300 transition ease-in-out text-sm">
            {e.date}
          </button>
        </div>
        {/* Accordion component */}
        <h4 className="accordion">{e.title}</h4>
        {/* PFEIL RECHTS ANORDNEN!! */}
        <button type="button" className="right-0">
          {activeIndex === index ? <ChevronUpIcon className="w-6 h-6" /> : <ChevronDownIcon className="w-6 h-6" />}
        </button>
        {activeIndex === index && (
          <ul key={`content-${index}`} className="ml-5 list-disk">
            {e.description.map((task, taskIndex) => (
              <li key={`task-${index}-${taskIndex}`} className="list-disk" >{task}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  ));

  return (
    <ol className="border-l-2 border-cyan-600 m-10">{list}</ol>
  );
};

export default Timeline;
