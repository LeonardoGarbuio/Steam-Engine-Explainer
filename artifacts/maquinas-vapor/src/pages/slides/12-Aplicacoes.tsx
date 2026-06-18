const base = import.meta.env.BASE_URL;

export default function Aplicacoes() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg font-body text-text">
      <div className="absolute top-0 right-0 w-[36vw] h-full">
        <img
          src={`${base}img/pressure-cooker.jpg`}
          crossOrigin="anonymous"
          alt="Panela de pressão liberando vapor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/30 to-transparent" />
      </div>

      <div className="absolute top-[6vh] left-[6vw] flex items-center gap-[1vw]">
        <span className="font-display text-[3vw] text-primary font-700">11</span>
        <div className="w-[8vw] h-[0.3vh] bg-primary" />
        <span className="font-display tracking-[0.3em] text-[2.2vw] uppercase text-accent">
          1ª Lei
        </span>
      </div>
      <div className="absolute top-[6vh] right-[6vw] px-[1.4vw] py-[0.6vh] border border-text/25 rounded-full bg-bg/70">
        <span className="text-[2.2vw] font-500 tracking-wide text-text/70">Nikolas Stadler</span>
      </div>

      <div className="absolute left-[6vw] top-[14vh] max-w-[54vw]">
        <h2 className="font-display font-700 uppercase leading-[0.95] text-[4.8vw] tracking-tight text-text">
          A 1ª Lei no <span className="text-primary">cotidiano</span>
        </h2>

        <div className="mt-[4vh] flex flex-col gap-[2.2vh]">
          <div className="flex items-center gap-[1.2vw] bg-dark text-bg p-[2.2vh_1.6vw] max-w-[52vw]">
            <span className="font-display text-[2.3vw] font-700 uppercase tracking-wide text-primary w-[12vw] shrink-0">
              Panela
            </span>
            <p className="text-[3vw] font-400 leading-snug text-bg/90">
              Vapor preso cozinha mais rápido.
            </p>
          </div>
          <div className="flex items-center gap-[1.2vw] bg-dark text-bg p-[2.2vh_1.6vw] max-w-[52vw]">
            <span className="font-display text-[2.3vw] font-700 uppercase tracking-wide text-primary w-[12vw] shrink-0">
              Usinas
            </span>
            <p className="text-[3vw] font-400 leading-snug text-bg/90">
              O vapor gira turbinas e gera energia.
            </p>
          </div>
          <div className="flex items-center gap-[1.2vw] bg-dark text-bg p-[2.2vh_1.6vw] max-w-[52vw]">
            <span className="font-display text-[2.3vw] font-700 uppercase tracking-wide text-primary w-[12vw] shrink-0">
              Pneu ao sol
            </span>
            <p className="text-[3vw] font-400 leading-snug text-bg/90">
              O calor eleva a pressão do ar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
