import { Code, Monitor, Layers } from "lucide-react";

export function SobreMim() {
  return (
    <div className="min-h-screen text-white">
      <section className="flex flex-col md:flex-row items-start justify-between gap-6 py-32 px-6 md:px-20 mx-auto">

        <div className="flex-1">
          <h2 className=" md:text-6xl font-bold mb-2">Sobre Mim</h2>
          <p className="text-zinc-400 text-md font-semibold mb-3">Um pouco sobre minha trajetória e foco. </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full mb-8" />

          <p className="text-zinc-400 text-sm font-semibold md:text-base leading-relaxed mb-10 max-w-lg">
            Tenho 22 anos e comecei a programar aos 20. Meu foco principal é
            frontend, criando interfaces modernas e performáticas que encantam
            usuários. Também atuo no backend desenvolvendo APIs robustas e
            escaláveis, garantindo que o coração da aplicação seja tão sólido quanto
            sua face.
          </p>

          <div className="flex gap-3">
            <div className="border border-zinc-800 rounded-xl px-5 py-4 w-[150px] bg-zinc-900/80 transition-all duration-200 hover:scale-105 hover:border-blue-800">
              <Code size={17} className="text-blue-400 mb-3" />
              <span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-1 md:text-xs">Experiência</span>
              <span className="text-white font-bold text-sm">2+ Anos</span>
            </div>

            <div className="border border-zinc-800 rounded-xl px-5 py-4 w-[150px] bg-zinc-900/80 transition-all duration-200 hover:scale-105 hover:border-blue-800">
              <Monitor size={17} className="text-blue-400 mb-3" />
              <span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-1 md:text-xs">Foco</span>
              <span className="text-white font-bold text-sm">UI/UX</span>
            </div>

            <div className="border border-zinc-800 rounded-xl px-5 py-4 w-[150px] bg-zinc-900/80 transition-all duration-200 hover:scale-105 hover:border-blue-800">
              <Layers size={17} className="text-blue-400 mb-3" />
              <span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-1 md:text-xs">Perfil</span>
              <span className="text-white font-bold text-sm">Fullstack</span>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-end self-end">
          <div className="relative flex items-center">
            <div className="absolute w-[500px] h-[500px] bg-[#0d0d0d] border border-white/5 rounded-[45px] -rotate-6 transform opacity-50"></div>
            <div className="absolute w-[490px] h-[490px] bg-[#111] border border-white/5 rounded-[40px] -rotate-3 transform"></div>
            <div className="absolute w-[480px] h-[480px] bg-[#111] border border-white/5 rounded-[40px] rotate-2 transform"></div>
            <div className="relative w-120 h-120 bg-[#0a0a0a] border border-white/10 rounded-[32px] shadow-2xl flex flex-col p-8 overflow-hidden">
              
            <div className="flex-1 flex items-center justify-center">
                <svg className="w-40 h-40 text-[#161616]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="4 17 10 11 4 5"></polyline>
                <line x1="12" y1="19" x2="20" y2="19"></line>
              </svg>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00ff41] rounded-full shadow-[0_0_8px_#00ff41]"></div>
              <span className="text-[10px] font-mono text-[#00ff41] opacity-80 uppercase tracking-wider">
                Sistema.ativo_verdadeiro
              </span>
            </div>
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
}