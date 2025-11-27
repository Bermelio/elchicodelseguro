function About() {
  return (
    <>
      <section className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-blanco-custom px-4 py-16 md:px-12">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10">
          
          <div className="w-full md:w-2/3 flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-xl shadow-black/10 border border-gray-100">
              <img
                src={"/assests/images/about.webp"}
                alt="Equipo de trabajo de la empresa"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                id="about-us"
              />
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
              <button className="px-6 py-3 rounded-full border border-primario-custom text-primario-custom font-semibold hover:bg-primario-custom/5 transition-all">
                Conocer más sobre la empresa
              </button>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 text-xs md:text-sm text-gris-medio-custom/90">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primario-custom" />+10 años de experiencia
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
