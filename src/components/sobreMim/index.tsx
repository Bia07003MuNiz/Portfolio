"use client";

import { Code, Monitor, Layers } from "lucide-react";
import { motion } from "framer-motion";

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

export function SobreMim() {
  return (
    <div className="text-white py-20 flex items-center">
      <section className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 px-6 md:px-20">

        <motion.div
          className="flex-1 w-full lg:text-left"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 variants={item} className="text-4xl md:text-6xl font-bold mb-2">
            Sobre Mim
          </motion.h2>

          <motion.p variants={item} className="text-zinc-400 text-md font-semibold mb-3">
            Um pouco sobre minha trajetória e foco.
          </motion.p>

          <motion.div variants={item} className="w-12 h-1 bg-blue-600 rounded-full mb-8 lg:mx-0" />

          <motion.p
            variants={item}
            className="text-zinc-400 text-sm font-semibold md:text-base leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
          >
            Desenvolvedora Fullstack com foco em aplicações web modernas, escaláveis e
            bem estruturadas. Trabalho com TypeScript, React, Next.js e Node.js no
            dia a dia - do design de APIs REST à interface final - sempre priorizando
            código limpo e boas práticas. Tenho experiência com PostgreSQL, Docker e
            sistemas completos com autenticação e controle de usuários, o que me deu
            uma visão real de como aplicações funcionam de ponta a ponta.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            variants={container}
          >
            <motion.div variants={item} className="border border-zinc-800 rounded-xl px-5 py-4 w-full sm:w-[150px] bg-zinc-900/80 transition-all duration-200 hover:scale-105 hover:border-blue-800 flex flex-col items-center lg:items-start">
              <Code size={17} className="text-blue-400 mb-3" />
              <span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Experiência</span>
              <span className="text-white font-bold text-sm">+2 Anos</span>
            </motion.div>

            <motion.div variants={item} className="border border-zinc-800 rounded-xl px-5 py-4 w-full sm:w-[150px] bg-zinc-900/80 transition-all duration-200 hover:scale-105 hover:border-blue-800 flex flex-col items-center lg:items-start">
              <Monitor size={17} className="text-blue-400 mb-3" />
              <span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Foco</span>
              <span className="text-white font-bold text-sm">Aplicações Web</span>
            </motion.div>

            <motion.div variants={item} className="border border-zinc-800 rounded-xl px-5 py-4 w-full sm:w-[150px] bg-zinc-900/80 transition-all duration-200 hover:scale-105 hover:border-blue-800 flex flex-col items-center lg:items-start">
              <Layers size={17} className="text-blue-400 mb-3" />
              <span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Perfil</span>
              <span className="text-white font-bold text-sm">Fullstack</span>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center items-center w-full mt-10 lg:mt-0"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative flex items-center justify-center w-full max-w-[480px]">
            <div className="absolute hidden md:block w-full h-full bg-[#0d0d0d] border border-white/5 rounded-[45px] -rotate-6 opacity-50"></div>
            <div className="absolute hidden md:block w-full h-full bg-[#111] border border-white/5 rounded-[40px] -rotate-3"></div>
            <div className="absolute hidden md:block w-full h-full bg-[#111] border border-white/5 rounded-[40px] rotate-2"></div>

            <div className="relative w-full h-auto bg-[#0a0a0a] border border-blue-500/20 rounded-[32px] shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col p-6 md:p-8">

              <div className="flex items-center mb-6">
                <span className="text-blue-400 font-mono font-bold mr-2">{`>_`}</span>
                <span className="text-zinc-500 text-[10px] tracking-widest uppercase font-mono">
                  analise_perfil.tsx
                </span>
              </div>

              <div className="flex-1 font-mono text-sm leading-relaxed text-zinc-300">
                <p>
                  <span className="text-purple-400">export const</span> <span className="text-blue-300">AnalisarPerfil</span> <span className="text-purple-400">=</span> {'({'} <span className="text-orange-300">gostouDoPerfil</span> {'}: { '} <span className="text-orange-300">gostouDoPerfil</span><span className="text-purple-400">:</span> <span className="text-blue-300">boolean</span> {'})'} <span className="text-purple-400">{'=> {'}</span>
                </p>

                <p className="ml-4 mt-2">
                  <span className="text-purple-400">const</span> <span className="text-blue-200">decisao</span> <span className="text-purple-400">=</span> gostouDoPerfil
                </p>

                <p className="ml-8">
                  <span className="text-purple-400">?</span> <span className="text-green-400">"Excelente! Quando começo? 🚀"</span>
                </p>

                <p className="ml-8">
                  <span className="text-purple-400">:</span> <span className="text-green-400">"Erro de lógica: olhe de novo e repense. 😉"</span>;
                </p>

                <p className="ml-4 mt-4">
                  <span className="text-blue-300">console</span>.<span className="text-yellow-200">log</span>(<span className="text-green-400">`[STATUS DA VAGA]: <span className="text-blue-400">{'${'}</span>decisao<span className="text-blue-400">{'}'}</span>`</span>);
                </p>

                <p className="ml-4 mt-4">
                  <span className="text-purple-400">return</span> (
                </p>

                <p className="ml-8">
                  <span className="text-zinc-400">{'<'}</span><span className="text-blue-400">button</span> <span className="text-blue-200">className</span><span className="text-purple-400">=</span><span className="text-green-400">"btn-contratar"</span><span className="text-zinc-400">{'>'}</span>
                </p>

                <p className="ml-12 text-zinc-100">
                  {'{'}decisao{'}'}
                </p>

                <p className="ml-8">
                  <span className="text-zinc-400">{'</'}</span><span className="text-blue-400">button</span><span className="text-zinc-400">{'>'}</span>
                </p>

                <p className="ml-4">);</p>
                <p>{'};'}</p>
              </div>
              <div className="flex items-center gap-2 mt-auto pt-4 border-t border-white/5">
                <div className="w-2 h-2 bg-[#00ff41] rounded-full shadow-[0_0_8px_#00ff41]"></div>
                <span className="text-[10px] font-mono text-[#00ff41] opacity-80 uppercase tracking-wider">
                  Portfólio
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}