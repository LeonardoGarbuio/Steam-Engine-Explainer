const base = import.meta.env.BASE_URL;

export default function HistoriaWatt() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg font-body text-text">
      <div className="absolute top-0 left-0 w-[42vw] h-full">
        <img
          src={`${base}img/factory.jpg`}
          crossOrigin="anonymous"
          alt="Fábrica da Revolução Industrial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-bg via-bg/30 to-transparent" />
        <div className="absolute inset-0 bg-dark/25" />
      </div>

      <div className="absolute top-[6vh] right-[6vw] flex items-center gap-[1vw]">
        <span className="font-display tracking-[0.3em] text-[2.2vw] uppercase text-accent">
          A Máquina
        </span>
        <div className="w-[8vw] h-[0.3vh] bg-primary" />
        <span className="font-display text-[3vw] text-primary font-700">06</span>
      </div>
      <div className="absolute top-[6vh] left-[6vw] px-[1.4vw] py-[0.6vh] border border-bg/40 rounded-full bg-dark/50">
        <span className="text-[2.2vw] font-500 tracking-wide text-bg/90">Nikolas Stadler</span>
      </div>

      <div className="absolute right-[6vw] top-[15vh] w-[46vw]">
        <h2 className="font-display font-700 uppercase leading-[0.95] text-[5vw] tracking-tight text-text">
          James Watt e a <span className="text-primary">Revolução Industrial</span>
        </h2>

        <p className="mt-[3.5vh] text-[3vw] font-400 leading-snug text-text/85 [text-wrap:pretty]">
          A máquina a vapor usa o vapor d'água para gerar movimento.
        </p>

        <div className="mt-[4vh] flex gap-[1.5vw]">
          <div className="bg-dark text-bg p-[2.8vh_1.6vw] flex-1">
            <span className="font-display text-[2.8vw] font-700 text-primary leading-none">1769</span>
            <p className="mt-[1.5vh] text-[2.4vw] font-400 leading-snug text-bg/85">
              Watt cria o condensador e reduz perdas de calor.
            </p>
          </div>
          <div className="bg-primary text-bg p-[2.8vh_1.6vw] flex-1">
            <span className="font-display text-[2.8vw] font-700 text-bg leading-none">Indústria</span>
            <p className="mt-[1.5vh] text-[2.4vw] font-400 leading-snug text-bg">
              Moveu trens, barcos e fábricas pelo mundo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
