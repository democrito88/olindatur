import { useParams } from "react-router-dom";
import dados from "../../assets/json/database.json";
import { Col, Container, Row } from "react-bootstrap";
import Cartao from "../../components/Cartao";


export default function Categoria() {
    const { pagina } = useParams();
    const objetos = dados[pagina];

    return (
        <Container className="mt-4">
           
            <Row>
                {objetos.map((objeto, index) => (
                    <Col key={index} md={3} className="m-5" >
                        <Cartao
                            name={objeto.name}
                            descricao={objeto.descricao}
                            img={objeto.url}
                            mapa={objeto.linkMapa}

                        />

                    </Col>
                ))}
            </Row>
        </Container>
    );
}