export default function Sistema() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg font-body text-text">
      <div className="absolute top-[6vh] left-[6vw] flex items-center gap-[1vw]">
        <span className="font-display text-[3vw] text-primary font-700">04</span>
        <div className="w-[8vw] h-[0.3vh] bg-primary" />
        <span className="font-display tracking-[0.3em] text-[2.2vw] uppercase text-accent">
          Fundamentos
        </span>
      </div>
      <div className="absolute top-[6vh] right-[6vw] px-[1.4vw] py-[0.6vh] border border-text/25 rounded-full">
        <span className="text-[2.2vw] font-500 tracking-wide text-text/70">Leonardo Garbuio</span>
      </div>

      <div className="absolute left-[6vw] top-[15vh]">
        <h2 className="font-display font-700 uppercase leading-[0.95] text-[5vw] tracking-tight text-text">
          O sistema <span className="text-primary">termodinâmico</span>
        </h2>
      </div>

      <div className="absolute left-[6vw] top-[30vh] w-[40vw]">
        <p className="text-[3vw] font-400 leading-snug text-text/85 [text-wrap:pretty]">
          Sistema é a porção que estudamos; o redor é a vizinhança e a fronteira os separa.
        </p>

        <div className="mt-[4vh] relative w-[34vw] h-[30vh] bg-accent/10 border-[0.35vw] border-dashed border-accent flex items-center justify-center">
          <span className="absolute -top-[3.5vh] left-[1vw] bg-bg px-[0.8vw] font-display text-[2.2vw] tracking-[0.2em] uppercase text-accent">
            Fronteira
          </span>
          <span className="absolute top-[2vh] right-[1.2vw] text-[2.3vw] font-500 text-muted">
            Vizinhança
          </span>
          <div className="w-[16vw] h-[15vh] bg-primary flex items-center justify-center">
            <span className="font-display text-[3vw] font-700 text-bg uppercase tracking-wide">
              Sistema
            </span>
          </div>
        </div>
      </div>

      <div className="absolute right-[6vw] top-[28vh] w-[40vw] flex flex-col gap-[2.2vh]">
        <div className="bg-dark text-bg p-[2.4vh_1.8vw]">
          <span className="font-display text-[2.4vw] tracking-[0.2em] uppercase text-primary">
            Aberto
          </span>
          <p className="mt-[1vh] text-[3vw] font-400 leading-snug text-bg/90">
            Troca matéria e energia.
          </p>
        </div>
        <div className="bg-dark text-bg p-[2.4vh_1.8vw]">
          <span className="font-display text-[2.4vw] tracking-[0.2em] uppercase text-primary">
            Fechado
          </span>
          <p className="mt-[1vh] text-[3vw] font-400 leading-snug text-bg/90">
            Só energia, não matéria.
          </p>
        </div>
        <div className="bg-dark text-bg p-[2.4vh_1.8vw]">
          <span className="font-display text-[2.4vw] tracking-[0.2em] uppercase text-primary">
            Isolado
          </span>
          <p className="mt-[1vh] text-[3vw] font-400 leading-snug text-bg/90">
            Nada entra nem sai.
          </p>
        </div>
      </div>
    </div>
  );
}
