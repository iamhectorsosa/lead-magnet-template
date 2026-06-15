import * as React from "react";

export const App: React.FC = () => {
  return (
    <>
      {/* NAV */}
      <nav className="border-b border-border/50 py-6 px-6 flex justify-center items-center">
        <header className="font-header text-2xl tracking-wide uppercase">
          Xatruch <span className="text-accent">Fitness</span>
        </header>
      </nav>

      {/* MAIN GRID */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-y-6">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 border border-border rounded-full px-3.5 py-1.5 w-fit bg-background-2/30">
            <span className="size-1.5 rounded-full bg-accent shrink-0 inline-block" />
            <span className="tracking-[0.2em] text-xs font-semibold text-muted uppercase">
              Herramienta Gratuita
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-header text-5xl lg:text-7xl tracking-tight uppercase leading-none">
            La única calculadora que{" "}
            <span className="text-accent">necesitas</span> para transformar tu
            cuerpo
          </h1>

          {/* Subtext */}
          <p className="leading-relaxed text-muted">
            Descubre exactamente cuántas calorías comer y cuánta proteína
            necesitas — sin confusión, sin suposiciones, sin perder tiempo.
          </p>

          {/* Features */}
          <div className="flex flex-col gap-3 mt-1">
            <p>
              <span className="text-accent mr-2">✓</span>
              <span className="text-muted">
                Calcula tus calorías exactas según tu objetivo: perder grasa o
                ganar músculo
              </span>
            </p>
            <p>
              <span className="text-accent mr-2">✓</span>
              <span className="text-muted">
                Descubre tu meta de proteína diaria para proteger o construir
                músculo
              </span>
            </p>
            <p>
              <span className="text-accent mr-2">✓</span>
              <span className="text-muted">
                Sin fórmulas complicadas — solo introduces tus datos y listo
              </span>
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-y-6">
          <iframe
            height="250"
            src="https://www.youtube.com/embed/sJ02F-7YwiM?si=zHA2wc2wbk1eJEQU"
            title="
Cómo Quemar Grasa y Ganar Músculo al Mismo Tiempo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
          <div className="flex flex-col gap-y-6 relative">
            {/* Badge */}
            <div className="mx-auto inline-flex items-center gap-2 border border-accent rounded-full px-3.5 py-1.5 w-fit bg-accent absolute inset-x-0">
              <span className="tracking-[0.2em] text-xs text-background uppercase font-bold">
                Gratis · Acceso Inmediato
              </span>
            </div>

            {/* Email Card */}
            <div className="bg-background-2/30 border border-border/30 rounded-xl p-6 pt-9 mt-3 space-y-4">
              <header className="leading-relaxed">
                <h2 className="font-header text-3xl lg:text-4xl uppercase">
                  Todo lo que quiero es tu email
                </h2>
                <p className="text-muted">
                  Accede gratis a la Calculadora de Macros Pro ahora mismo
                </p>
              </header>

              {/* Inputs */}
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="bg-border/10 border border-border/30 rounded-md px-3 py-3 text-sm text-muted w-full outline-none focus:border-accent transition-colors"
                />
                <input
                  type="email"
                  placeholder="Tu email"
                  className="bg-border/10 border border-border/30 rounded-md px-3 py-3 text-sm text-muted w-full outline-none focus:border-accent transition-colors"
                />

                {/* CTA */}
                <button
                  type="submit"
                  className="bg-accent rounded-md py-3 font-header text-sm tracking-widest text-background text-center cursor-pointer w-full hover:opacity-90 transition-opacity uppercase"
                >
                  Quiero mis macros ahora →
                </button>
              </form>

              {/* No spam */}
              <div className="text-xs text-muted text-center">
                <span className="mr-2">🔒</span>
                <span>Sin spam, sólo contenido que te ayuda a progresar.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
