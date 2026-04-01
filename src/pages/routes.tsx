import { Cabecalho } from "@components/cabecalho/cabecalho";
import { Home } from "@components/home/home";
import { SobreMim } from "../components/sobreMim";
import { Habilidades } from "../components/habilidades";

const PaginaPrincipal = () => {
    return (
        <>
            <Cabecalho />
            <Home />
            <SobreMim />
            <Habilidades />
        </>
    )
}

export default PaginaPrincipal