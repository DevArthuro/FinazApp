import React from "react";

const Panel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="login image"
            src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <h2 className="mt-6 text-2xl font-bold text-black sm:text-3xl md:text-4xl">
              Bienvenido a <span className="text-[#8A2BE2]">FinanzApp</span>
            </h2>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 lg:hidden flex items-center justify-center">
              <h1 className="mt-11 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Bienvenido a <span className="text-[#8A2BE2]">FinanzApp</span>
              </h1>
            </div>
            <div className="md:mt-5 p-1">{children}</div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Panel;
