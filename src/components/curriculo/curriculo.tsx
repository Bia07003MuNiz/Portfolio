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
        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-zinc-700 
                   text-sm font-medium text-white transition-all duration-200 
                   hover:border-blue-500 hover:scale-105 cursor-pointer bg-transparent"
      >
        <FileText size={16} />
        Currículo
      </button>

      {/* Modal */}
      <Modal isOpen={aberto} onClose={() => setAberto(false)}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center">
              <FileText size={20} className="text-blue-400" />
            </div>
            <div>
              <h2 className="text-white font-semibold text-base">Currículo</h2>
              <p className="text-zinc-500 text-xs">Bianca Caroline</p>
            </div>
          </div>

          {/* Seções */}
          <div className="mb-5">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">
              Visualização do Documento
            </span>

            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-blue-500" />
                Dados Pessoais & Contato
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-blue-500" />
                Habilidades Técnicas
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-blue-500" />
                Projetos em Destaque
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-blue-500" />
                Experiência Profissional
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-blue-500" />
                Formação Acadêmica
              </li>
            </ul>
          </div>

          {/* Info do PDF */}
          <div className="flex items-center justify-between text-[11px] text-zinc-600 mb-4">
            <span>PDF · Atualizado em Jan/2025</span>
            <span>~2 páginas</span>
          </div>

          {/* Botão Download */}
          <a
            href="/curriculo.pdf"
            download
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 
                       text-white font-medium text-sm transition-all duration-200 hover:scale-[1.02]"
          >
            <Download size={16} />
            Baixar Currículo em PDF
          </a>

          <p className="text-center text-[11px] text-zinc-600 mt-3">
            Documento completo em português e inglês
          </p>
        </div>
      </Modal>
    </>
  );
}
