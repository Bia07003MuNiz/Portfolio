"use client";

import { Button } from "@/src/shared/button";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { MeiosContato } from "../modal/meio-contato";

export function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-white">
      <section className="flex flex-col items-start justify-center text-left py-25 px-6 md:px-20  mx-auto">
        <span className="mb-6 text-xs px-4 py-1 font-bold rounded-full border border-blue-500 text-blue-400 bg-blue-500/10">
          DISPONÍVEL PARA NOVOS PROJETOS
        </span>

        <h1 className="text-4xl md:text-8xl font-bold mb-5">
          Bianca <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Caroline
          </span>
        </h1>

        <p className="text-gray-400 max-w-2xl mb-7 text-sm md:text-xl">
          Desenvolvedora Fullstack que <span className="text-white font-medium">
            transforma ideias em aplicações reais
          </span>, sempre em busca de evolução, novos aprendizados e soluções cada vez mais eficientes.
        </p>

        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <Button href="#projetos" IconDireita={<ChevronRight size={18} />} className="w-full md:w-auto">Ver Projetos</Button>
          <Button onClick={() => setOpen(true)} variant="outline" className="w-full md:w-auto">Fale Comigo</Button>
        </div>

        <MeiosContato open={open} onClose={() => setOpen(false)} />
      </section>
    </div>
  );
}