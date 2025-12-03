import { useState, useEffect } from "react";
  
function About() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/assests/images/slide1.webp",
    "/assests/images/slide2.webp",
    "/assests/images/slide3.webp",
    "/assests/images/slide4.webp",
    "/assests/images/slide5.webp",
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  const handleEmpresa = () => {
    window.location.href = ("https://online.fedpat.com.ar/cotizar_seguro_online/")
  }

  return (
    <>
      <section className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-blanco-custom px-4 py-16 md:px-12" id="about-us">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10">
          
          <div className="w-full md:w-2/3 h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg">
            
            <div 
              className="flex h-full transition-transform duration-1000"
              style={{ 
              transform: `translateX(-${currentSlide * 100}%)`,
              transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
              }}
              >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="w-full h-full shrink-0"
                >
                  <img
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left space-y-5">
            <p className="text-sm tracking-[0.25em] uppercase text-gris-medio-custom">
              Sobre nosotros
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gris-oscuro-custom leading-tight">
              Tu seguridad, <span className="text-primario-custom">nuestra prioridad</span>.
            </h2>

            <p className="text-base md:text-lg text-gris-medio-custom leading-relaxed">
              Somos un equipo especializado en seguros que te habla sin vueltas,
              con contratos claros y acompañamiento real cuando más lo necesitás.
              Nos enfocamos en que entiendas cada detalle, para que puedas tomar
              decisiones con tranquilidad y confianza.
            </p>

            <p className="text-sm md:text-base text-gris-medio-custom/90">
              Trabajamos con compañías líderes, pero nuestro compromiso es con vos:
              escucharte, asesorarte y armar una cobertura que se adapte a tu vida,
              no al revés.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
              <button onClick={handleEmpresa}
              className="px-6 py-3 rounded-full border border-primario-custom text-primario-custom font-semibold hover:bg-primario-custom/5 hover:scale-105 transition-transform duration-300">
                Conocé más sobre la empresa
              </button>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 text-xs md:text-sm text-gris-medio-custom/90">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primario-custom" />años de experiencia
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primario-custom" />Atención personalizada
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primario-custom" />Respuestas claras y rápidas
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;