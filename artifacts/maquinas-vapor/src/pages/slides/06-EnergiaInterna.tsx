const base = import.meta.env.BASE_URL;

export default function EnergiaInterna() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg font-body text-text">
      <div className="absolute top-0 right-0 w-[38vw] h-full">
        <img
          src={`${base}img/pistons.jpg`}
          crossOrigin="anonymous"
          alt="Pistões de máquina a vapor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/30 to-transparent" />
      </div>

      <div className="absolute top-[6vh] left-[6vw] flex items-center gap-[1vw]">
        <span className="font-display text-[3vw] text-primary font-700">05</span>
        <div className="w-[8vw] h-[0.3vh] bg-primary" />
        <span className="font-display tracking-[0.3em] text-[2.2vw] uppercase text-accent">
          Fundamentos
        </span>
      </div>
      <div className="absolute top-[6vh] right-[6vw] px-[1.4vw] py-[0.6vh] border border-text/25 rounded-full bg-bg/70">
        <span className="text-[2.2vw] font-500 tracking-wide text-text/70">Leonardo Garbuio</span>
      </div>

      <div className="absolute left-[6vw] top-[14vh] max-w-[52vw]">
        <h2 className="font-display font-700 uppercase leading-[0.95] text-[4.8vw] tracking-tight text-text">
          Energia interna <span className="text-primary">e trabalho</span>
        </h2>

        <div className="mt-[4vh] flex flex-col gap-[2.6vh]">
          <div className="bg-dark text-bg p-[2.6vh_1.8vw] max-w-[48vw]">
            <span className="font-display text-[2.4vw] tracking-[0.25em] uppercase text-primary">
              Energia interna (U)
            </span>
            <p className="mt-[1.2vh] text-[3vw] font-400 leading-snug text-bg/90 [text-wrap:pretty]">
              Energia das partículas do gás.
            </p>
          </div>

          <div className="bg-primary text-bg p-[2.6vh_1.8vw] max-w-[48vw]">
            <span className="font-display text-[2.4vw] tracking-[0.25em] uppercase text-bg">
              Trabalho (W)
            </span>
            <p className="mt-[1.2vh] text-[3vw] font-400 leading-snug text-bg [text-wrap:pretty]">
              O gás expande e empurra o pistão: calor vira movimento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
