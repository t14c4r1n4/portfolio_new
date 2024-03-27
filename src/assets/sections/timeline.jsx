import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import careerEvents from '../constants/experience';

const Accordion_Button = () => {
  <button type="button" className="ml-auto">
    {activeIndex === index ? <ChevronUpIcon className="w-6 h-6" /> : <ChevronDownIcon className="w-6 h-6" />}
  </button>
}

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const list = careerEvents.map((e, index) => (
    <li key={index} className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
      onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
      <div className="md:flex flex-start mb-3">
        <div className="bg-zinc-900 w-[60] h-12 flex items-center justify-center rounded-full -ml-6">
          <img
            className="hover:scale-150 w-8 h-8 rounded-md ml-2"
            src={e.icon}
            alt={e.company}
          />
          <span className="bg-zinc-900 rounded-full mx-8">{e.date}</span>
        </div>

      </div>
      <div className="block p-6 rounded-lg shadow-lg glass max-w-md ml-6 mb-10">
        <div className="flex justify-between mb-4">
          <button className="font-medium text-cyan-600 hover:text-cyan-700 focus:text-cyan-800 duration-300 transition ease-in-out text-sm flex">
            {e.title} 
            <button>{Accordion_Button}</button>
          </button>
        </div>
        {activeIndex === index && (
          <ul key={`content-${index}`} className="ml-5">
            {e.description.map((task, taskIndex) => (
              <li key={`task-${index}-${taskIndex}`} className="" >{task}</li>
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
