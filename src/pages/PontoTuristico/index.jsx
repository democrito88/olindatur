import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { useEffect } from "react";

function PontoTuristico() {
  const { pagina, id } = useParams();
  const { dados, estado, mensagem } = useContext(AppContext);

  return (
    <>
      {estado === 0 || estado === 1 ? (
        <p>{mensagem}</p>
      ) : (
        <div className="container mb-5">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="card mt-5">
                <div className="card-header">
                  <h1 className="text-center">OlindaTur</h1>
                </div>
                <div className="card-body">
                  <div className="icon-container">
                    <a href="pontos.php">
                      <i
                        className="fa fa-arrow-left text-dark"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                  <div className="item d-flex align-items-center mt-5">
                    <div className="d-flex justify-content-center align-items-center mx-auto col-md-12 col-sm-12 col-12">
                      <div className="container tourist-spot">
                        <div className="row">
                          <div className="col-lg-12 col-sm-12 d-flex justify-content-center">
                            <img
                              className="img-thumbnail"
                              src={"../" + dados[pagina][id - 1].url}
                              alt={"Imagem da " + dados[pagina][id - 1].name}
                              loading="lazy"
                            />
                          </div>
                          <div
                            className="col-lg-12 col-md-12 col-sm-12 col-12"
                            id="content"
                          >
                            <h3 className="mt-2 text-center">
                              <b>{dados[pagina][id - 1].name}</b>
                              <br />
                              <br />
                              <p>{dados[pagina][id - 1].descricao}</p>
                            </h3>
                            <div className="d-flex justify-content-start mt-3">
                              <button className="btn fTamanho">
                                <i className="fa-solid fa-circle-play"></i>
                              </button>
                              <a
                                className="btn btn-dark ms-3"
                                href={
                                  "https://maps.app.goo.gl/$(dados[pagina][id - 1].linkMapa)"
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Ver Mapa
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div vw className="enabled">
                    <div vw-access-button className="active"></div>
                    <div vw-plugin-wrapper>
                      <div className="vw-plugin-top-wrapper"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PontoTuristico;
