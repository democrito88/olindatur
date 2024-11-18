import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Slideshow from "../../components/Slideshow";
import { FaVolumeUp } from "react-icons/fa";
import { TbBrandGoogleMaps } from "react-icons/tb";

function PontoTuristico() {
  const { pagina, id } = useParams();
  const { dados, estado, mensagem, i18n } = useContext(AppContext);
  const currentLanguage = i18n.language;

  const speakText = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(dados[pagina][id - 1].name + ". " + dados[pagina][id - 1].descricao);
      utterance.lang = 'pt';
      utterance.pitch = 1;
      utterance.rate = 1;
      window.speechSynthesis.speak(utterance);
    } else {
      alert('API Web Speech não é suportada neste navegador.');
    }
  };

  // Verificar se a página atual é 'praias'
  const isPraia = pagina === 'praias';

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
              <p>{dados[pagina][id - 1].descricao[currentLanguage]}</p>
              <div className="d-flex justify-content-start mt-3">
                <FaVolumeUp size={40} onClick={speakText} style={{ cursor: 'pointer', marginLeft: '10px' }} />
                <a href={`https://maps.app.goo.gl/${dados[pagina][id - 1].linkMapa}`} target="_blank" rel="noopener noreferrer" className='link-mapa'>
                  <TbBrandGoogleMaps size={40} />
                </a>
              </div>
            </Col>
            <Card className="mt-5">
              <Col sm={12} lg={12} className="d-flex justify-content-center mt-4 ">
                {/* Se for uma praia, exibe os bares */}
                {isPraia && dados[pagina][id - 1].bares && dados[pagina][id - 1].bares.length > 0 && (
                  <div className="w-100">
                    <h4 className="text-center mb-4">Bares Próximos</h4>
                    {dados[pagina][id - 1].bares.map(bar => (
                      <div key={bar.id} className="mt-3">
                        <h5 className="text-center bg-dark text-white p-2"><b>{bar.name}</b></h5>
                        <p className="text-center">{bar.descricao[currentLanguage]}</p>
                        <div className="text-center">
                          <a href={`https://maps.app.goo.gl/${bar.linkMapa}`} target="_blank" rel="noopener noreferrer" className='link-mapa'>
                            <TbBrandGoogleMaps size={30} />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </Col>
            </Card>
          </Row>
        </Container>
      )}
    </>
  );
}

export default PontoTuristico;
