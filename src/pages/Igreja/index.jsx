import { useState } from "react";
import { useParams } from "react-router-dom";
import igrejas from "../../assets/json/igrejas.json";

function Igreja() {
    const {id} = useParams();
    const igreja = igrejas.filter(igreja => igreja.id === id)[0];

    return(
        <>
            <div className='container mb-5'>
        <div className='row justify-content-center'>
            <div className='col-lg-6 col-md-8'>
                <div className='card mt-5'>
                    <div className='card-header'>
                        <h1 className='text-center'>OlindaTur</h1>
                    </div>
                    <div className='card-body'>
                        <div className='icon-container'>
                            <a href='igrejas.php'>
                                <i className='fa fa-arrow-left text-dark' aria-hidden='true'></i>
                            </a>
                        </div>
                        <div className='item d-flex align-items-center mt-5'>
                            <div className='d-flex justify-content-center align-items-center mx-auto col-md-12 col-sm-12 col-12'>
                                
                                    <div className="container tourist-spot">
                                        <div className="row">
                                            <div className="col-lg-12 col-sm-12 d-flex justify-content-center">
                                                <img className="img-thumbnail" src={"../"+igreja.url}  alt={"Imagem da "+igreja.name} loading="lazy" />
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-12" id="content">
                                                <h3 className="mt-2 text-center">
                                                    <b>{igreja.name}</b>
                                                    <br/><br/>
                                                    <p>{igreja.descricao}</p>
                                                </h3>
                                                <div className="d-flex justify-content-start mt-3">
                                                    <button className="btn fTamanho"  >
                                                        <i className="fa-solid fa-circle-play"></i>
                                                    </button>
                                                    <a className="btn btn-dark ms-3" href={"https://maps.app.goo.gl/$(igreja.linkMapa)"} target="_blank" rel="noopener noreferrer">
                                                        Ver Mapa
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div vw className='enabled'>
                            <div vw-access-button className='active'></div>
                            <div vw-plugin-wrapper>
                                <div className='vw-plugin-top-wrapper'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}

export default Igreja;