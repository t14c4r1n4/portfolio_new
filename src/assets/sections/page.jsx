import React from "react"
import nav_items from "../constants/nav_items"

const Page = () => {
  return (
    <div className="h-full">
      <hr className="progress h-px border-t-0 object-bottom bg-transparent bg-gradient-to-r from-transparent via-fuchsia-600 via-pink-600 to-transparent opacity-25 dark:opacity-100" />
      {nav_items.map(page => (
        <section
          key={page.id}
          id={page.id}
          className="max-w-[90vw] min-h-[85vh] mx-[5vw] pt-[15vh]"
        ><h2 className="text-4xl text-center font-Orbitron pb-10">{page.name}</h2>
          {page.section}
          <hr className="mt-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
        </section>
      ))}
    </div>
  )
}

export default Page;
