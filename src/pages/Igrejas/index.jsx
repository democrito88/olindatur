import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import igrejas from "../../assets/json/igrejas.json";
import Cartao from "../../components/Cartao";
import { TbBrandGoogleMaps } from "react-icons/tb";

function Igrejas() {
  return (
    <Container className="mt-4">
      <Row>
        {igrejas.map((igreja, index) => (
          <Col key={index} md={3} className="m-5" > 
            <Cartao
              name={igreja.name}
              descricao={igreja.descricao}
              img={igreja.url}
              mapa={igreja.linkMapa}
              
            />
            
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Igrejas;
