import React, { useContext } from 'react';
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { AppContext } from "../../context/AppContext";
import styled from "styled-components";

// Componente de Rodapé com Styled Components
const Footer = styled.footer`
  background-color: ${({ theme }) => theme.navbarBackground};
  color: ${({ theme }) => theme.navbarText};
  padding: 20px 0;
`;

const FooterContent = styled.div`
  .left {
    max-width: 100%;
  }

  .link-social a {
    margin: 0 10px;
    color: ${({ theme }) => theme.navbarText};
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.navbarText === "#ffffff" ? "#f0f0f0" : "#333"};
    }
  }
`;

function Rodape() {
  const { t } = useContext(AppContext);

  return (
    <Footer className="rodape mt-4">
      <div className="container">
        <div className="row mt-3 d-flex flex-row align-items-baseline">
          <div className="col-sm">
            <img src={'../src/assets/img/brasao.png'} width={'200px'} className='left' />
          </div>
          <div className="col-sm">
            <img src={"../src/assets/img/fSemFundo.png"} width="50px" alt="Logo Olindatur" />
            <b>Olindatur &copy;</b>
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
      <p><b>Prefeitura Municipal de Olinda - {t('copyright')}.</b></p>
    </Footer>
  );
}

export default Rodape;
