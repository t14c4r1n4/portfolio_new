import {technologies, iconProps} from "../constants/tech_v1";

export default function Tech() {
  const techImages = technologies.map((svg, index) => (
    <svg key={index} alt={svg.name} {...iconProps}>
      <path d={svg.path} />
    </svg>
  ))
  return (
      <div className="flex flex-wrap justify-center gap-2 glass p-5">
        {techImages.map((techImage, index) => (
          <article
            className="p-2 my-auto mb-2 transition hover:scale-125 duration-300 group transform rounded-2xl cursor-pointer hex"
            key={index}
          >
          {techImage}
          </article>
        ))}
      </div>
  );
}
