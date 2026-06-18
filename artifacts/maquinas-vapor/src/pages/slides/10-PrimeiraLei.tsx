export default function PrimeiraLei() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg font-body text-text">
      <div className="absolute top-[7vh] left-[6vw] flex items-center gap-[1vw]">
        <span className="font-display text-[3vw] text-primary font-700">09</span>
        <div className="w-[8vw] h-[0.3vh] bg-primary" />
        <span className="font-display tracking-[0.3em] text-[2.2vw] uppercase text-accent">
          1ª Lei
        </span>
      </div>
      <div className="absolute top-[7vh] right-[6vw] px-[1.4vw] py-[0.6vh] border border-text/25 rounded-full">
        <span className="text-[2.2vw] font-500 tracking-wide text-text/70">Nikolas Stadler</span>
      </div>

      <div className="absolute left-[6vw] top-[15vh] max-w-[44vw]">
        <h2 className="font-display font-700 uppercase leading-[0.95] text-[5vw] tracking-tight text-text">
          1ª Lei da <span className="text-primary">Termodinâmica</span>
        </h2>
        <p className="mt-[3.5vh] text-[3.1vw] font-400 leading-snug text-text/85 [text-wrap:pretty]">
          É o princípio da conservação da energia: a energia não some, apenas muda de forma.
        </p>
        <p className="mt-[3vh] text-[3vw] font-400 leading-snug text-text/75 [text-wrap:pretty]">
          O calor recebido por um gás se divide entre aumentar sua energia interna e realizar trabalho.
        </p>
      </div>

      <div className="absolute right-[6vw] top-[22vh] w-[44vw]">
        <div className="bg-dark text-bg p-[3.5vh_2vw] text-center">
          <span className="font-display text-[2.3vw] tracking-[0.3em] uppercase text-accent">Fórmula</span>
          <p className="mt-[1.5vh] font-display text-[5.5vw] font-700 text-bg leading-none">
            ΔU = Q − W
          </p>
          <div className="mt-[3vh] flex flex-col gap-[1.4vh] text-left">
            <div className="flex items-baseline gap-[1vw]">
              <span className="font-display text-[2.2vw] font-700 text-primary w-[4vw]">ΔU</span>
              <span className="text-[2.7vw] font-400 text-bg/85">variação da energia interna</span>
            </div>
            <div className="flex items-baseline gap-[1vw]">
              <span className="font-display text-[2.2vw] font-700 text-primary w-[4vw]">Q</span>
              <span className="text-[2.7vw] font-400 text-bg/85">calor trocado com o sistema</span>
            </div>
            <div className="flex items-baseline gap-[1vw]">
              <span className="font-display text-[2.2vw] font-700 text-primary w-[4vw]">W</span>
              <span className="text-[2.7vw] font-400 text-bg/85">trabalho realizado pelo gás</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
