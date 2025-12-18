import { useState } from "react";

type PlanKey =
  | "hogar"
  | "auto"
  | "accidentes"
  | "incendios"
  | "consorcio"
  | "comercio";

function MoreInfo() {
  const [activeTab, setActiveTab] = useState<PlanKey>("hogar");

  const planes: Record<PlanKey, any> = {
    hogar: {
      title: "Seguro de Hogar",
      desc: "Protegé tu casa y tus pertenencias con una cobertura integral pensada para tu tranquilidad.",
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
      desc: "Un seguro pensado para cada conductor, con respaldo y asistencia en todo momento.",
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
        "Cobertura laboral y extralaboral",
      ],
    },
    incendios: {
      title: "Seguro contra Incendios",
      desc: "Cobertura esencial para proteger tu propiedad ante incendios y daños asociados.",
      coverages: [
        "Incendio Edificio",
        "Incendio Contenido, incendio mercaderías",
        "Incendio instalaciones y Maquinarias",
        "Responsabilidad Civil linderos",
      ],
    },
    consorcio: {
      title: "Integral de Consorcio",
      desc: "Protección completa para edificios y consorcios, cuidando los bienes comunes.",
      coverages: [
        "Incendio del edificio",
        "Incendio Contenido",
        "Daños por agua e Inundación",
        "Daños y Roturas de Cristales (incluidas las inscripciones que contengan)",
        "Responsabilidad Civil Comprensiva"
      ],
    },
    comercio: {
      title: "Integral de Comercio",
      desc: "Un seguro diseñado para proteger tu negocio y permitirte trabajar con tranquilidad.",
      coverages: [
        "Incendio, explosión, derrumbe y fenómenos naturales.",
        "Daños al local, instalaciones, carteles y cristales.",
        "Gastos por limpieza, remoción de escombros y costos fijos.",
        "Daños a equipos tecnológicos y eléctricos.",
        "Pérdidas de mercadería (incendio, robo o falta de frío)."
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
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-xl">
          Tu agente de confianza en Federación Patronal
        </h2>
        <p className="text-white text-lg opacity-90">
          Brindamos asesoramiento personalizado y las mejores coberturas para
          vos, tu familia y tu actividad.
        </p>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full px-4 mt-10">
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {(Object.keys(planes) as PlanKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all
                ${
                  activeTab === key
                    ? "bg-azul-oscuro-custom text-white border-blue-900 shadow-lg scale-105"
                    : "bg-blanco-custom text-gray-800 hover:bg-gris-custom border-amber-50"
                }`}
            >
              {planes[key].title}
            </button>
          ))}
        </div>

        <div
          className="
            bg-white/10 backdrop-blur-[2px] shadow-xl p-6 rounded-xl
            max-h-120 overflow-y-auto
            md:max-h-none md:overflow-visible
            transition-all duration-300
          "
        >
          <h3 className="text-2xl font-bold text-blanco-custom mb-3">
            {planesData.title}
          </h3>
          <p className="text-blanco-custom mb-4">{planesData.desc}</p>

          <ul className="list-disc ml-5 text-blanco-custom space-y-1">
            {planesData.coverages.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MoreInfo;
