const base = import.meta.env.BASE_URL;

export default function Termodinamica() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg font-body text-text">
      <div className="absolute top-0 right-0 w-[40vw] h-full">
        <img
          src={`${base}img/kettle.jpg`}
          crossOrigin="anonymous"
          alt="Chaleira liberando vapor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/40 to-transparent" />
      </div>

      <div className="absolute top-[6vh] left-[6vw] flex items-center gap-[1vw]">
        <span className="font-display text-[3vw] text-primary font-700">01</span>
        <div className="w-[8vw] h-[0.3vh] bg-primary" />
        <span className="font-display tracking-[0.3em] text-[2.2vw] uppercase text-accent">
          Fundamentos
        </span>
      </div>
      <div className="absolute top-[6vh] right-[6vw] px-[1.4vw] py-[0.6vh] border border-text/25 rounded-full">
        <span className="text-[2.2vw] font-500 tracking-wide text-text/70">Leonardo Garbuio</span>
      </div>

      <div className="absolute left-[6vw] top-[15vh] max-w-[52vw]">
        <h2 className="font-display font-700 uppercase leading-[0.95] text-[5vw] tracking-tight text-text">
          O que é<span className="text-primary"> Termodinâmica?</span>
        </h2>

        <p className="mt-[3vh] text-[2.6vw] font-400 leading-snug text-text/85 [text-wrap:pretty]">
          Parte da Física que estuda as relações entre
          <span className="font-600 text-primary"> calor</span>,
          <span className="font-600 text-primary"> trabalho</span> e
          <span className="font-600 text-primary"> energia</span>.
        </p>

        <div className="mt-[4.5vh] flex flex-col gap-[2.4vh]">
          <div className="flex items-start gap-[1.2vw]">
            <div className="mt-[1.2vh] w-[1.1vw] h-[1.1vw] bg-accent rotate-45 shrink-0" />
            <p className="text-[3vw] font-400 leading-snug text-text/80">
              Explica como o calor vira movimento.
            </p>
          </div>
          <div className="flex items-start gap-[1.2vw]">
            <div className="mt-[1.2vh] w-[1.1vw] h-[1.1vw] bg-accent rotate-45 shrink-0" />
            <p className="text-[3vw] font-400 leading-snug text-text/80">
              Base de motores, usinas e trens a vapor.
            </p>
          </div>
          <div className="flex items-start gap-[1.2vw]">
            <div className="mt-[1.2vh] w-[1.1vw] h-[1.1vw] bg-accent rotate-45 shrink-0" />
            <p className="text-[3vw] font-400 leading-snug text-text/80">
              Governada por duas leis fundamentais.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
