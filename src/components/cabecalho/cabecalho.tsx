import { Curriculo } from "@components/curriculo/curriculo";
import { ConteinerPrincipal, Conteiner, Nav, Link, CirculoAzul } from "./styles";

export function Cabecalho() {
    return (
        <ConteinerPrincipal>
            <Conteiner>
                BC
                <CirculoAzul />
            </Conteiner>
            <Nav>
                <Link href="/about" className="text-sm" >SOBRE MIM</Link>
                <Link href="/tecnologias" className="text-sm">TECNOLOGIAS</Link>
                <Link href="/projects" className="text-sm">PROJETOS</Link>
                <Link href="/contact" className="text-sm">CONTATO</Link>
            </Nav>
            <Conteiner>
                <Curriculo />
            </Conteiner>
        </ConteinerPrincipal>
    )
}