import React from "react";
import nav_items from "../constants/nav_items";

const Page = () => {
  return (
    <div className="h-full p-8 mb-22 mt-12">
      <hr className="progress h-px border-t-0 object-bottom bg-transparent bg-gradient-to-r from-transparent via-fuchsia-600 to-transparent opacity-25 dark:opacity-100" />
      {nav_items.map((page) => (
        <div
          key={page.id}
          className="relative h-full flex items-center justify-center"
        >
          <div className="max-w-[90vw] md:max-w-[70vw] flex justify-center w-full space-y-8 p-10 mb-10 bg-zinc-800 glass rounded-2xl shadow-lg">
            <section id={page.id} className="max-w-[90vw] overflow-y: auto;">
              <h2 className="text-4xl text-center font-Orbitron mb-[3vh]">
                {page.name}
              </h2>
              {page.section}
              <hr className="inset-x-0 bottom-0 mt-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
            </section>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
