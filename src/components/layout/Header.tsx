import LogoSeguro from '/assests/images/logo-seguro.svg';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);


function Header() {

  const scrollToCenter = (selector: string, duration: number = 1.5, ease: string = "power1.inOut") => {
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
  };

  const handleContact = (e: any) => {
    e.preventDefault();
    scrollToCenter("#contact", 1.5, "power3.inOut");
  };

  const handleAboutUs = (e: any) => {
    e.preventDefault();
    scrollToCenter("#about-us", 1.5, "power1.inOut");
  };

  const handleTestimonials = (e: any) => {
    e.preventDefault();
    scrollToCenter("#testimonials", 1.5, "power1.inOut");
  };

  return (
    <header className="pl-17 fixed top-0 left-0 w-full bg-blanco-custom flex items-center justify-between px-4 py-2 shadow-md z-50 rounded-b-lg">
      <div className="flex items-center gap-2">
        <img
          src={LogoSeguro}
          alt="Logo seguro"
          className="w-[150px] h-auto hover:scale-105 scale-150 transition-transform duration-300 mr-4"
        />
      </div>

      <ul className="flex list-none gap-12 text-lg font-medium text-gris-oscuro-custom">
        <li className="hover:text-blue-500 px-3 py-2 inline-flex items-center">
          <a href="#home" onClick={handleHome}>Home</a>
        </li>
        <li className="hover:text-blue-500 px-3 py-2 inline-flex items-center">
          <a href="#about-us" onClick={handleAboutUs}>Sobre nosotros</a>
        </li>
        <li className="hover:text-blue-500 px-3 py-2 inline-flex items-center">
          <a href="#contact" onClick={handleContact}>Contacto</a>
        </li>
        <li className="hover:text-blue-500 px-3 py-2 inline-flex items-center">
          <a href="#testimonials" onClick={handleTestimonials}>Testimonios</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;