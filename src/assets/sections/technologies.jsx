import {technologies, iconProps} from "../constants/tech";

export default function Tech() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 glass">
        {technologies.map((icon, index) => (
          <article
            className="p-2 my-auto mb-2 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer ring-2 ring-cyan-900"
            key={index}
          >
            <div className="relative rounded-2xl">{icon.icon} {...iconProps}</div>
          </article>
        ))}
      </div>
    </>
  );
}
