import LogoSeguro from '/assests/images/logo-seguro.svg';

function Header() {
  return (
    <>
      <header className="bg-blanco-custom flex items-center justify-between px-4 py-2 shadow-md">
        <div className="flex items-center gap-2">
          <img
            src={LogoSeguro}
            alt="Logo seguro"
            className="position absolute w-[250px] h-auto hover:scale-105 transition-transform duration-300"
          />
        </div>

        <ul className="flex p-4 m-4 list-none gap-12 text-lg font-medium text-gris-oscuro-custom">
          <li className='hover:text-blue-500'> 
            <a href="">Home</a>
          </li>
          <li className='hover:text-blue-500'>
            <a href="">Contacto</a>
          </li>
          <li className='hover:text-blue-500'>
            <a href="">Sobre nosotros</a>
          </li>
          <li className='hover:text-blue-500'>
            <a href="">Testimonios</a>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
