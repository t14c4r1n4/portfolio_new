import React, { useState, useEffect } from 'react';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ToTopButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className={`fixed bottom-16 right-[1vw] z-50 p-3 shadow-lg hover:bg-purple-600 focus:outline-none transition-opacity duration-300 align-middle font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-3 px-6 rounded-lg bg-gradient-to-tr from-zinc-900 to-zinc-800 text-zinc-300 shadow-md shadow-purple-900/10 hover:shadow-lg hover:shadow-purple-600 hover:text-purple-600 active:opacity-[0.85] ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex items-center justify-center space-x-2">
                <MdKeyboardDoubleArrowUp className='w-6 h-6' />
                <span className='hidden md:block text-xs'>To Top</span>
            </div>
        </button>
    );
};

export default ToTopButton;
