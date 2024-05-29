import Image from "next/image";
import React from "react";

const BodyLanding = () => {
  return (
    <section
      className="bg-gray-50 flex items-center flex-col"
      style={{
        backgroundImage: "linear-gradient(to bottom, #FF6B35 , #f1c40f)",
      }}
    >
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex ">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Gestiona tus gatos
            <strong className="font-extrabold sm:block">
              {" "}
              con <span className="text-[#8A2BE2]">FinanzApp</span>.{" "}
            </strong>
          </h1>
          <p className="mt-4 sm:text-xl/relaxed">
            Lleva un registro detallado de tus gastos, planifica tus ahorros y
            alcanza tus metas financieras con facilidad.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-[#8A2BE2] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#8A2BE2] focus:outline-none focus:ring active:bg-[#8A2BE2] sm:w-auto"
              href="#"
            >
              Ver más
            </a>
          </div>
        </div>
      </div>
      <Image
        src={"/dashboard.png"}
        alt="image preview dashboard"
        width={1000}
        height={700}
        className="-mt-12 rounded-xl border-2"
      />
    </section>
  );
};

export default BodyLanding;
