import { Button } from "@/src/shared/button";
import { ChevronRight, Mail } from "lucide-react";

export function Home() {
  return (
    <div className="min-h-screen text-white">

      {/* HERO */}
      <section className="flex flex-col items-start justify-center text-left py-32 px-6 md:px-20  mx-auto">
        
         <span className="mb-6 text-xs px-4 py-1 font-bold rounded-full border border-blue-500 text-blue-400 bg-blue-500/10">
            DISPONÍVEL PARA NOVOS PROJETOS
         </span>

        <h1 className="md:text-8xl font-bold mb-5 ">
          Bianca <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Caroline
          </span>
        </h1>

        <p className="text-gray-400 max-w-xl mb-7 text-sm md:text-xl">
          Desenvolvedora Fullstack — <span className="text-white font-medium">Foco em Frontend.</span> 
          Criando aplicações web modernas, escaláveis e de alta performance.
        </p>

        <div className="flex gap-4">
          <Button href="/projects" IconDireita={<ChevronRight size={18} />}>Ver Projetos</Button>
          <Button href="/contact" variant="outline">Fale Comigo</Button>
        </div>

      </section>

    </div>
    
  );
}