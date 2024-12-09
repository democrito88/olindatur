import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Cartao from "../../components/Cartao";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Cabecalho from "../../components/Cabecalho";
import BotaoVoltar from "../../components/BotaoVoltar";

export default function Categoria() {
    const { pagina } = useParams();
    const navigate = useNavigate(); // Adicionado para navegação programática
    const { dados, estado, mensagem, i18n } = useContext(AppContext);
    const currentLanguage = i18n.language;

    // Adicionando navegação programática
    useEffect(() => {
        if (!dados[pagina]) {
            navigate("/not-found"); // Redireciona para uma página de erro ou outra rota, caso a categoria não exista
        }
    }, [dados, pagina, navigate]);

    return (
        <>
            <Cabecalho />
            <Container className="mt-4">
                <BotaoVoltar />
                <Row>
                    {estado === 0 || estado === 1 ? (
                        <p>{mensagem}</p>
                    ) : (
                        dados[pagina]?.map((objeto, index) => (
                            <Col key={index} lg={4} md={6} sm={12}>
                                <Cartao
                                    id={objeto.id}
                                    name={objeto.name}
                                    descricao={objeto.descricao[currentLanguage]}
                                    img={objeto?.images[0]}
                                    mapa={objeto.linkMapa}
                                    categoria={pagina}
                                />
                            </Col>
                        ))
                    )}
                </Row>
            </Container>
        </>
    );
}
