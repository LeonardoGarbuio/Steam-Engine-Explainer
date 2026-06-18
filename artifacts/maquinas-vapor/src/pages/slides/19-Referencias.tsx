const refs = [
  { n: "01", url: "https://cursoenemgratuito.com.br/maquinas-termicas/", label: "Curso Enem Gratuito — Máquinas térmicas" },
  { n: "02", url: "https://www.infoescola.com/fisica/primeira-lei-da-termodinamica/", label: "InfoEscola — Primeira lei da termodinâmica" },
  { n: "03", url: "https://www.infoescola.com/fisica/segunda-lei-da-termodinamica/", label: "InfoEscola — Segunda lei da termodinâmica" },
  { n: "04", url: "https://www.infoescola.com/fisica/ciclo-de-carnot/", label: "InfoEscola — Ciclo de Carnot" },
  { n: "05", url: "https://www.infoescola.com/fisica/entropia/", label: "InfoEscola — Entropia" },
  { n: "06", url: "https://mundoeducacao.uol.com.br/fisica/primeira-lei-termodinamica.htm", label: "Mundo Educação — Primeira lei da termodinâmica" },
  { n: "07", url: "https://mundoeducacao.uol.com.br/fisica/maquinas-termicas.htm", label: "Mundo Educação — Máquinas térmicas" },
  { n: "08", url: "https://mundoeducacao.uol.com.br/fisica/calor.htm", label: "Mundo Educação — Calor" },
  { n: "09", url: "https://brasilescola.uol.com.br/fisica/termodinamica.htm", label: "Brasil Escola — Termodinâmica" },
  { n: "10", url: "https://www.todamateria.com.br/termodinamica/", label: "Toda Matéria — Termodinâmica" },
];

export default function Referencias() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg font-body text-text">
      <div className="absolute top-[6vh] left-[6vw] flex items-center gap-[1vw]">
        <span className="font-display text-[3vw] text-primary font-700">18</span>
        <div className="w-[8vw] h-[0.3vh] bg-primary" />
        <span className="font-display tracking-[0.3em] text-[2.2vw] uppercase text-accent">
          Fontes
        </span>
      </div>

      <div className="absolute left-[6vw] top-[13vh]">
        <h2 className="font-display font-700 uppercase leading-[0.95] text-[5vw] tracking-tight text-text">
          Referências
        </h2>
      </div>

      <div className="absolute left-[6vw] right-[6vw] top-[27vh] flex flex-col">
        <a href={refs[0].url} target="_blank" rel="noopener noreferrer" className="flex items-baseline gap-[1.2vw] border-t border-text/15 py-[1.35vh]">
          <span className="font-display text-[2.4vw] font-700 text-primary shrink-0 w-[3.5vw]">{refs[0].n}</span>
          <span className="text-[2.4vw] font-400 text-text/85">{refs[0].label}</span>
        </a>
        <a href={refs[1].url} target="_blank" rel="noopener noreferrer" className="flex items-baseline gap-[1.2vw] border-t border-text/15 py-[1.35vh]">
          <span className="font-display text-[2.4vw] font-700 text-primary shrink-0 w-[3.5vw]">{refs[1].n}</span>
          <span className="text-[2.4vw] font-400 text-text/85">{refs[1].label}</span>
        </a>
        <a href={refs[2].url} target="_blank" rel="noopener noreferrer" className="flex items-baseline gap-[1.2vw] border-t border-text/15 py-[1.35vh]">
          <span className="font-display text-[2.4vw] font-700 text-primary shrink-0 w-[3.5vw]">{refs[2].n}</span>
          <span className="text-[2.4vw] font-400 text-text/85">{refs[2].label}</span>
        </a>
        <a href={refs[3].url} target="_blank" rel="noopener noreferrer" className="flex items-baseline gap-[1.2vw] border-t border-text/15 py-[1.35vh]">
          <span className="font-display text-[2.4vw] font-700 text-primary shrink-0 w-[3.5vw]">{refs[3].n}</span>
          <span className="text-[2.4vw] font-400 text-text/85">{refs[3].label}</span>
        </a>
        <a href={refs[4].url} target="_blank" rel="noopener noreferrer" className="flex items-baseline gap-[1.2vw] border-t border-text/15 py-[1.35vh]">
          <span className="font-display text-[2.4vw] font-700 text-primary shrink-0 w-[3.5vw]">{refs[4].n}</span>
          <span className="text-[2.4vw] font-400 text-text/85">{refs[4].label}</span>
        </a>
        <a href={refs[5].url} target="_blank" rel="noopener noreferrer" className="flex items-baseline gap-[1.2vw] border-t border-text/15 py-[1.35vh]">
          <span className="font-display text-[2.4vw] font-700 text-primary shrink-0 w-[3.5vw]">{refs[5].n}</span>
          <span className="text-[2.4vw] font-400 text-text/85">{refs[5].label}</span>
        </a>
        <a href={refs[6].url} target="_blank" rel="noopener noreferrer" className="flex items-baseline gap-[1.2vw] border-t border-text/15 py-[1.35vh]">
          <span className="font-display text-[2.4vw] font-700 text-primary shrink-0 w-[3.5vw]">{refs[6].n}</span>
          <span className="text-[2.4vw] font-400 text-text/85">{refs[6].label}</span>
        </a>
        <a href={refs[7].url} target="_blank" rel="noopener noreferrer" className="flex items-baseline gap-[1.2vw] border-t border-text/15 py-[1.35vh]">
          <span className="font-display text-[2.4vw] font-700 text-primary shrink-0 w-[3.5vw]">{refs[7].n}</span>
          <span className="text-[2.4vw] font-400 text-text/85">{refs[7].label}</span>
        </a>
        <a href={refs[8].url} target="_blank" rel="noopener noreferrer" className="flex items-baseline gap-[1.2vw] border-t border-text/15 py-[1.35vh]">
          <span className="font-display text-[2.4vw] font-700 text-primary shrink-0 w-[3.5vw]">{refs[8].n}</span>
          <span className="text-[2.4vw] font-400 text-text/85">{refs[8].label}</span>
        </a>
        <a href={refs[9].url} target="_blank" rel="noopener noreferrer" className="flex items-baseline gap-[1.2vw] border-y border-text/15 py-[1.35vh]">
          <span className="font-display text-[2.4vw] font-700 text-primary shrink-0 w-[3.5vw]">{refs[9].n}</span>
          <span className="text-[2.4vw] font-400 text-text/85">{refs[9].label}</span>
        </a>
      </div>
    </div>
  );
}
