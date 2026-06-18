const base = import.meta.env.BASE_URL;

export default function Capa() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-dark font-body text-bg">
      <img
        src={`${base}img/cover-locomotive.jpg`}
        crossOrigin="anonymous"
        alt="Locomotiva a vapor"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent" />

      <div className="absolute top-[7vh] left-[6vw] flex items-center gap-[1.2vw]">
        <div className="w-[3.2vw] h-[3.2vw] rounded-full border-[0.35vw] border-primary" />
        <span className="font-display tracking-[0.4em] text-[2.3vw] uppercase text-primary">
          Física · Termodinâmica
        </span>
      </div>

      <div className="absolute left-[6vw] top-[23vh] max-w-[62vw]">
        <p className="font-display text-[2.4vw] tracking-[0.3em] uppercase text-accent mb-[1vh]">
          Ensino Médio
        </p>
        <h1 className="font-display font-700 uppercase leading-[0.9] text-[8.5vw] tracking-tight text-bg">
          Máquinas
        </h1>
        <h1 className="font-display font-700 uppercase leading-[0.9] text-[8.5vw] tracking-tight text-primary">
          a Vapor
        </h1>
        <div className="mt-[2.5vh] w-[24vw] h-[0.4vh] bg-primary" />
        <p className="mt-[2.5vh] text-[2.2vw] font-300 text-bg/85 max-w-[46vw] [text-wrap:pretty]">
          Como a termodinâmica transforma calor em movimento
        </p>
      </div>

      <div className="absolute bottom-[7vh] left-[6vw]">
        <p className="font-display text-[2.2vw] tracking-[0.3em] uppercase text-primary mb-[1vh]">
          Integrantes
        </p>
        <div className="flex gap-[3vw]">
          <p className="text-[2.6vw] font-500 text-bg leading-tight">Leonardo Garbuio</p>
          <p className="text-[2.6vw] font-500 text-bg leading-tight">Nikolas Stadler</p>
          <p className="text-[2.6vw] font-500 text-bg leading-tight">Murilo Moura</p>
        </div>
      </div>
    </div>
  );
}
