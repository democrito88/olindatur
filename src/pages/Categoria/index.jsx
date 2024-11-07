import { useParams } from "react-router-dom";
//import dados from "../../assets/json/database.json";
import { Col, Container, Row } from "react-bootstrap";
import Cartao from "../../components/Cartao";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Cabecalho from "../../components/Cabecalho";

export default function Categoria() {
    const { pagina } = useParams();
    const { dados, estado, mensagem } = useContext(AppContext);

    return (

        <>
            <Cabecalho />
            <Container className="mt-4 ">
                <Row>
                    {estado === 0 || estado === 1 ?
                        <p>{mensagem}</p>
                        :
                        dados[pagina]?.map((objeto, index) => (
                            <Col key={index} md={3}  >
                                <Cartao
                                    id={objeto.id}
                                    name={objeto.name}
                                    descricao={objeto.descricao}
                                    img={objeto.url}
                                    mapa={objeto.linkMapa}
                                    categoria={pagina}
                                />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    );
}