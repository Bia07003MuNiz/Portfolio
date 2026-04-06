"use client";

import { Monitor, Server, Settings } from "lucide-react";
import { motion } from "framer-motion";

const frontendSkills = ["React", "Next.js", "TypeScript", "React Hook Form", "Recharts", "Tailwind", "Vite", "Material UI", "Emotion", "Zod"];
const backendSkills = ["Node.js", "REST APIs", "PostgreSQL", "Autenticação", "Arquitetura de APIs"];
const ferramentasSkills = ["Docker", "Git", "React Query", "Axios", "Jest", "ESLint"];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Habilidades() {
  return (
    <div className="text-white relative">
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative z-10 py-32 px-6 md:px-20 mx-auto">
        <motion.h2 variants={item} className="md:text-6xl font-bold mb-2">Habilidades</motion.h2>
        <motion.p variants={item} className="text-zinc-400 text-md font-semibold mb-3">
          As tecnologias que uso para transformar ideias em realidade.
        </motion.p>
        <motion.div variants={item} className="w-30 h-1 bg-blue-600 rounded-full mb-14" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div variants={item}>
            <div className="flex items-center gap-2 mb-5">
              <Monitor size={18} className="text-[#51a2ff]" />
              <h3 className="text-[#51a2ff] font-bold text-sm">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((skill) => (
                <motion.span
                  variants={item}
                  key={skill}
                  className="px-4 py-2 text-sm rounded-lg border border-zinc-700 bg-zinc-900/80 text-zinc-300 hover:border-[#51a2ff]/60 hover:text-white hover:scale-105 transition-all duration-200">
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item}>
            <div className="flex items-center gap-2 mb-5">
              <Server size={18} className="text-purple-400" />
              <h3 className="text-purple-400 font-bold text-sm">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((skill) => (
                <motion.span
                  variants={item}
                  key={skill}
                  className="px-4 py-2 text-sm rounded-lg border border-zinc-700 bg-zinc-900/80 text-zinc-300 hover:border-purple-500/50 hover:text-white hover:scale-105 transition-all duration-200">
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item}>
            <div className="flex items-center gap-2 mb-5">
              <Settings size={18} className="text-[#00d492]" />
              <h3 className="text-[#00d492] font-bold text-sm">Ferramentas & Mais</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {ferramentasSkills.map((skill) => (
                <motion.span
                  variants={item}
                  key={skill}
                  className="px-4 py-2 text-sm rounded-lg border border-zinc-700 bg-zinc-900/80 text-zinc-300 hover:border-[#00d492]/50 hover:text-white hover:scale-105 transition-all duration-200">
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}