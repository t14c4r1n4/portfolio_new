import {
    HomeIcon,
    UserIcon,
    CodeBracketIcon,
    LanguageIcon,
    AcademicCapIcon,
    ChatBubbleLeftRightIcon,
  } from "@heroicons/react/24/outline";
  
  const nav_pages = [
    {
      alt: 'Home',
      href: '#',
      icon: <HomeIcon width={40}/>
    },
    {
      alt: 'About me',
      href: '#About',
      icon: <UserIcon width={40}/>
    },
    {
      alt: 'My skills',
      href: '#Skills',
      icon: <CodeBracketIcon width={40}/>
    },
    {
      alt: 'Tools',
      href: '#',
      icon: <LanguageIcon width={40}/>
    },
    {
      alt: 'My career path',
      href: '#Timeline',
      icon: <AcademicCapIcon width={40}/>
    },
    {
      alt: 'How to get in contact',
      href: '#Contact',
      icon: <ChatBubbleLeftRightIcon width={40}/>
    }
  ];
  
  export default nav_pages;
  