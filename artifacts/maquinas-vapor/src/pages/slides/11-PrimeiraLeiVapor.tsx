export default function PrimeiraLeiVapor() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg font-body text-text">
      <div className="absolute top-[7vh] left-[6vw] flex items-center gap-[1vw]">
        <span className="font-display text-[3vw] text-primary font-700">10</span>
        <div className="w-[8vw] h-[0.3vh] bg-primary" />
        <span className="font-display tracking-[0.3em] text-[2.2vw] uppercase text-accent">
          1ª Lei
        </span>
      </div>
      <div className="absolute top-[7vh] right-[6vw] px-[1.4vw] py-[0.6vh] border border-text/25 rounded-full">
        <span className="text-[2.2vw] font-500 tracking-wide text-text/70">Nikolas Stadler</span>
      </div>

      <div className="absolute left-[6vw] top-[16vh] max-w-[80vw]">
        <h2 className="font-display font-700 uppercase leading-[0.95] text-[5vw] tracking-tight text-text">
          A 1ª Lei na <span className="text-primary">máquina a vapor</span>
        </h2>
      </div>

      <div className="absolute left-[6vw] right-[6vw] top-[33vh] flex flex-col gap-[1.6vh]">
        <div className="flex items-center gap-[1.4vw] bg-primary text-bg p-[2.2vh_1.8vw]">
          <span className="font-display text-[2.4vw] font-700 uppercase tracking-wide w-[16vw] shrink-0">Química</span>
          <span className="font-display text-[2.6vw] text-bg/70">→</span>
          <p className="text-[3vw] font-400 leading-none">Combustível queima na caldeira.</p>
        </div>
        <div className="flex items-center gap-[1.4vw] bg-dark text-bg p-[2.2vh_1.8vw]">
          <span className="font-display text-[2.4vw] font-700 uppercase tracking-wide text-primary w-[16vw] shrink-0">Térmica</span>
          <span className="font-display text-[2.6vw] text-primary">→</span>
          <p className="text-[3vw] font-400 leading-none text-bg/90">Calor (Q) aquece a água e gera vapor.</p>
        </div>
        <div className="flex items-center gap-[1.4vw] bg-dark text-bg p-[2.2vh_1.8vw]">
          <span className="font-display text-[2.4vw] font-700 uppercase tracking-wide text-primary w-[16vw] shrink-0">Interna</span>
          <span className="font-display text-[2.6vw] text-primary">→</span>
          <p className="text-[3vw] font-400 leading-none text-bg/90">O vapor ganha energia interna (ΔU).</p>
        </div>
        <div className="flex items-center gap-[1.4vw] bg-accent text-bg p-[2.2vh_1.8vw]">
          <span className="font-display text-[2.4vw] font-700 uppercase tracking-wide w-[16vw] shrink-0">Mecânica</span>
          <span className="font-display text-[2.6vw] text-bg/70">→</span>
          <p className="text-[3vw] font-400 leading-none">O gás realiza trabalho (W) no pistão.</p>
        </div>
      </div>

      <div className="absolute left-[6vw] right-[6vw] bottom-[5vh] flex items-center gap-[1.5vw]">
        <span className="font-display text-[3vw] font-700 text-primary shrink-0">Q = ΔU + W</span>
        <p className="text-[2.4vw] font-400 text-text/75 leading-none">
          o calor vira energia interna mais trabalho útil.
        </p>
      </div>
    </div>
  );
}
