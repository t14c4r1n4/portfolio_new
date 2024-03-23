import {technologies, iconProps} from "../constants/tech_v1";

export default function Tech() {
  const techImages = technologies.map((svg, index) => (
    <svg key={index} alt={svg.name} {...iconProps}>
      <path d={svg.path} />
    </svg>
  ))
  return (
      <div className="flex flex-wrap justify-center gap-2 glass">
        {techImages.map((techImage, index) => (
          <article
            className="p-2 my-auto mb-2 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer ring-2 ring-cyan-900"
            key={index}
          >
            <div className="relative rounded-2xl">{techImage}</div>
          </article>
        ))}
      </div>
  );
}
