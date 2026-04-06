"use client";

import { Button } from "@/src/shared/button";
import { Mail } from "lucide-react";
import { Icons } from "@/src/utils/icons";
import { MeiosContato } from "../modal/meio-contato";
import { useState } from "react";

export function Contato() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen text-white">
      <section className="flex flex-col justify-center items-center text-center py-20 px-6">
        <span className="flex items-center justify-center w-25 h-25 rounded-full text-blue-400 bg-blue-500/20">
          <Icons.Raio />
        </span>

        <h1 className="md:text-7xl font-bold mb-10 ">
          Vamos construir algo
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> incrível </span> 
          juntos
        </h1>

        <p className="text-gray-400 max-w-xl mb-7 text-sm md:text-xl mb-10">
          Estou sempre aberta a novas oportunidades e desafios técnicos de alto impacto
        </p>

        <div className="flex gap-4">
          <Button onClick={() => setOpen(true)} variant="contained" IconEsquerda={<Mail size={18} />}>Fale Comigo</Button>
          <button onClick={() => window.open("https://github.com/Bia07003MuNiz", "_blank")} className="hover:scale-105 w-14 h-14 rounded-2xl bg-[#111] border border-zinc-700 flex items-center justify-center hover:border-zinc-500 transition">
            <Icons.Github />
          </button>
          <button onClick={() => window.open("https://www.linkedin.com/in/bianca-muniz-7a664b209/", "_blank")} className="hover:scale-105 w-14 h-14 rounded-2xl bg-[#111] border border-zinc-700 flex items-center justify-center hover:border-zinc-500 transition">
            <Icons.Linkedin />
          </button>
        </div>
      </section>
      <MeiosContato open={open} onClose={() => setOpen(false)} />
    </div>
  );
}