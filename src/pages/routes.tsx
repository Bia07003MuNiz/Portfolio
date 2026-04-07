import { Cabecalho } from "@/src/components/cabecalho";
import { Home } from "@/src/components/home";
import { SobreMim } from "@components/sobreMim";
import { Habilidades } from "@components/habilidades";
import { ProjetoDestaques } from "@components/projetoDestaques";
import { Experiencia } from "@components/experiencia";
import { Contato } from "@components/contato";
import { Rodape } from "@components/rodape";

const PaginaPrincipal = () => {
  return (
    <>
      <Cabecalho />
      <Home />
      <section id="sobre" className="scroll-mt-10"><SobreMim /></section>
      <section id="habilidades" className="scroll-mt-20"><Habilidades /></section>
      <section id="projetos"><ProjetoDestaques /></section>
      <section id="experiencia" className="scroll-mt-10"><Experiencia /></section>
      <section id="contato" className="scroll-mt-20"><Contato /></section>
      <Rodape />
    </>
  );
};

export default PaginaPrincipal;