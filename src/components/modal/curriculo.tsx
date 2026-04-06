"use client";

import { useState } from "react";
import { FileText, Download } from "lucide-react";
import { Modal } from "@/src/shared/modal";

export function Curriculo() {
  const [aberto, setAberto] = useState(false);

  return (
    <>
      {/* Botão Currículo */}
      <button
        onClick={() => setAberto(true)}
        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-zinc-700 text-sm font-medium text-white transition-all duration-200 hover:border-blue-500 hover:scale-105 cursor-pointer bg-transparent"
      >
        <FileText size={16} />
        Currículo
      </button>

      {/* Modal */}
      <Modal isOpen={aberto} onClose={() => setAberto(false)}>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center border border-blue-600">
              <FileText size={20} className="text-blue-600" />
            </div>
            <div>
              <h2 className="text-white font-semibold text-base">Currículo</h2>
              <p className="text-zinc-500 text-xs">Bianca Caroline</p>
            </div>
          </div>

          <div className="mb-5">
            <span className="text-[11px] uppercase tracking-widest text-zinc-500 font-semibold">
              Visualização do Documento
            </span>

            <div className="mt-3 bg-zinc-800/50 border border-zinc-700/60 rounded-xl px-4 py-3">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-zinc-500 font-medium">
                  <span className="w-1 h-1 rounded-full bg-zinc-500 flex-shrink-0 " />
                  Dados Pessoais & Contato
                </li>
                <li className="flex items-center gap-2 text-zinc-500 font-medium">
                  <span className="w-1 h-1 rounded-full bg-zinc-500 flex-shrink-0" />
                  Habilidades Técnicas
                </li>
                <li className="flex items-center gap-2 text-zinc-500 font-medium">
                  <span className="w-1 h-1 rounded-full bg-zinc-500 flex-shrink-0" />
                  Projetos em Destaque
                </li>
                <li className="flex items-center gap-2 text-zinc-500 font-medium">
                  <span className="w-1 h-1 rounded-full bg-zinc-500 flex-shrink-0" />
                  Experiência Profissional
                </li>
                <li className="flex items-center gap-2 text-zinc-500 font-medium">
                  <span className="w-1 h-1 rounded-full bg-zinc-500 flex-shrink-0" />
                  Formação Acadêmica
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-zinc-600 mb-4">
            <span>PDF · Atualizado em Abril/2026</span>
            <span>1 páginas</span>
          </div>

          <a
            href="/CURRICULO.pdf"
            download="Bianca_Caroline_Curriculo.pdf"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 
                       text-white font-medium text-sm transition-all duration-200 hover:scale-[1.02]"
          >
            <Download size={16} />
            Baixar Currículo em PDF
          </a>

          <p className="text-center text-[11px] text-zinc-600 mt-3">
            Documento completo em português
          </p>
        </div>
      </Modal>
    </>
  );
}
