import { Globe } from "lucide-react";

const experiences = [
  {
    role: "Desenvolvedora Frontend",
    company: "Grupo Carvalho",
    period: { start: "Jan 2024", end: "Presente" },
    endIsPresent: true,
    desc: "Atuação principal no front-end com React e TypeScript, criando interfaces dinâmicas e escaláveis. Contribuo pontualmente no back-end quando as tasks exigem, implementando regras de negócio e operações CRUD com ORMs como Prisma e MikroORM. Seguindo metodologias ágeis, participação de code reviews e utilização do Azure DevOps para gestão de projetos.",
    tags: ["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL", "REST APIs", "Vite", "Zod", "Prisma", "Docker", "Material UI", "Git", "Clean Architecture"],
  },
  {
    role: "Suporte de TI",
    company: "Grupo Carvalho",
    period: { start: "Fev 2023", end: "Dez 2023" },
    endIsPresent: false,
    desc: "Diagnóstico e resolução de problemas de hardware, software e redes. Responsável pela instalação e configuração de equipamentos e pelo treinamento de usuários em sistemas internos.",
    tags: ["Redes", "Hardware", "Suporte técnico", "Treinamento"],
  },
  {
    role: "Auxiliar Administrativo",
    company: "Grupo Carvalho",
    period: { start: "Jan 2022", end: "Fev 2023" },
    endIsPresent: false,
    desc: "Apoio operacional em processos de leilão (Detran/DER), elaboração de notas fiscais, ofícios e planilhas com fórmulas. Operação de sistema proprietário e gestão de agendamentos e liberações.",
    tags: ["Excel avançado", "Nota fiscal", "Processos Detran/DER", "Sistema proprietário"],
  },
  {
    role: "Menor Aprendiz",
    company: "Fórum",
    period: { start: "Jan 2020", end: "Dez 2020" },
    endIsPresent: false,
    desc: "Primeiro contato com ambiente profissional: atendimento ao público, apoio administrativo e organização de documentos e pautas institucionais.",
    tags: ["Atendimento", "Word/Excel", "Organização"],
  },
];

export function Experiencia() {
  return (
    <div className="text-white relative">
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      <section className="relative z-10 py-16 px-6 md:px-20 mx-auto">
        {/* Cabeçalho */}
        <h2 className="md:text-6xl font-bold mb-2">Experiência Profissional</h2>
        <p className="text-zinc-400 text-md font-semibold mb-3">
          Os marcos profissionais que moldaram minha carreira.
        </p>

        <div className="w-50 h-1 bg-blue-600 rounded-full mb-14" />

        {/* Linha do tempo */}
        <div className="relative flex flex-col gap-6 mb-20">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-zinc-800" />

          {experiences.map((exp, i) => (
            <div key={i} className="flex gap-6 items-start group">
              <div className="relative z-10 mt-5 w-3.5 h-3.5 flex-shrink-0 rounded-full bg-blue-600 border-2 border-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />

              <div className="w-200 bg-zinc-900/60 border border-zinc-800 rounded-xl p-7 transition-all duration-300 hover:border-blue-500/50 hover:bg-zinc-900/80 hover:shadow-[0_4px_24px_rgba(59,130,246,0.08)]">

                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-white text-base">{exp.role}</h3>
                  <div className="flex items-center gap-2">
                    {exp.endIsPresent && (
                      <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-md">
                        Atual
                      </span> 
                    )}
                    <span className="text-xs font-semibold text-blue-300 px-2.5 py-1 rounded-md whitespace-nowrap">
                      {exp.period.start} · {exp.period.end}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-zinc-500 text-sm mb-3">
                  <Globe size={13} />
                  <span>{exp.company}</span>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {exp.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="text-xs text-zinc-400 border border-zinc-700 bg-zinc-800/60 px-3 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}