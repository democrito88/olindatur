import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { Col, Container, Row } from "react-bootstrap";
import Slideshow from "../../components/Slideshow";
import { FaVolumeUp } from "react-icons/fa";
import { TbBrandGoogleMaps } from "react-icons/tb";
import BotaoVoltar from "../../components/BotaoVoltar";

function PontoTuristico() {
  const { pagina, id } = useParams();
  const navigate = useNavigate();
  const { dados, estado, mensagem, t, i18n } = useContext(AppContext);
  const currentLanguage = i18n.language;

  console.log("dados:", dados);
  console.log("pagina:", pagina);
  console.log("id:", id);

  // Return null while waiting for the navigation to complete
  if (!dados || !dados[pagina] || !dados[pagina][id - 1]) {
    return null;
  }

  const point = dados[pagina][id - 1];

  const speakText = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(
        `${point.name}. ${point.descricao[currentLanguage]}`
      );
      utterance.lang = "pt";
      utterance.pitch = 1;
      utterance.rate = 1;
      window.speechSynthesis.speak(utterance);
    } else {
      alert("API Web Speech não é suportada neste navegador.");
    }
  };

  return (
    <>
      {estado === 0 || estado === 1 ? (
        <p>{mensagem}</p>
      ) : (
        <Container className="py-2">
          <BotaoVoltar />
          <Row className="responsivo">
            <Col sm={12} lg={8}>
              <Slideshow imagens={point.images} />
            </Col>
            <Col sm={12} lg={4}>
              <h3 className="mt-2 text-center title">{point.name}</h3>
              <p>{point.descricao[currentLanguage]}</p>
              <div className="d-flex justify-content-start mt-3">
                <FaVolumeUp
                  size={40}
                  onClick={speakText}
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                />
                <a
                  href={`https://maps.app.goo.gl/${point.linkMapa}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-mapa"
                >
                  <TbBrandGoogleMaps size={40} />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default PontoTuristico;
