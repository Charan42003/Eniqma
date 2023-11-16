import React, { useState } from 'react'
import logo from '../../../assets/logo1.png'
function Nav() {
    const [close, setClose] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-[2px] my-1 rounded-full bg-white transition ease transform duration-300`;
    function menuClicked() {
        setClose( !close )
        setClose( !close )
    }

  return (
    <>
      <nav className="flex justify-between p-5 px-10 nav-bar">
        <span className="w-[130px] scale-[1.4] logo">
            <a href="#">
                <img src={ logo } className='' />
            </a>
        </span>
        <div className={`flex justify-center items-center gap-10 nav-element ${close ? 'hide' : 'show'}`}>
            <a href="#" className="text-white font-[500] tracking-widest text-[1rem] hover:text-primary" onClick={ menuClicked }>Home</a>
            <a href="#" className="text-white font-[500] tracking-widest text-[1rem] hover:text-primary" onClick={ menuClicked }>About Us</a>
            <a href="#" className="text-white font-[500] tracking-widest text-[1rem] hover:text-primary" onClick={ menuClicked }>Prizes</a>
            <a href="#tracks" className="text-white font-[500] tracking-widest text-[1rem] hover:text-primary" onClick={ menuClicked }>Tracks</a>
            <a href="#" className="text-white font-[500] tracking-widest text-[1rem] hover:text-primary" onClick={ menuClicked }>FAQ</a>
            <a href="#" className="text-white font-[500] tracking-widest text-[1rem] hover:text-primary register-btn" onClick={ menuClicked }>Register Now</a>
        </div>
        <button className="h-12 w-12 rounded justify-center items-center hidden menu-btn group menu-btn" 
            onClick={() =>
                {
                    setIsOpen(!isOpen)
                    setClose( !close )
                }
            }
    >
        <div className="flex flex-col h-12 w-12">
            <div className={`${genericHamburgerLine}   w-7 
                            ${isOpen? "rotate-45 translate-y-[10px] opacity-50 group-hover:opacity-100" : "opacity-50 group-hover:opacity-100"}
                            `}
            />
            <div className={`${genericHamburgerLine}  w-5 ml-2
                            ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}
                            `} />
            <div className={`${genericHamburgerLine}  w-7
                            ${isOpen? "-rotate-45 -translate-y-[10px] opacity-50 group-hover:opacity-100"
                            : "opacity-50 group-hover:opacity-100"}
                            `}
            />
        </div>
    </button>
      </nav>
    </>
  )
}

export default Nav