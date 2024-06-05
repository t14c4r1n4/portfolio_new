import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import careerEvents from '../constants/experience';

const Accordion_Button = ({ active }) => (
  <button type="button" className="ml-auto text-purple-500">
    {active ? <ChevronUpIcon className="w-6 h-6" /> : <ChevronDownIcon className="w-6 h-6" />}
  </button>
);

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const list = careerEvents.map((e, index) => (
    <li key={index} className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
      onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
      <div className="flex flex-start mb-3">
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
          <div className="col-span-3">{e.title}</div>
          <Accordion_Button active={activeIndex === index} />
        </div>
        {activeIndex === index && (
          <ul key={`content-${index}`} className="ml-5 pb-5">
            {e.description.map((task, taskIndex) => (
              <li key={`task-${index}-${taskIndex}`} className="list-disc" >{task}</li>
            ))}
          </ul>
        )}
        <span className="text-sm text-purple-500">{e.company}</span>
      </div>

    </li>
  ));

  return (

      <ol className="border-l-2 border-cyan-600 m-6">{list}</ol>

  );
};

export default Timeline;