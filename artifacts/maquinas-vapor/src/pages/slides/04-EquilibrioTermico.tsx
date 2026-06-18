export default function EquilibrioTermico() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg font-body text-text">
      <div className="absolute top-[6vh] left-[6vw] flex items-center gap-[1vw]">
        <span className="font-display text-[3vw] text-primary font-700">03</span>
        <div className="w-[8vw] h-[0.3vh] bg-primary" />
        <span className="font-display tracking-[0.3em] text-[2.2vw] uppercase text-accent">
          Fundamentos
        </span>
      </div>
      <div className="absolute top-[6vh] right-[6vw] px-[1.4vw] py-[0.6vh] border border-text/25 rounded-full">
        <span className="text-[2.2vw] font-500 tracking-wide text-text/70">Leonardo Garbuio</span>
      </div>

      <div className="absolute left-[6vw] top-[15vh] max-w-[44vw]">
        <h2 className="font-display font-700 uppercase leading-[0.95] text-[5vw] tracking-tight text-text">
          Energia térmica e <span className="text-primary">equilíbrio</span>
        </h2>
        <p className="mt-[3.5vh] text-[2.4vw] font-400 leading-snug text-text/85 [text-wrap:pretty]">
          Energia térmica é a soma da agitação de todas as partículas de um corpo.
        </p>
        <div className="mt-[3.5vh] bg-accent/10 p-[3vh_2vw]">
          <span className="font-display text-[2.3vw] tracking-[0.25em] uppercase text-accent">
            Equilíbrio térmico
          </span>
          <p className="mt-[1.5vh] text-[3vw] font-400 leading-snug text-text/85">
            Dois corpos atingem a mesma temperatura e o calor para de fluir.
          </p>
        </div>
      </div>

      <div className="absolute right-[6vw] top-[26vh] w-[40vw] flex items-center justify-center gap-[2vw]">
        <div className="flex flex-col items-center">
          <div className="w-[11vw] h-[11vw] rounded-full bg-primary flex items-center justify-center">
            <span className="font-display text-[3.4vw] font-700 text-bg">80°C</span>
          </div>
          <span className="mt-[1.5vh] text-[2.3vw] font-500 text-text/70">Corpo quente</span>
        </div>

        <div className="flex flex-col items-center text-primary">
          <span className="font-display text-[3vw] font-700 leading-none">→</span>
          <span className="text-[2.2vw] font-500 text-muted mt-[0.5vh]">calor</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[11vw] h-[11vw] rounded-full bg-accent flex items-center justify-center">
            <span className="font-display text-[3.4vw] font-700 text-bg">20°C</span>
          </div>
          <span className="mt-[1.5vh] text-[2.3vw] font-500 text-text/70">Corpo frio</span>
        </div>
      </div>

      <div className="absolute right-[6vw] bottom-[12vh] w-[40vw] text-center">
        <div className="inline-flex items-center gap-[1vw] bg-dark px-[2.2vw] py-[1.6vh]">
          <span className="font-display text-[2.4vw] font-700 text-primary">50°C</span>
          <span className="text-[2.4vw] font-400 text-bg/85">= mesma temperatura</span>
        </div>
      </div>
    </div>
  );
}
