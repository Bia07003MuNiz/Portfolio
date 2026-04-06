"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import GitHubIcon from "@mui/icons-material/GitHub";

const projects = [
   {
      image: "/images/theFlashcards.png",
      tags: ["React", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Material UI"],
      title: "The Flashcards",
      desc: "Plataforma completa de estudos com flashcards, baseada em aprendizado ativo, controle de múltiplas tentativas e relatórios detalhados por sessão. Possui gestão de salas, acompanhamento de desempenho em tempo real e interface moderna focada em experiência do usuário.",
      github: "https://github.com/Bia07003MuNiz/TheFlashcards",
      live: "https://the-flashcards.vercel.app/",
  },
  {
    image: "/images/leilao.png",
    tags: ["Next.js", "TypeScript", "Material UI", "Node.js", "Express", "Prisma", "PostgreSQL", "Socket.IO", "Redis"],
    title: "Sistema de Leilão",
    desc: "Plataforma de leilão online com atualização em tempo real via WebSockets, controle de lances com relógio sincronizado, filas assíncronas e arquitetura escalável com Redis. Inclui autenticação, processamento de eventos e alta concorrência.",
  },
  {
    image: "/images/gestaoPatio.png",
    tags: ["Next.js", "TypeScript", "MUI", "Node.js", "Express", "Prisma", "PostgreSQL", "AWS S3", "Google Maps API"],
    title: "Sistema de Gestão de Pátio",
    desc: "Plataforma completa para gestão de pátio de veículos com controle de apreensão, liberação e estoque. Possui relatórios detalhados (apreensão, liberação e estoque) e gestão logística e romaneio de veículos.",
  },
  {
    image: "/images/financeiro.png",
    tags: ["React", "Vite", "Docker", "Node.js", "TypeScript", "Express", "MikroORM", "PostgreSQL", "Redis"],
    title: "Sistema de Gestão Financeira",
    desc: "Sistema financeiro completo com controle de contas a pagar e receber, baixa de títulos, fluxo de caixa e relatórios gerenciais. Inclui gestão por bancos e natureza financeira, oferecendo visão consolidada e operacional para tomada de decisão.",
  },
  {
    image: "/images/feedback.png",
    tags: ["React", "TypeScript", "Vite", "Material UI", "Node.js", "Express", "MikroORM", "PostgreSQL"],
    title: "Sistema de Feedback",
    desc: "Plataforma para gestão de feedback organizacional segmentado por setores, permitindo coleta, acompanhamento e análise de avaliações. Possui relatórios gerenciais, controle de status e histórico de interações, auxiliando na melhoria contínua dos processos internos.",
  }
];

export const ProjetoDestaques = () => {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const maxIndex = projects.length - 3;

  const goTo = (index: number) => setCurrent(index);
  const prev = () => setCurrent((p) => (p <= 0 ? maxIndex : p - 1));
  const next = () => setCurrent((p) => (p >= maxIndex ? 0 : p + 1));

  useEffect(() => {
    if (!trackRef.current) return;
    const cardWidth = (trackRef.current.firstElementChild as HTMLElement)?.offsetWidth ?? 300;
    trackRef.current.style.transform = `translateX(-${current * (cardWidth + 20)}px)`;
  }, [current]);

  return (
    <div className="text-white relative">
      <div className="absolute inset-0 pointer-events-none" />

      <section className="relative z-10 py-32 px-6 md:px-20 mx-auto">
        <h2 className="md:text-6xl font-bold mb-2">Projetos em Destaque</h2>
        <p className="text-zinc-400 text-md font-semibold mb-3">Trabalhos selecionados que mostram minhas habilidades e paixão.</p>
        <div className="w-40 h-1 bg-blue-600 rounded-full mb-5" />

        <div className="w-full">
          <div className="relative">
            <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-blue-400 hover:border-blue-500 transition-all duration-200 hover:scale-110 shadow-lg">
              <ChevronLeft size={20} />
            </button>
            <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-blue-400 hover:border-blue-500 transition-all duration-200 hover:scale-110 shadow-lg">
              <ChevronRight size={20} />
            </button>
            <div className="overflow-hidden relative pl-5 pt-4 pb-4 mx-10" style={{ maskImage: "linear-gradient(to right, black 85%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, black 85%, transparent 100%)", }}>
              <div ref={trackRef} className="flex gap-5 transition-transform duration-[650ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                
                {projects.map((p, i) => (
                  <div key={i} className="flex-shrink-0 w-[calc(33.333%-14px)] min-w-[280px] bg-[#111118] border border-zinc-800 rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 hover:scale-[1.025] hover:border-blue-500 hover:shadow-[0_20px_40px_rgba(59,130,246,0.18)]">
                    <div className="w-full h-44 overflow-hidden">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                    </div>

                    <div className="p-5 flex flex-col gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {p.tags.map((tag) => (
                          <span key={tag} className="text-[10px] font-semibold uppercase tracking-wider text-blue-400 border border-blue-500/30 bg-blue-500/[0.08] px-2.5 py-1 rounded group-hover:bg-blue-500/20 transition-colors">{tag}</span>
                        ))}
                      </div>

                      <h3 className="font-bold text-lg text-slate-100 leading-snug">{p.title}</h3>
                      <p className="text-sm text-zinc-500 leading-relaxed">{p.desc}</p>
                      <div className="flex gap-3 mt-1">
                        {p.github && (
                          <a href={p.github} target="_blank" rel="noopener noreferrer">
                            <div className="flex items-center gap-2"> <GitHubIcon sx={{ fontSize: 20 }} /></div>
                          </a>
                        )}

                        {p.live && (
                          <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-blue-400 transition-colors hover:scale-110 transform duration-150">
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-5">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-blue-500 scale-125" : "bg-zinc-700 hover:bg-zinc-500"}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};