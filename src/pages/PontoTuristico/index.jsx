import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slideshow from "../../components/Slideshow";
import { FaVolumeUp } from "react-icons/fa";
import { TbBrandGoogleMaps } from "react-icons/tb";

function PontoTuristico() {
  const { pagina, id } = useParams();
  const { dados, estado, mensagem } = useContext(AppContext);

  const speakText = () => {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(dados[pagina][id - 1].name+". "+dados[pagina][id - 1].descricao);
        utterance.lang = 'pt';
        utterance.pitch = 1;
        utterance.rate = 1;
        window.speechSynthesis.speak(utterance);
    } else {
        alert('API Web Speech não é suportada neste navegador.');
    }
  };

  return (
    <>
      {estado === 0 || estado === 1 ? (
        <p>{mensagem}</p>
      ) : (
        <Container className="py-2">
          <Row className="responsivo">
            <Col sm={12} lg={8}>
              <Slideshow imagens={dados[pagina][id - 1].images} />
            </Col>
            <Col sm={12} lg={4}>
              <h3 className="mt-2 text-center">
                {dados[pagina][id - 1].name}
              </h3>
              <p>{dados[pagina][id - 1].descricao.pt}</p>
              <div className="d-flex justify-content-start mt-3">
                <FaVolumeUp size={40} onClick={speakText} style={{ cursor: 'pointer', marginLeft: '10px' }} />
                <a href={`https://maps.app.goo.gl/${dados[pagina][id - 1].linkMapa}`} target="_blank" rel="noopener noreferrer" className='link-mapa'>
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
