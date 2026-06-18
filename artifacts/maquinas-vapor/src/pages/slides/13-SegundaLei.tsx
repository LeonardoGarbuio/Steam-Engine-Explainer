export default function SegundaLei() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg font-body text-text">
      <div className="absolute top-[6vh] left-[6vw] flex items-center gap-[1vw]">
        <span className="font-display text-[3vw] text-primary font-700">12</span>
        <div className="w-[8vw] h-[0.3vh] bg-primary" />
        <span className="font-display tracking-[0.3em] text-[2.2vw] uppercase text-accent">
          2ª Lei
        </span>
      </div>
      <div className="absolute top-[6vh] right-[6vw] px-[1.4vw] py-[0.6vh] border border-text/25 rounded-full">
        <span className="text-[2.2vw] font-500 tracking-wide text-text/70">Murilo Moura</span>
      </div>

      <div className="absolute left-[6vw] top-[15vh] max-w-[44vw]">
        <h2 className="font-display font-700 uppercase leading-[0.95] text-[5vw] tracking-tight text-text">
          2ª Lei da <span className="text-primary">Termodinâmica</span>
        </h2>
        <p className="mt-[4vh] text-[3vw] font-400 leading-snug text-text/85 [text-wrap:pretty]">
          O calor flui sempre do corpo quente para o frio, nunca o contrário de forma espontânea.
        </p>
        <p className="mt-[3.5vh] text-[3vw] font-400 leading-snug text-text/75 [text-wrap:pretty]">
          Por isso nenhuma máquina converte todo o calor em trabalho.
        </p>
      </div>

      <div className="absolute right-[6vw] top-[27vh] w-[42vw]">
        <div className="bg-dark text-bg p-[4vh_2vw]">
          <span className="font-display text-[2.2vw] tracking-[0.3em] uppercase text-accent">Fluxo natural do calor</span>
          <div className="mt-[3.5vh] flex items-center justify-between">
            <div className="flex flex-col items-center">
              <div className="w-[10vw] h-[10vw] rounded-full bg-primary flex items-center justify-center">
                <span className="font-display text-[3vw] font-700 text-bg uppercase">Quente</span>
              </div>
            </div>
            <div className="flex flex-col items-center text-primary">
              <span className="font-display text-[3.2vw] font-700 leading-none">→</span>
              <span className="text-[2.2vw] font-500 text-bg/70 mt-[0.6vh]">espontâneo</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[10vw] h-[10vw] rounded-full bg-accent flex items-center justify-center">
                <span className="font-display text-[3vw] font-700 text-bg uppercase">Frio</span>
              </div>
            </div>
          </div>
          <p className="mt-[3.5vh] text-[2.4vw] font-400 leading-snug text-bg/80 text-center">
            O caminho inverso só ocorre com gasto de energia (como na geladeira).
          </p>
        </div>
      </div>
    </div>
  );
}
