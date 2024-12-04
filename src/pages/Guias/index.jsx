import { Container } from "react-bootstrap";
import guias from "../../assets/json/guias.json";
import Guia from "../../components/Guia";

export default function Guias(){
    return(
        <Container>
            {
                guias.map(guia => 
                    <Guia
                    key={guia.id}
                    nome={guia.nome}
                    descricao={guia.descricao}
                    atracoes={guia.atracoes}
                    />
                )
            }
        </Container>
    );
}