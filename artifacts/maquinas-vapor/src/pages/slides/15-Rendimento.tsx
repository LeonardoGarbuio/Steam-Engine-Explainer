export default function Rendimento() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg font-body text-text">
      <div className="absolute top-[7vh] left-[6vw] flex items-center gap-[1vw]">
        <span className="font-display text-[3vw] text-primary font-700">14</span>
        <div className="w-[8vw] h-[0.3vh] bg-primary" />
        <span className="font-display tracking-[0.3em] text-[2.2vw] uppercase text-accent">
          2ª Lei
        </span>
      </div>
      <div className="absolute top-[7vh] right-[6vw] px-[1.4vw] py-[0.6vh] border border-text/25 rounded-full">
        <span className="text-[2.2vw] font-500 tracking-wide text-text/70">Murilo Moura</span>
      </div>

      <div className="absolute left-[6vw] top-[13vh] max-w-[46vw]">
        <h2 className="font-display font-700 uppercase leading-[0.95] text-[5vw] tracking-tight text-text">
          Rendimento <span className="text-primary">nunca é 100%</span>
        </h2>
        <p className="mt-[3.5vh] text-[3vw] font-400 leading-snug text-text/85 [text-wrap:pretty]">
          A máquina recebe calor da fonte quente, converte parte em trabalho e rejeita o resto à fonte fria.
        </p>
        <div className="mt-[3.5vh] bg-accent/10 p-[2.6vh_2vw]">
          <span className="font-display text-[2.2vw] tracking-[0.25em] uppercase text-accent">Ciclo de Carnot</span>
          <p className="mt-[1.2vh] text-[3vw] font-400 leading-snug text-text/85">
            Define o rendimento máximo teórico, conforme as temperaturas das fontes.
          </p>
        </div>
      </div>

      <div className="absolute right-[6vw] top-[24vh] w-[40vw]">
        <div className="bg-dark text-bg p-[4vh_2vw]">
          <div className="flex items-center justify-between">
            <span className="font-display text-[2.3vw] uppercase tracking-wide text-primary">Fonte quente</span>
            <span className="font-display text-[3vw] font-700 text-bg">100% Q</span>
          </div>
          <div className="mt-[2.5vh] h-[3.5vh] w-full bg-bg/15 flex">
            <div className="h-full bg-accent" style={{ width: "35%" }} />
            <div className="h-full bg-primary/70" style={{ width: "65%" }} />
          </div>
          <div className="mt-[2.5vh] flex flex-col gap-[1.6vh]">
            <div className="flex items-center gap-[1vw]">
              <div className="w-[1.4vw] h-[1.4vw] bg-accent" />
              <span className="text-[3vw] font-400 text-bg/90">≈ 35% vira trabalho útil</span>
            </div>
            <div className="flex items-center gap-[1vw]">
              <div className="w-[1.4vw] h-[1.4vw] bg-primary/70" />
              <span className="text-[3vw] font-400 text-bg/90">≈ 65% perdido como calor</span>
            </div>
          </div>
          <p className="mt-[3vh] text-[2.3vw] font-400 text-bg/70 [text-wrap:pretty]">
            Os valores variam conforme a máquina, mas sempre há perda.
          </p>
        </div>
      </div>
    </div>
  );
}
