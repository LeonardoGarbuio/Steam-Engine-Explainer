export default function CalorTemperatura() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg font-body text-text">
      <div className="absolute top-[6vh] left-[6vw] flex items-center gap-[1vw]">
        <span className="font-display text-[3vw] text-primary font-700">02</span>
        <div className="w-[8vw] h-[0.3vh] bg-primary" />
        <span className="font-display tracking-[0.3em] text-[2.2vw] uppercase text-accent">
          Fundamentos
        </span>
      </div>
      <div className="absolute top-[6vh] right-[6vw] px-[1.4vw] py-[0.6vh] border border-text/25 rounded-full">
        <span className="text-[2.2vw] font-500 tracking-wide text-text/70">Leonardo Garbuio</span>
      </div>

      <div className="absolute left-[6vw] top-[15vh]">
        <h2 className="font-display font-700 uppercase leading-[0.95] text-[5.5vw] tracking-tight text-text">
          Calor <span className="text-muted">x</span> <span className="text-primary">Temperatura</span>
        </h2>
      </div>

      <div className="absolute left-[6vw] right-[6vw] top-[32vh] grid grid-cols-2 gap-[2.5vw]">
        <div className="bg-dark text-bg p-[3.5vh_2.2vw] flex flex-col">
          <span className="font-display text-[2.4vw] tracking-[0.25em] uppercase text-primary mb-[2vh]">
            Temperatura
          </span>
          <p className="text-[3vw] font-400 leading-snug text-bg/90 [text-wrap:pretty]">
            Mede o grau de agitação das partículas de um corpo.
          </p>
          <p className="mt-[3vh] text-[2.4vw] font-500 text-bg/70">
            Medida em °C ou Kelvin (K)
          </p>
        </div>

        <div className="bg-primary text-bg p-[3.5vh_2.2vw] flex flex-col">
          <span className="font-display text-[2.4vw] tracking-[0.25em] uppercase text-bg mb-[2vh]">
            Calor
          </span>
          <p className="text-[3vw] font-400 leading-snug text-bg [text-wrap:pretty]">
            Energia térmica que flui do corpo quente para o frio.
          </p>
          <p className="mt-[3vh] text-[2.4vw] font-500 text-bg/85">
            Medido em joules (J) ou calorias (cal)
          </p>
        </div>
      </div>

      <div className="absolute left-[6vw] right-[6vw] bottom-[6vh] flex items-center gap-[1.5vw] border-t border-text/15 pt-[2.5vh]">
        <div className="w-[1.2vw] h-[1.2vw] bg-accent rotate-45 shrink-0" />
        <p className="text-[2.6vw] font-400 text-text/80">
          Temperatura é um estado; calor é energia em trânsito.
        </p>
      </div>
    </div>
  );
}
