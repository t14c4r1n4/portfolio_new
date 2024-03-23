import languages from '../constants/lang';

export default function Lang() {
  const langImages = languages.map((lang) => (
    <a
      height={40}
      className="max-h-80 w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
      src={lang.icon}
      alt={lang.alt}
      key={lang.alt}
    />
  ));

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 mt-14">
        {langImages.map((langImage, index) => (
          <article
            className="p-2 mb-2  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
            key={index}
          >
            <div className="relative rounded-2xl">
              {langImage}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

