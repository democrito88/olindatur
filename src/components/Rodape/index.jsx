import React from 'react';
import "./Rodape.css"
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";

function Rodape() {
    return (
        <footer className="rodape mt-4">
            <div className="container">
                <div className="row mt-3 d-flex flex-row align-itens-baseline" >
                    <div className="col-sm">
                        <img src='/brasao.png' width={'200px'} className='left' />
                    </div>
                    <div className="col-sm ">
                        <img src="/fSemFundo.png" width="50px" alt="Logo Olindatur" /><b>Olindatur &copy;</b>
                    </div>
                    <div className="col-sm link-social">
                        <a href="#">
                            <IoLogoYoutube size={'35px'} />
                        </a>
                        <a href="#">
                            <FaFacebookSquare size={'35px'} />
                        </a>
                        <a href="#">
                            <FaXTwitter size={'35px'} />
                        </a>
                        <a href="#">
                            <SiInstagram size={'35px'} />
                        </a>

                    </div>
                </div>
            </div>
            <p><b>Prefeitura Municipal de Olinda - Todos os direitos reservados.</b></p>
        </footer>
    );
}

export default Rodape;