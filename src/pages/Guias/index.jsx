import { Container, Row } from "react-bootstrap";
import guias from "../../assets/json/guias.json";
import Guia from "../../components/Guia";

export default function Guias(){
    return(
        <Container>
            {
                guias.map(guia => 
                    <Row className="py-5">
                        <Guia
                        key={guia.id}
                        nome={guia.nome}
                        descricao={guia.descricao}
                        atracoes={guia.atracoes}
                        />
                    </Row>
                )
            }
        </Container>
    );
}