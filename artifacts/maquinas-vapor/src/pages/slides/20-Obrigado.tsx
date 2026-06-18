export default function Obrigado() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-dark font-body text-bg">
      <div className="absolute top-0 left-0 w-full h-[1.2vh] bg-primary" />
      <div className="absolute bottom-0 left-0 w-full h-[1.2vh] bg-accent" />

      <div className="absolute top-[14vh] left-[6vw] flex items-center gap-[1vw]">
        <div className="w-[8vw] h-[0.3vh] bg-primary" />
        <span className="font-display tracking-[0.3em] text-[2.2vw] uppercase text-accent">
          Máquinas a Vapor
        </span>
      </div>

      <div className="absolute top-[26vh] left-[6vw] max-w-[80vw]">
        <h2 className="font-display font-700 uppercase leading-[0.9] text-[9vw] tracking-tight text-bg">
          Obrigado!
        </h2>
        <p className="mt-[3vh] text-[2.2vw] font-300 text-bg/80 [text-wrap:pretty]">
          Da fervura da água ao trabalho útil — a termodinâmica explica o mundo em movimento.
        </p>
      </div>

      <div className="absolute bottom-[12vh] left-[6vw] right-[6vw] flex items-stretch gap-[1.5vw]">
        <div className="flex-1 border-t-[0.4vh] border-primary pt-[2vh]">
          <span className="font-display text-[3vw] font-700 uppercase tracking-wide text-bg">Leonardo Garbuio</span>
        </div>
        <div className="flex-1 border-t-[0.4vh] border-primary pt-[2vh]">
          <span className="font-display text-[3vw] font-700 uppercase tracking-wide text-bg">Nikolas Stadler</span>
        </div>
        <div className="flex-1 border-t-[0.4vh] border-primary pt-[2vh]">
          <span className="font-display text-[3vw] font-700 uppercase tracking-wide text-bg">Murilo Moura</span>
        </div>
      </div>
    </div>
  );
}
