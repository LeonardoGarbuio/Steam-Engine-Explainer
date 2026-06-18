const base = import.meta.env.BASE_URL;

export default function GeladeiraAr() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg font-body text-text">
      <div className="absolute top-[7vh] left-[6vw] flex items-center gap-[1vw]">
        <span className="font-display text-[3vw] text-primary font-700">15</span>
        <div className="w-[8vw] h-[0.3vh] bg-primary" />
        <span className="font-display tracking-[0.3em] text-[2.2vw] uppercase text-accent">
          Aplicações
        </span>
      </div>
      <div className="absolute top-[7vh] right-[6vw] px-[1.4vw] py-[0.6vh] border border-text/25 rounded-full">
        <span className="text-[2.2vw] font-500 tracking-wide text-text/70">Murilo Moura</span>
      </div>

      <div className="absolute left-[6vw] top-[13vh] max-w-[80vw]">
        <h2 className="font-display font-700 uppercase leading-[0.95] text-[5vw] tracking-tight text-text">
          Máquinas térmicas <span className="text-primary">invertidas</span>
        </h2>
        <p className="mt-[2.5vh] text-[3vw] font-400 leading-snug text-text/80 max-w-[80vw] [text-wrap:pretty]">
          Geladeira e ar-condicionado fazem o caminho inverso: gastam energia para mover calor do frio ao quente.
        </p>
      </div>

      <div className="absolute left-[6vw] right-[6vw] top-[40vh] grid grid-cols-2 gap-[2vw]">
        <div className="bg-dark text-bg flex overflow-hidden h-[44vh]">
          <div className="w-[45%] overflow-hidden">
            <img src={`${base}img/refrigerator.jpg`} crossOrigin="anonymous" alt="Geladeira aberta" className="w-full h-full object-cover" />
          </div>
          <div className="p-[3vh_1.8vw] flex flex-col justify-center">
            <span className="font-display text-[3vw] font-700 uppercase tracking-wide text-primary">Geladeira</span>
            <p className="mt-[1.5vh] text-[3vw] font-400 leading-snug text-bg/90 [text-wrap:pretty]">
              Retira calor dos alimentos e o libera atrás, na grade. Por isso essa parte fica quente.
            </p>
          </div>
        </div>

        <div className="bg-dark text-bg flex overflow-hidden h-[44vh]">
          <div className="w-[45%] overflow-hidden">
            <img src={`${base}img/air-conditioner.jpg`} crossOrigin="anonymous" alt="Ar-condicionado" className="w-full h-full object-cover" />
          </div>
          <div className="p-[3vh_1.8vw] flex flex-col justify-center">
            <span className="font-display text-[3vw] font-700 uppercase tracking-wide text-primary">Ar-condicionado</span>
            <p className="mt-[1.5vh] text-[3vw] font-400 leading-snug text-bg/90 [text-wrap:pretty]">
              Resfria o ambiente interno e despeja o calor retirado para fora, na unidade externa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
