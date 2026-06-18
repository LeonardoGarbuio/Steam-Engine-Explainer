const base = import.meta.env.BASE_URL;

export default function ReflexaoFinal() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-dark font-body text-bg">
      <img
        src={`${base}img/energy.jpg`}
        crossOrigin="anonymous"
        alt="Energia"
        className="absolute right-0 top-0 w-[42vw] h-full object-cover"
      />
      <div className="absolute right-0 top-0 w-[42vw] h-full bg-gradient-to-l from-transparent via-dark/50 to-dark" />

      <div className="absolute top-[7vh] left-[6vw] flex items-center gap-[1vw]">
        <span className="font-display text-[3vw] text-primary font-700">17</span>
        <div className="w-[8vw] h-[0.3vh] bg-primary" />
        <span className="font-display tracking-[0.3em] text-[2.2vw] uppercase text-accent">
          Conclusão
        </span>
      </div>
      <div className="absolute top-[7vh] right-[6vw] px-[1.4vw] py-[0.6vh] border border-bg/30 rounded-full">
        <span className="text-[2.2vw] font-500 tracking-wide text-bg/80">Murilo Moura</span>
      </div>

      <div className="absolute left-[6vw] top-[12vh] max-w-[50vw]">
        <h2 className="font-display font-700 uppercase leading-[0.95] text-[5vw] tracking-tight text-bg">
          Eficiência <span className="text-primary">energética</span>
        </h2>
        <p className="mt-[2.5vh] text-[2.8vw] font-400 leading-snug text-bg/85 max-w-[48vw] [text-wrap:pretty]">
          Como sempre há perdas, usar bem a energia é essencial.
        </p>

        <div className="mt-[3vh] flex flex-col gap-[1.8vh] max-w-[48vw]">
          <div className="flex items-center gap-[1.4vw] border-l-[0.4vw] border-primary pl-[1.4vw]">
            <p className="text-[2.8vw] font-400 leading-snug text-bg/90">
              A energia se degrada a cada transformação.
            </p>
          </div>
          <div className="flex items-center gap-[1.4vw] border-l-[0.4vw] border-primary pl-[1.4vw]">
            <p className="text-[2.8vw] font-400 leading-snug text-bg/90">
              Menos perdas = menos combustível e poluição.
            </p>
          </div>
          <div className="flex items-center gap-[1.4vw] border-l-[0.4vw] border-primary pl-[1.4vw]">
            <p className="text-[2.8vw] font-400 leading-snug text-bg/90">
              O desafio é sempre aproveitar melhor o calor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
