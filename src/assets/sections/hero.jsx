import me from '../images/me_circle.png'

const Hero = () => {
  return (
    <>
      <div className="flex">
        <div className="text-center">
          <h3>Hi, i'm Carina.</h3>
          <p className="py-4">I'm a web developer with a passion for the latest web trends and technologies. I love learning new techniques and languages to create beautiful, functional websites. </p>
          <p>Explore my work and let's shape the future of the web together. If you're interested in collaborating or simply want to discuss the latest developments in the web, I'm here for you. </p>
          <p>Let's work together in shaping the future of the internet!</p><br />
          <p className="font-extrabold from-neutral-600 to-lime-600">Thank you for visiting, and enjoy exploring my projects.
          </p>
        </div>
        <aside><img src={me} className="clip-circle glass float-right"></img></aside>
      </div>

    </>
  );
};

export default Hero;
