export default function Entropia() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-dark font-body text-bg">
      <div className="absolute top-[7vh] left-[6vw] flex items-center gap-[1vw]">
        <span className="font-display text-[3vw] text-primary font-700">13</span>
        <div className="w-[8vw] h-[0.3vh] bg-primary" />
        <span className="font-display tracking-[0.3em] text-[2.2vw] uppercase text-accent">
          2ª Lei
        </span>
      </div>
      <div className="absolute top-[7vh] right-[6vw] px-[1.4vw] py-[0.6vh] border border-bg/30 rounded-full">
        <span className="text-[2.2vw] font-500 tracking-wide text-bg/80">Murilo Moura</span>
      </div>

      <div className="absolute left-[6vw] top-[14vh] max-w-[42vw]">
        <h2 className="font-display font-700 uppercase leading-[0.95] text-[5.5vw] tracking-tight text-bg">
          Entropia
        </h2>
        <p className="mt-[1vh] text-[3vw] font-300 text-primary">a medida da desordem</p>
        <p className="mt-[3.5vh] text-[3vw] font-400 leading-snug text-bg/85 [text-wrap:pretty]">
          Mede o grau de desorganização de um sistema. Em processos naturais, sempre tende a aumentar.
        </p>
        <p className="mt-[3vh] text-[3vw] font-400 leading-snug text-bg/75 [text-wrap:pretty]">
          A energia se dispersa e parte se perde como calor não aproveitável.
        </p>
      </div>

      <div className="absolute right-[6vw] top-[26vh] w-[42vw] flex flex-col gap-[2.5vh]">
        <div className="bg-bg/10 p-[3vh_2vw]">
          <div className="flex items-center justify-between">
            <span className="font-display text-[2.4vw] uppercase tracking-wide text-primary">Baixa entropia</span>
            <div className="flex gap-[0.6vw]">
              <div className="w-[1.3vw] h-[1.3vw] bg-bg" />
              <div className="w-[1.3vw] h-[1.3vw] bg-bg" />
              <div className="w-[1.3vw] h-[1.3vw] bg-bg" />
              <div className="w-[1.3vw] h-[1.3vw] bg-bg" />
            </div>
          </div>
          <p className="mt-[1.5vh] text-[2.4vw] font-400 text-bg/80">Organizado — energia concentrada e útil.</p>
        </div>

        <div className="flex justify-center text-primary font-display text-[2.6vw] font-700">↓</div>

        <div className="bg-bg/10 p-[3vh_2vw]">
          <div className="flex items-center justify-between">
            <span className="font-display text-[2.4vw] uppercase tracking-wide text-accent">Alta entropia</span>
            <div className="relative w-[8vw] h-[3vh]">
              <div className="absolute left-[0vw] top-[0vh] w-[1.1vw] h-[1.1vw] bg-bg/70" />
              <div className="absolute left-[3vw] top-[1.6vh] w-[1.1vw] h-[1.1vw] bg-bg/70" />
              <div className="absolute left-[5.2vw] top-[0.3vh] w-[1.1vw] h-[1.1vw] bg-bg/70" />
              <div className="absolute left-[6.8vw] top-[1.9vh] w-[1.1vw] h-[1.1vw] bg-bg/70" />
            </div>
          </div>
          <p className="mt-[1.5vh] text-[2.4vw] font-400 text-bg/80">Disperso — energia espalhada e degradada.</p>
        </div>
      </div>
    </div>
  );
}
