import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

function Main() {
  useGSAP(() => {
    let split = SplitText.create(".title", { type: "words,chars" });

    gsap.from(split.words, {
      y: '100%',
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut',
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".title",
        start: "center center", 
        end: "300% center",
        toggleActions: "restart none none play",
        markers: false,
      }
    });

    return () => {
      split.revert();
    };
  });

  const handleClick = () => {
    window.location.href = "https://online.fedpat.com.ar/cotizar_seguro_online/";
  };

  return (
    <div id="home" className="relative w-full h-screen overflow-hidden">
      <img 
        src="/assests/images/main.webp" 
        alt="main page home"
        className="w-full h-full object-cover object-[10%_70%]"
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 flex flex-col justify-start pt-50 items-start px-6 md:px-16">
        <div className="max-w-xl text-white">
          <div className="mainText">
            <h1 className="title text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg">
              Tu tranquilidad, nuestro compromiso.
            </h1>
            <p className="text-lg md:text-2xl mt-6 drop-shadow-md pb-8">
              Te explicamos todo fácil, te cuidamos siempre.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 mb-6 border border-white/20">
            <p className="text-xl md:text-3xl font-bold mb-3 text-yellow-300">
              Desde $15.000/mes
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Seguro Combinado Familiar completo
            </p>
            <div className="mt-3 space-y-1 text-sm md:text-base">
              <p className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Atención 100% personal, sin robots ni IA
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Operamos en todo el país
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Compañía N°1 de Argentina
              </p>
            </div>
          </div>

          <p className="text-base md:text-xl drop-shadow-md mb-6 leading-relaxed pt-4">
            Protegé tu casa, departamento y auto con la compañía más confiable. 
            <span className="font-semibold text-yellow-300"> +50.000 familias</span> ya confían en nosotros.
          </p>
          <div className="mt-8">
            <button onClick={handleClick} className="bg-azul-oscuro-custom hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-transform duration-150 hover:scale-105">
              Cotizar ahora
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Main;