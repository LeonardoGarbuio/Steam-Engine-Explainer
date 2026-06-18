const base = import.meta.env.BASE_URL;

export default function Componentes() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg font-body text-text">
      <div className="absolute top-[7vh] left-[6vw] flex items-center gap-[1vw]">
        <span className="font-display text-[3vw] text-primary font-700">08</span>
        <div className="w-[8vw] h-[0.3vh] bg-primary" />
        <span className="font-display tracking-[0.3em] text-[2.2vw] uppercase text-accent">
          A Máquina
        </span>
      </div>
      <div className="absolute top-[7vh] right-[6vw] px-[1.4vw] py-[0.6vh] border border-text/25 rounded-full">
        <span className="text-[2.2vw] font-500 tracking-wide text-text/70">Nikolas Stadler</span>
      </div>

      <div className="absolute left-[6vw] top-[15vh]">
        <h2 className="font-display font-700 uppercase leading-[0.95] text-[5vw] tracking-tight text-text">
          Componentes <span className="text-primary">principais</span>
        </h2>
      </div>

      <div className="absolute left-[6vw] right-[6vw] top-[32vh] grid grid-cols-4 gap-[1.6vw]">
        <div className="bg-dark text-bg flex flex-col">
          <div className="h-[20vh] overflow-hidden">
            <img src={`${base}img/gauge.jpg`} crossOrigin="anonymous" alt="Caldeira" className="w-full h-full object-cover" />
          </div>
          <div className="p-[2.2vh_1.2vw]">
            <span className="font-display text-[3vw] font-700 uppercase tracking-wide text-primary">Caldeira</span>
            <p className="mt-[1vh] text-[2.3vw] font-400 leading-snug text-bg/85">Aquece a água e produz o vapor sob pressão.</p>
          </div>
        </div>

        <div className="bg-dark text-bg flex flex-col">
          <div className="h-[20vh] overflow-hidden">
            <img src={`${base}img/pistons.jpg`} crossOrigin="anonymous" alt="Cilindro e pistão" className="w-full h-full object-cover" />
          </div>
          <div className="p-[2.2vh_1.2vw]">
            <span className="font-display text-[3vw] font-700 uppercase tracking-wide text-primary">Cilindro e pistão</span>
            <p className="mt-[1vh] text-[2.3vw] font-400 leading-snug text-bg/85">O vapor empurra o pistão e gera o movimento.</p>
          </div>
        </div>

        <div className="bg-dark text-bg flex flex-col">
          <div className="h-[20vh] overflow-hidden">
            <img src={`${base}img/steam-engine.jpg`} crossOrigin="anonymous" alt="Válvula" className="w-full h-full object-cover" />
          </div>
          <div className="p-[2.2vh_1.2vw]">
            <span className="font-display text-[3vw] font-700 uppercase tracking-wide text-primary">Válvula</span>
            <p className="mt-[1vh] text-[2.3vw] font-400 leading-snug text-bg/85">Controla a entrada e a saída do vapor no cilindro.</p>
          </div>
        </div>

        <div className="bg-dark text-bg flex flex-col">
          <div className="h-[20vh] overflow-hidden">
            <img src={`${base}img/steam-train.jpg`} crossOrigin="anonymous" alt="Volante e biela" className="w-full h-full object-cover" />
          </div>
          <div className="p-[2.2vh_1.2vw]">
            <span className="font-display text-[3vw] font-700 uppercase tracking-wide text-primary">Volante e biela</span>
            <p className="mt-[1vh] text-[2.3vw] font-400 leading-snug text-bg/85">Transformam o vai-e-vem em movimento rotativo.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
