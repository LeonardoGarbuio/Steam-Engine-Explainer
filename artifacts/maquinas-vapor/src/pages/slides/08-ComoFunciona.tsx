const base = import.meta.env.BASE_URL;

export default function ComoFunciona() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-dark font-body text-bg">
      <img
        src={`${base}img/steam-engine.jpg`}
        crossOrigin="anonymous"
        alt="Máquina a vapor antiga"
        className="absolute right-0 top-0 w-[40vw] h-full object-cover"
      />
      <div className="absolute right-0 top-0 w-[40vw] h-full bg-gradient-to-l from-transparent via-dark/40 to-dark" />

      <div className="absolute top-[7vh] left-[6vw] flex items-center gap-[1vw]">
        <span className="font-display text-[3vw] text-primary font-700">07</span>
        <div className="w-[8vw] h-[0.3vh] bg-primary" />
        <span className="font-display tracking-[0.3em] text-[2.2vw] uppercase text-accent">
          A Máquina
        </span>
      </div>
      <div className="absolute top-[7vh] right-[6vw] px-[1.4vw] py-[0.6vh] border border-bg/30 rounded-full">
        <span className="text-[2.2vw] font-500 tracking-wide text-bg/80">Nikolas Stadler</span>
      </div>

      <div className="absolute left-[6vw] top-[17vh] w-[52vw]">
        <h2 className="font-display font-700 uppercase leading-[0.95] text-[5vw] tracking-tight text-bg">
          Como funciona a <span className="text-primary">máquina a vapor</span>
        </h2>

        <div className="mt-[5vh] flex flex-col gap-[2.4vh]">
          <div className="flex items-center gap-[1.6vw]">
            <span className="font-display text-[3vw] font-700 text-primary w-[4vw] shrink-0">1</span>
            <p className="text-[3vw] font-400 leading-snug text-bg/90">
              A caldeira queima combustível e aquece a água até virar vapor.
            </p>
          </div>
          <div className="w-[44vw] h-[0.15vh] bg-bg/15" />
          <div className="flex items-center gap-[1.6vw]">
            <span className="font-display text-[3vw] font-700 text-primary w-[4vw] shrink-0">2</span>
            <p className="text-[3vw] font-400 leading-snug text-bg/90">
              O vapor sob alta pressão entra no cilindro e empurra o pistão.
            </p>
          </div>
          <div className="w-[44vw] h-[0.15vh] bg-bg/15" />
          <div className="flex items-center gap-[1.6vw]">
            <span className="font-display text-[3vw] font-700 text-primary w-[4vw] shrink-0">3</span>
            <p className="text-[3vw] font-400 leading-snug text-bg/90">
              O movimento do pistão gira o volante, gerando trabalho mecânico.
            </p>
          </div>
          <div className="w-[44vw] h-[0.15vh] bg-bg/15" />
          <div className="flex items-center gap-[1.6vw]">
            <span className="font-display text-[3vw] font-700 text-primary w-[4vw] shrink-0">4</span>
            <p className="text-[3vw] font-400 leading-snug text-bg/90">
              O vapor usado é liberado e o ciclo recomeça, em repetição contínua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
