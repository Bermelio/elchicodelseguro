import { useEffect, useRef } from "react";

function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const currentSlide = useRef(0);
  const isAnimating = useRef(false);

  const slides: string[] = [
    "/assests/images/slide1.webp",
    "/assests/images/slide2.webp",
    "/assests/images/slide3.webp",
    "/assests/images/slide4.webp",
    "/assests/images/slide5.webp",
  ];

  const numSlides = slides.length;

  useEffect(() => {
    const slideElements = slidesRef.current.filter(
      (slide): slide is HTMLDivElement => slide !== null
    );

    if (slideElements.length === 0) return;

    const goToSlide = (nextIndex: number) => {
      if (isAnimating.current) return;
      isAnimating.current = true;

      const current = currentSlide.current;
      
      slideElements.forEach((slide, i) => {
        if (i === current) {
          slide.style.transition = 'transform 0.8s ease-in-out';
          slide.style.transform = 'translateX(-100%)';
        } else if (i === nextIndex) {
          slide.style.transform = 'translateX(100%)';
          slide.style.transition = 'none';
          slide.offsetHeight;
          
          slide.style.transition = 'transform 0.8s ease-in-out';
          slide.style.transform = 'translateX(0)';
        } else {
          slide.style.transition = 'none';
          slide.style.transform = 'translateX(100%)';
        }
      });

      setTimeout(() => {
        currentSlide.current = nextIndex;
        isAnimating.current = false;
      }, 800);
    };

    slideElements.forEach((slide, i) => {
      if (i === 0) {
        slide.style.transform = 'translateX(0)';
      } else {
        slide.style.transform = 'translateX(100%)';
      }
    });

    const interval = setInterval(() => {
      const nextSlide = (currentSlide.current + 1) % numSlides;
      goToSlide(nextSlide);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [numSlides]);

  const handleEmpresa = () => {
    window.location.href = "https://online.fedpat.com.ar/cotizar_seguro_online/";
  };

  return (
    <section className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-blanco-custom px-4 py-16 md:px-12" id="about-us">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10">
        
        {/* CARRUSEL */}
        <div 
          ref={containerRef}
          className="w-full md:w-2/3 h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg bg-gray-200"
        >
          <div className="relative w-full h-full">
            {slides.map((slide: string, index: number) => (
              <div
                key={index}
                ref={(el) => {
                  slidesRef.current[index] = el;
                }}
                className="absolute top-0 left-0 w-full h-full"
                style={{ transform: 'translateX(100%)' }}
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

        {/* CONTENIDO */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-5">
          <p className="text-sm tracking-[0.25em] uppercase text-gray-500">
            Sobre nosotros
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Tu seguridad, <span className="text-blue-600">nuestra prioridad</span>.
          </h2>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Somos un equipo especializado en seguros que te habla sin vueltas,
            con contratos claros y acompañamiento real cuando más lo necesitás.
            Nos enfocamos en que entiendas cada detalle, para que puedas tomar
            decisiones con tranquilidad y confianza.
          </p>

          <p className="text-sm md:text-base text-gray-500">
            Trabajamos con compañías líderes, pero nuestro compromiso es con vos:
            escucharte, asesorarte y armar una cobertura que se adapte a tu vida,
            no al revés.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
            <button 
              onClick={handleEmpresa}
              className="px-6 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-300"
            >
              Conocé más sobre la empresa
            </button>
          </div>

          <div className="pt-4 flex flex-wrap gap-4 text-xs md:text-sm text-gray-500">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              Años de experiencia
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              Atención personalizada
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              Respuestas claras y rápidas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;