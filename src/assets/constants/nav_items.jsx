import {
    HomeIcon,
    UserIcon,
    CodeBracketIcon,
    BriefcaseIcon,
    AcademicCapIcon,
    ChatBubbleLeftRightIcon
  } from "@heroicons/react/24/outline";
  
import Hero from '../sections/hero';
import About from '../sections/about';
import Tech from '../sections/technologies';
import XpTimeline from '../sections/xptimeline';
import EduTimeline from '../sections/edutimeline';
import Contact from '../sections/contactnew';

const iconProps = {
  className:
    "size-8"
};

  const nav_items = [
    {
      id: 'home',
      alt: 'Home',
      name: 'WHOAMI',
      href: '/',
      icon: <HomeIcon {...iconProps}/>,
      section: <Hero />
    },
    {
      id: 'about',
      alt: 'About me',
      name: 'About me',
      href: '/#about',
      icon: <UserIcon {...iconProps}/>,
      section: <About />
    },
    {
      id: 'skills',
      alt: 'My skills',
      name: 'Skills',
      href: '/#skills',
      icon: <CodeBracketIcon {...iconProps}/>,
      section: <Tech />
    },
    {
      id: 'education',
      alt: 'My education path',
      name: 'Education',
      href: '/#edutimeline',
      icon: <AcademicCapIcon {...iconProps}/>,
      section: <EduTimeline />

    },
    {
      id: 'timeline',
      alt: 'My career path',
      name: 'Work XP',
      href: '/#xptimeline',
      icon: <BriefcaseIcon {...iconProps}/>,
      section: <XpTimeline />
    },
        {
      id: 'contact',
      alt: 'How to get in contact',
      name: 'Contact',
      href: '/#contact',
      icon: <ChatBubbleLeftRightIcon {...iconProps}/>,
      section: <Contact />
    }
  ];
  
  export default nav_items;
  