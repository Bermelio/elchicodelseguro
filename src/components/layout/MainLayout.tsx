function MainLayout() {

  const handleClick = () => {
    window.location.href = ("https://online.fedpat.com.ar/cotizar_seguro_online/");
  };

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <img 
          src="/assests/images/main.webp" 
          alt="main page home"
          className="w-full h-full object-cover object-[10%_70%]"
          id="home"
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex flex-col justify-start pt-50 items-start px-6 md:px-16">
          <div className="max-w-xl text-white">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">
              Tu tranquilidad, nuestro compromiso.
            </h2>

            <p className="text-lg md:text-2xl mt-6 drop-shadow-md">
              Te explicamos todo fácil, te cuidamos siempre.
            </p>

            <div className="mt-8">
              <button onClick={handleClick} className="bg-azul-oscuro-custom hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-transform duration-150 hover:scale-105">
                Conocé nuestros seguros
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
