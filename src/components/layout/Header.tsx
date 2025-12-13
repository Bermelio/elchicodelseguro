import LogoSeguro from '/assests/images/logo-seguro.svg';
import Federacion from '/assests/images/federacion.svg'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';
import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollToPlugin);

function Header() {

  useEffect(() => {
  const originalTitle = document.title;
  let intervalId: number | undefined;

  const messages = ["Eu volvé...", "El mejor seguro!"];
  let index = 0;

  const handleVisibility = () => {
    if (document.hidden) {
      intervalId = window.setInterval(() => {
        document.title = messages[index];
        index = (index + 1) % messages.length;
      }, 3000);
    } else {
      clearInterval(intervalId);
      document.title = originalTitle;
      index = 0;
    }
  };

  document.addEventListener("visibilitychange", handleVisibility);

  return () => {
    document.removeEventListener("visibilitychange", handleVisibility);
    clearInterval(intervalId);
  };
  }, []);


  useGSAP(() => {
  gsap.set("#federacion", {
    y: -200,
    opacity: 0
  });
  gsap.to("#federacion", {
    scrollTrigger: {
      trigger: "#home",
      start: "bottom center",
      end: "center center",
      scrub: 1,
      // markers: true
      onEnter: () => {
        gsap.to("#federacion", {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power1.out"
        });
      },
      onLeaveBack: () => {
        gsap.to("#federacion", {
          y: -200,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in"
        });
      }
    }
  });
  });

  const [open, setOpen] = useState(false);

  const scrollToCenter = (
    selector: string,
    duration: number = 1.5,
    ease: string = "power1.inOut"
  ) => {
    const element = document.querySelector(selector);
    if (!element) return;

    const elementRect = element.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.pageYOffset;
    const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);

    gsap.to(window, {
      duration,
      scrollTo: middle,
      ease
    });
  };
  
    const handleHome = (e: any) => {
      e.preventDefault();
      scrollToCenter("#home", 1.5, "power2.inOut");
      setOpen(false);
    };
  
    const handleMoreInfo = (e: any) => {
      e.preventDefault();
      scrollToCenter("#MoreInfo", 1.5, "power1.Out");
    };
  
  const handleContact = (e: any) => {
    e.preventDefault();
    scrollToCenter("#contact", 1.5, "power3.inOut");
  };

  const handleAboutUs = (e: any) => {
    e.preventDefault();
    scrollToCenter("#about-us", 1.5, "power1.inOut");
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-blanco-custom shadow-md z-50 rounded-b-lg">
      <div className="flex flex-row items-center justify-between px-4 md:px-8">
        <a href="#home" onClick={handleHome}>
          <div className="flex items-center ms:gap-2 md:gap-20 cursor-default">
          <img
            src={LogoSeguro}
            alt="Logo seguro"
            className="w-[150px] md:scale-130 sm:scale-0 sm:w-[150px] h-auto transition-transform duration-300 md:hover:scale-155"
            
            />
          <img 
            src={Federacion} 
            alt="Logo federacion patronal"
            id='federacion'
            className="w-[150px] lg:w-[250px] h-auto transition-transform duration-300 md:hover:scale-125 lg:hover:scale-130"
            />
          </div>
        </a>

        <button
          className="md:hidden text-3xl text-gris-oscuro-custom"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <ul className="hidden md:flex list-none gap-10 text-lg font-medium text-gris-oscuro-custom">
          <li className="hover:text-blue-500 px-2 p-2 cursor-pointer border-b-2 border-transparent hover:border-blue-500 transition-colors duration-300">
            <a href="#home" onClick={handleMoreInfo}>Seguros</a>
          </li>
          <li className="hover:text-blue-500 px-2 p-2 cursor-pointer border-b-2 border-transparent hover:border-blue-500 transition-colors duration-300">
            <a href="#about-us" onClick={handleAboutUs}>Sobre mí</a>
          </li>
          <li className="hover:text-blue-500 px-2 p-2 cursor-pointer border-b-2 border-transparent hover:border-blue-500 transition-colors duration-300">
            <a href="#contact" onClick={handleContact}>Contacto</a>
          </li>
        </ul>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 py-4 bg-blanco-custom text-gris-oscuro-custom text-lg font-medium border-t border-gray-200">
          <li>
            <a
              href="#MoreInfo"
              onClick={(e) => { handleMoreInfo(e); setOpen(false); }}
              className="block py-2"
            >
              Seguros
            </a>
          </li>
          <li>
            <a
              href="#about-us"
              onClick={(e) => { handleAboutUs(e); setOpen(false); }}
              className="block py-2"
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => { handleContact(e); setOpen(false); }}
              className="block py-2"
            >
              Contacto
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;
