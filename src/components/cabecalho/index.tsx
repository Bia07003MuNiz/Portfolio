import { Curriculo } from "@/src/components/modal/curriculo";

export function Cabecalho() {
  return (
    <div className="flex items-center justify-between px-6 md:px-20 py-4 sticky top-0 z-50 backdrop-blur-md bg-black/40">
      
      <div className="text-xl font-bold flex items-end gap-[1px]">       
        BC
        <span className="w-1 h-1 rounded-full bg-[#2b7fff] inline-block mb-1.5" />
      </div>

      <nav className="flex gap-11">
        <a href="#sobre" className="text-sm hover:text-blue-400 transition">SOBRE MIM</a>
        <a href="#habilidades" className="text-sm hover:text-blue-400 transition">HABILIDADES</a>
        <a href="#projetos" className="text-sm hover:text-blue-400 transition">PROJETOS</a>
        <a href="#experiencia" className="text-sm hover:text-blue-400 transition">EXPERIÊNCIA</a>
        <a href="#contato" className="text-sm hover:text-blue-400 transition">CONTATO</a>
      </nav>

      <div className="text-xl font-bold flex items-end gap-[1px]">
        <Curriculo />
      </div>

    </div>
  );
}