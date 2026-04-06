import { Code, Monitor, Layers } from "lucide-react";

export function SobreMim() {
  return (
    <div className="min-h-screen text-white">
      <section className="flex flex-col md:flex-row items-start justify-between gap-6 px-6 md:px-20 mx-auto">

        {/* Sobre Mim - texto */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-6xl font-bold mb-2">Sobre Mim</h2>
          <p className="text-zinc-400 text-md font-semibold mb-3">Um pouco sobre minha trajetória e foco. </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full mb-8" />

          <p className="text-zinc-400 text-sm font-semibold md:text-base leading-relaxed mb-10 max-w-lg">
            Desenvolvedora Fullstack com foco em aplicações web modernas, escaláveis e
            bem estruturadas. Trabalho com TypeScript, React, Next.js e Node.js no
            dia a dia - do design de APIs REST à interface final - sempre priorizando
            código limpo e boas práticas. Tenho experiência com PostgreSQL, Docker e
            sistemas completos com autenticação e controle de usuários, o que me deu
            uma visão real de como aplicações funcionam de ponta a ponta.
          </p>

          <div className="flex gap-3">
            <div className="border border-zinc-800 rounded-xl px-5 py-4 w-[150px] bg-zinc-900/80 transition-all duration-200 hover:scale-105 hover:border-blue-800">
              <Code size={17} className="text-blue-400 mb-3" />
              <span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-1 md:text-xs">Experiência</span>
              <span className="text-white font-bold text-sm">+2 Anos</span>
            </div>

            <div className="border border-zinc-800 rounded-xl px-5 py-4 w-[150px] bg-zinc-900/80 transition-all duration-200 hover:scale-105 hover:border-blue-800">
              <Monitor size={17} className="text-blue-400 mb-3" />
              <span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-1 md:text-xs">Foco</span>
              <span className="text-white font-bold text-sm">Aplicações Web</span>
            </div>

            <div className="border border-zinc-800 rounded-xl px-5 py-4 w-[150px] bg-zinc-900/80 transition-all duration-200 hover:scale-105 hover:border-blue-800">
              <Layers size={17} className="text-blue-400 mb-3" />
              <span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-1 md:text-xs">Perfil</span>
              <span className="text-white font-bold text-sm">Fullstack</span>
            </div>
          </div>
        </div>

        {/* imagem */}
        <div className="flex-1 flex justify-center items-end self-end">
          <div className="relative flex items-center">
            <div className="absolute w-[500px] h-[500px] bg-[#0d0d0d] border border-white/5 rounded-[45px] -rotate-6 transform opacity-50"></div>
            <div className="absolute w-[490px] h-[490px] bg-[#111] border border-white/5 rounded-[40px] -rotate-3 transform"></div>
            <div className="absolute w-[480px] h-[480px] bg-[#111] border border-white/5 rounded-[40px] rotate-2 transform"></div>
            
            <div className="relative w-[480px] h-[480px] bg-[#0a0a0a] border border-blue-500/20 rounded-[32px] shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col p-8 overflow-hidden">
              
              <div className="flex items-center mb-6">
                <span className="text-blue-400 font-mono font-bold mr-2">{`>_`}</span>
                <span className="text-zinc-500 text-xs tracking-widest uppercase font-mono">analise_perfil.tsx</span>
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

                <p className="mt-2 text-zinc-500">
                  <span className="animate-pulse font-bold text-blue-400 text-lg">_</span>
                </p>
              </div>
              <div className="flex items-center gap-2 mt-auto pt-4 border-t border-white/5">
                <div className="w-2 h-2 bg-[#00ff41] rounded-full shadow-[0_0_8px_#00ff41]"></div>
                <span className="text-[10px] font-mono text-[#00ff41] opacity-80 uppercase tracking-wider">
                  Portfólio
                </span>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
}