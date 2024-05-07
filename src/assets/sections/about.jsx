import React from "react";
import me from "../images/me_circle.png";

const About = () => {
  return (
    <div className="mx-auto text-center text-md tracking-wide">
      <h1>Hi, this is Carina.</h1>
      <img src={me} className="h-32 clip-circle glass float-right m-2 hover:scale-125"></img>
      <div className="">
        <p>
          In 2022, after another <span className="keywords">temporary job</span>, I decided that it was time for a <span className="keywords">change</span>
          .
        </p>
        <p>
          While traveling, I met a girl who worked as an <span className="keywords">online marketing
          manager</span>, and it piqued my interest. I began a <span className="keywords">correspondence course</span> to
          become a certified online marketing manager, which also included some
          <span className="keywords"> HTML5 and CSS3 modules</span>. I found myself fascinated by what I could
          create with these languages.
        </p>
        <p>
          Then, I received an offer for a course as an <span className="keywords">Online Shop Developer </span> 
          with <span className="keywords">Python </span> Basics. This marked my introduction to programming, and I
          discovered a <span className="keywords">passion for web development</span>.
        </p>
        <p>
          In my free time, I delved into <span className="keywords">Django</span>, and later, <span className="keywords">JavaScript</span>, <span className="keywords">React</span>,
          and <span className="keywords">Vue</span>. Currently, I favor React for its simple syntax and vibrant
          community.
          </p>
          <div className="p-10">
            Today, I proudly present
            <p className="">
              my <span className="keywords">first completed project in React</span>: <br />My Portfolio Website.
            </p>
          </div>
        </div>
    </div>
  );
};

export default About;
