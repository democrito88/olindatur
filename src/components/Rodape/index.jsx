import React, { useContext } from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { AppContext } from "../../context/AppContext";
import brasao from '../../assets/img/brasao.png';
import sombrinhaSemFundo from "../../assets/img/fSemFundo.png";

function Rodape() {
  const { t } = useContext(AppContext);

  return (
    <footer className="rodape mt-4">
      <div className="container">
        <div className="row mt-3 d-flex flex-row align-items-baseline justify-content-center">
          <div className="col-sm">
            <img src={brasao} width={'200px'} className='left' />
          </div>
          <div className="col-sm text-center">
            <img src={sombrinhaSemFundo} width="50px" alt="Logo Olindatur" />
            <b className='title'>OlindaTur &copy;</b>
          </div>
          <div className="col-sm text-center link-social">
            <a href="https://www.facebook.com/prefeituradeolinda">
              <FaFacebookSquare size={'35px'} color='black' />
            </a>
            <a href="https://www.instagram.com/pref_olinda/">
              <SiInstagram size={'35px'} color='black' />
            </a>
          </div>
        </div>
        <div className='row text-center'>
          <p><b>Prefeitura Municipal de Olinda - {t('copyright')}.</b></p>
        </div>
      </div>
    </footer>
  );
}

export default Rodape;
