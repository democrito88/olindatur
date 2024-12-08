import "./Home.css";
import Cabecalho from "../../components/Cabecalho";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import mirante from "../../assets/img/mirante_caixa_dagua_olinda.jpg";
import tapioqueira from "../../assets/img/tapioqueira.jpg";
import { Accessibility } from "accessibility";

// Componente CategoriaBotao
function CategoriaBotao({ categoria, imagem }) {
  const { t } = useContext(AppContext);
  const imagemBackground = imagem || "https://placehold.co/400"; // Substitua com a imagem padrão.

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4">
      <Link to={`/${categoria}`}>
        <div
          className="botao-categoria rounded"
          style={{ backgroundImage: `url(${imagemBackground})` }}
        >
          <div className="botao-categoria-painel">
            <h4 className="botao-categoria-titulo capitalize title">
              {t(`cathegories.${categoria}`)}
            </h4>
          </div>
        </div>
      </Link>
    </div>
  );
}

// Componente Principal Home
function Home() {
  const { dados, estado, mensagem, t } = useContext(AppContext);

  // Inicializar o Accessibility no carregamento
  useEffect(() => {
    new Accessibility();
  }, []);

  const renderConteudo = () => {
    if (estado === 0 || estado === 1) {
      return <p>{mensagem}</p>;
    }

    if (!dados || Object.keys(dados).length === 0) {
      return <p>Nenhuma categoria disponível.</p>;
    }

    return Object.entries(dados).map(([categoria, items]) => (
      <CategoriaBotao
        key={categoria}
        categoria={categoria}
        imagem={items[0]?.images?.[0]}
      />
    ));
  };

  return (
    <>
      <Cabecalho />
      <div className="principal terceira">
        <div className="row d-flex flex-row flex-wrap mt-2">
          {renderConteudo()}
        </div>
      </div>
      <section>
        <Container className="pb-3">
          <Row className="primeira">
            <Col className="d-flex flex-column justify-content-center text-center">
              <h1 className="title">{t(`section1-titulo`)}</h1>
              <h5>{t("section1-texto1")}</h5>
              <h5>{t("section1-texto2")}</h5>
            </Col>
            <Col>
              <img
                className="rounded img-fluid"
                src={mirante}
                height={400}
                alt="Mirante Caixa D'água Olinda"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container className="py-3">
          <Row className="segunda">
            <Col>
              <img
                className="rounded img-fluid"
                src={tapioqueira}
                height={400}
                alt="Tapioqueira"
              />
            </Col>
            <Col className="d-flex flex-column justify-content-center text-center">
              <h1 className="title">{t("section2-titulo")}</h1>
              <h5>{t("section2-texto1")}</h5>
              <Link className="text-dark text-decoration-none" to={"/guias"}>
                <h4>{t("section2-texto2")}</h4>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
