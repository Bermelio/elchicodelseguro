import { useState } from "react";


function MoreInfo() {
  const [activeTab, setActiveTab] = useState<'hogar' | 'auto' | 'accidentes' | 'micro'>('hogar');

  const planes = {
    hogar: {
      title: "Seguro de Hogar",
      desc: "Protegé tu casa y tus pertenencias con la cobertura más completa del mercado.",
      coverages: [
        "Incendio del edificio y contenido",
        "Robo y daños por intento de robo",
        "Electrodomésticos por fallas eléctricas",
        "Rotura de cristales",
        "Responsabilidad civil familiar",
      ],
    },
    auto: {
      title: "Seguro Automotor",
      desc: "Un seguro pensado para cada conductor.",
      coverages: [
        "Responsabilidad civil obligatoria",
        "Robo y hurto",
        "Destrucción total",
        "Daños parciales",
        "Asistencia al vehículo y al conductor 24/7",
      ],
    },
    accidentes: {
      title: "Accidentes Personales",
      desc: "Protección económica inmediata ante cualquier accidente, estés donde estés.",
      coverages: [
        "Muerte accidental",
        "Incapacidad total o parcial",
        "Gastos médicos por accidente",
        "Cobertura durante actividades laborales y extralaborales",
      ],
    },
    micro: {
      title: "Microseguros",
      desc: "Un plan simple, económico y accesible para quienes necesitan proteger lo esencial sin complicaciones.",
      coverages: [
        "Cobertura básica por fallecimiento",
        "Asistencia médica",
        "Protección ante accidentes menores",
        "Planes pensados para trabajadores independientes",
      ],
    },
  };

  const planesData = planes[activeTab];

  return (
    <section
      className="MoreInfo w-full flex flex-col items-center text-neutral-900 relative min-h-screen overflow-hidden bg-blanco-custom py-20"
    id="MoreInfo"
    >
      <img
        src="/assests/images/slide1.webp"
        alt="more info background"
        className="w-full h-full absolute inset-0 object-cover brightness-50"
      />

      <div className="relative z-10 text-center max-w-2xl p-6">
        <h2 className="text-4xl font-bold text-white mb-4 mt-20 drop-shadow-xl">
          Tu agente de confianza en Federación Patronal
        </h2>
        <p className="text-white text-lg opacity-90">
          Trabajamos con la aseguradora número uno de LATAM, brindando la mejor
          cobertura para vos y tu familia.
        </p>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full px-4">

        <div className="flex flex-wrap gap-3 justify-center mb-8 ">
          {Object.keys(planes).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as 'hogar' | 'auto' | 'accidentes' | 'micro')}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all
                ${
                  activeTab === key
                    ? "bg-azul-oscuro-custom text-white border-blue-900 shadow-lg scale-105"
                    : "bg-blanco-custom text-gray-800 hover:bg-gris-custom backdrop-blur-md border-amber-50"
                }
              `}
            >
              {planes[key as keyof typeof planes].title}
            </button>
          ))}
        </div>

          <div
            key={activeTab}
            className="
              bg-white/10 backdrop-blur-[2px] shadow-xl p-6 rounded-xl
              h-[300px] overflow-hidden
              md:h-auto md:overflow-visible
              transition-all duration-300 ease-in-out
            "
          >
          <h3 className="text-2xl font-bold text-blanco-custom mb-3">{planesData.title}</h3>
          <p className="text-blanco-custom mb-4">{planesData.desc}</p>

          <ul className="list-disc ml-5 text-blanco-custom space-y-1">
            {planesData.coverages.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MoreInfo;
