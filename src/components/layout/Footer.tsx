
function Footer() {
  return (
    <footer className="w-full bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 text-white border-t border-gray-700 py-6 flex flex-col md:flex-row items-center justify-between px-8">

      <div className="text-xs text-gray-300">
        &copy; {new Date().getFullYear()} El Chico del Seguro. Todos los derechos reservados.
      </div>

      <ul className="flex items-center gap-6 mt-4 md:mt-0 text-xs">
        <li>
          <a
            href="https://github.com/bermelio" 
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-blue-400"
          >
          GitHub
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/facundo-nahuel-peralta/" 
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-blue-400"
          >
            LinkedIn
          </a>
        </li>

        <li>
          <a
            href="mailto:tuemail@gmail.com"
            className="transition-colors hover:text-blue-400"
          >
            Contacto
          </a>
        </li>

      </ul>
    </footer>
  );

}


export default Footer;