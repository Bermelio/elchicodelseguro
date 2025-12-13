import ssnLogo from "/assests/images/ssn-logo.png";

function Legal() {
  return (
    <footer className="bg-blanco-custom border-[#CFCFCF] text-[#4A4A49] pb-10 font-roboto">
      <div className="max-w-[1200px] mx-auto">

        <div className="w-full h-px bg-[#DCDCDC] mb-6"></div>

        <div
          className="
            flex flex-wrap items-center justify-between gap-5 text-center
          "
        >
          <div className="flex-1 min-w-[140px]">
            <p className="text-[13px]">N° de matrícula SSN</p>
            <strong className="text-[14px]">74365</strong>
          </div>

          <div className="hidden md:block w-px h-8 bg-[#CFCFCF]" />

          <div className="flex-1 min-w-[180px]">
            <p className="text-[13px] leading-tight mb-1">
              Departamento de Orientación <br /> y Asistencia al Asegurado
            </p>
            <strong className="text-[14px] text-[#009FE3]">0800-666-8400</strong>
          </div>

          <div className="hidden md:block w-px h-8 bg-[#CFCFCF]" />

          <div className="flex-1 min-w-[200px]">
            <a
              href="https://www.argentina.gob.ar/ssn"
              target="_blank"
              className="text-[14px] text-[#009FE3] font-bold no-underline"
            >
              www.argentina.gob.ar/ssn
            </a>
          </div>
          <div
            className="
              flex-1 min-w-[180px]
              md:text-right text-center
            "
          >
            <img
              src={ssnLogo}
              alt="SSN"
              className="w-40 mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Legal;
