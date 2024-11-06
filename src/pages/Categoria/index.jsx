import { useParams } from "react-router-dom";
//import dados from "../../assets/json/database.json";
import { Col, Container, Row } from "react-bootstrap";
import Cartao from "../../components/Cartao";
import useFetch from "../../hooks/useFetch";

export default function Categoria() {
    const { pagina } = useParams();
    const { dados, estado, mensagem } = useFetch("http://192.168.11.132:5173/json/database.json");

    return (
        <Container className="mt-4">
            <Row>
                {estado === 0 || estado === 1 ?
                    <p>{mensagem}</p>
                    :
                    dados[pagina]?.map((objeto, index) => (
                        <Col key={index} md={3}  >
                            <Cartao
                                name={objeto.name}
                                descricao={objeto.descricao}
                                img={objeto.url}
                                mapa={objeto.linkMapa}
                            />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
}