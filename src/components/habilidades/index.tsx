import { Monitor, Server, Settings } from "lucide-react";

const frontendSkills = ["React", "TypeScript", "Next.js", "Material UI", "Tailwind CSS", "Framer Motion"];
const backendSkills = ["Node.js", "Express", "Prisma", "PostgreSQL", "REST APIs"];
const ferramentasSkills = ["Docker", "Zod", "React Hook Form", "Git", "Vitest"];

export function Habilidades() {
  return (
    <div className="text-white relative">

      {/* Fundo com véu sutil */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      <section className="relative z-10 py-32 px-6 md:px-20 mx-auto">

        <h2 className="md:text-6xl font-bold mb-2">Habilidades</h2>
        <p className="text-zinc-400 text-md font-semibold mb-3">
          As tecnologias que uso para transformar ideias em realidade.
        </p>

        <div className="w-30 h-1 bg-blue-600 rounded-full mb-14" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Frontend */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Monitor size={18} className="text-[#51a2ff]" />
              <h3 className="text-[#51a2ff] font-bold text-sm">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm rounded-lg border border-zinc-700 bg-zinc-900/80 text-zinc-300 
                             hover:border-[#51a2ff]/60 hover:text-white hover:scale-105 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Server size={18} className="text-purple-400" />
              <h3 className="text-purple-400 font-bold text-sm">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm rounded-lg border border-zinc-700 bg-zinc-900/80 text-zinc-300 
                             hover:border-purple-500/50 hover:text-white hover:scale-105 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Ferramentas & Mais */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Settings size={18} className="text-[#00d492]" />
              <h3 className="text-[#00d492] font-bold text-sm">Ferramentas & Mais</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {ferramentasSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm rounded-lg border border-zinc-700 bg-zinc-900/80 text-zinc-300 
                             hover:border-[#00d492]/50 hover:text-white hover:scale-105 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
