import LogoSeguro from '/assests/images/logo-seguro.svg';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);


function Header() {

  const handleAboutUs = (e:any) => {
    e.preventDefault();

    gsap.to(window, {
      duration: 1.5,
      scrollTo: {
        y:"#about-us",
        offsetY: 150
      },
      ease: "power1.inOut"
    });
  };

  const handleHome = (e:any) => {
    e.preventDefault();

    gsap.to(window, {
      duration: 1.5,
      scrollTo: "#home",
      ease: "power2.inOut"
    });
  };

  const handleContact = (e:any) => {
    e.preventDefault();

    gsap.to(window, {
      duration: 1.5,
      scrollTo: "#contact",
      ease: "power3.inOut"
    });
  }

  return (
    <header className="pl-17 fixed top-0 left-0 w-full bg-blanco-custom flex items-center justify-between px-4 py-2 shadow-md z-50 rounded-b-lg">
      <div className="flex items-center gap-2">
        <img
          src={LogoSeguro}
          alt="Logo seguro"
          className="w-[150px] h-auto hover:scale-105 scale-150 transition-transform duration-300 mr-4"
        />
      </div>

      <ul className="flex p-4 m-4 list-none gap-12 text-lg font-medium text-gris-oscuro-custom">
        <li className="hover:text-blue-500">
          <a href="#home" onClick={handleHome}>Home</a>
        </li>
        <li className="hover:text-blue-500">
          <a href="#contact" onClick={handleContact}>Contacto</a>
        </li>
        <li className="hover:text-blue-500">
          <a href="#about-us" onClick={handleAboutUs}>Sobre nosotros</a>
        </li>
        <li className="hover:text-blue-500">
          <a href="">Testimonios</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;

