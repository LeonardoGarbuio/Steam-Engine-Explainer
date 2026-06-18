const base = import.meta.env.BASE_URL;

export default function Combustao() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg font-body text-text">
      <div className="absolute top-0 right-0 w-[40vw] h-full">
        <img
          src={`${base}img/car-engine.jpg`}
          crossOrigin="anonymous"
          alt="Motor a combustão"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/35 to-transparent" />
      </div>

      <div className="absolute top-[7vh] left-[6vw] flex items-center gap-[1vw]">
        <span className="font-display text-[3vw] text-primary font-700">16</span>
        <div className="w-[8vw] h-[0.3vh] bg-primary" />
        <span className="font-display tracking-[0.3em] text-[2.2vw] uppercase text-accent">
          Aplicações
        </span>
      </div>
      <div className="absolute top-[7vh] right-[6vw] px-[1.4vw] py-[0.6vh] border border-text/25 rounded-full bg-bg/70">
        <span className="text-[2.2vw] font-500 tracking-wide text-text/70">Murilo Moura</span>
      </div>

      <div className="absolute left-[6vw] top-[12vh] max-w-[50vw]">
        <h2 className="font-display font-700 uppercase leading-[0.95] text-[4.8vw] tracking-tight text-text">
          Da máquina a vapor ao <span className="text-primary">motor a combustão</span>
        </h2>
        <p className="mt-[2.5vh] text-[2.8vw] font-400 leading-snug text-text/85 max-w-[48vw] [text-wrap:pretty]">
          Os motores dos carros viram calor em movimento — e perdem energia no caminho.
        </p>

        <div className="mt-[3vh] flex flex-col gap-[1.8vh] max-w-[48vw]">
          <div className="flex items-start gap-[1.2vw]">
            <div className="mt-[1vh] w-[1.1vw] h-[1.1vw] bg-accent rotate-45 shrink-0" />
            <p className="text-[2.8vw] font-400 leading-snug text-text/80">
              Calor escapa pelos gases do escapamento.
            </p>
          </div>
          <div className="flex items-start gap-[1.2vw]">
            <div className="mt-[1vh] w-[1.1vw] h-[1.1vw] bg-accent rotate-45 shrink-0" />
            <p className="text-[2.8vw] font-400 leading-snug text-text/80">
              O atrito das peças dissipa energia em calor.
            </p>
          </div>
          <div className="flex items-start gap-[1.2vw]">
            <div className="mt-[1vh] w-[1.1vw] h-[1.1vw] bg-accent rotate-45 shrink-0" />
            <p className="text-[2.8vw] font-400 leading-snug text-text/80">
              Por isso o motor precisa de arrefecimento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
