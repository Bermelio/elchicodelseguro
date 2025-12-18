  import { useEffect, useRef } from "react";
  import { gsap } from "gsap";
  import { SplitText } from "gsap/SplitText";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { useGSAP } from "@gsap/react";

  gsap.registerPlugin(SplitText, ScrollTrigger);

  function About() {
    const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
    const currentSlide = useRef(0);
    const isAnimating = useRef(false);

    const slides = [
      "/assests/images/slide2.webp",
      "/assests/images/slide3.webp",
      "/assests/images/slide4.webp",
      "/assests/images/slide5.webp",
      "/assests/images/slide6.webp",
    ];

    const handleEmpresa = () => {
      window.location.href =
        "https://online.fedpat.com.ar/cotizar_seguro_online/";
    };

    useEffect(() => {
      const slidesEl = slidesRef.current.filter(Boolean) as HTMLDivElement[];
      if (!slidesEl.length) return;

      gsap.set(slidesEl, { xPercent: 100 });
      gsap.set(slidesEl[0], { xPercent: 0 });

      const interval = setInterval(() => {
        if (isAnimating.current) return;
        isAnimating.current = true;

        const current = currentSlide.current;
        const next = (current + 1) % slidesEl.length;

        gsap.to(slidesEl[current], {
          xPercent: -100,
          duration: 0.8,
          ease: "power2.inOut",
        });

        gsap.fromTo(
          slidesEl[next],
          { xPercent: 100 },
          {
            xPercent: 0,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: () => {
              currentSlide.current = next;
              isAnimating.current = false;
            },
          }
        );
      }, 5000);

      return () => clearInterval(interval);
    }, []);

    useGSAP(() => {
      const split = new SplitText(".about-text", {
        type: "words,chars",
      });

      gsap.from(split.chars, {
        x: 60,
        autoAlpha: 0,
        stagger: 0.03,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
          markers: false
        },
      });

      return () => split.revert();
    });

    return (
      <section
        id="about-us"
        className="overflow-x-hidden bg-blanco-custom min-h-screen flex items-center p-10 md:px-12"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-2/3 h-[500px] md:h-[600px] overflow-hidden rounded-xl shadow-xl">
            <div className="relative w-full h-full">
              {slides.map((src, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    slidesRef.current[i] = el;
                  }}
                  className="absolute inset-0"
                >
                  <img
                    src={src}
                    alt={`Slide ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
            <p className="text-sm tracking-[0.25em] uppercase text-gray-500">
              Sobre nosotros
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
              Tu seguridad,{" "}
              <span className="text-blue-600">nuestra prioridad</span>.
            </h2>

            <p className="about-text text-base md:text-lg text-gray-600 leading-relaxed">
              El chico del seguro es{" "}
              <strong>agente oficial de la Federación Patronal Seguros</strong>,
              la compañía N°1 de Latinoamérica en solidez, respaldo y calidad de
              atención. Mi compromiso es brindarte asesoramiento claro, humano y
              sin letra chica.
            </p>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Te acompañamos para que entiendas cada cobertura y elijas exactamente
              lo que necesitás —ni más, ni menos—, con precios reales y soporte
              cuando de verdad importa.
            </p>
            <div className="flex flex-wrap gap-4 text-xs md:text-sm text-gray-500 justify-center md:justify-start">
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
                Respuesta rápida y clara
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
              <button
                onClick={handleEmpresa}
                className="px-6 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-300"
              >
                Cotizar ahora
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  export default About;
