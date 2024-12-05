import { useContext } from "react";
import Cartao from "../Cartao";
import { AppContext } from "../../context/AppContext";
import { Col, Row } from "react-bootstrap";

export default function Guia(props){
    const atracoes = Object.keys(props.atracoes);
    const { dados, estado, mensagem } = useContext(AppContext);
    
    const buscaCartao = (arrayCategoria, idsSelecionados, categoria) => {
        let objetos = arrayCategoria?.filter(pontoTuristico => 
            idsSelecionados.map(String).includes(String(pontoTuristico.id))
        );
        
        return objetos?.map(pontoTuristico => 
                <Col key={pontoTuristico.id} sm={2} md={4} lg={4}>
                    <Cartao
                        id={pontoTuristico.id}
                        name={pontoTuristico.name}
                        descricao={pontoTuristico.descricao[localStorage.getItem('lang')]}
                        img={pontoTuristico?.images[0]}
                        mapa={pontoTuristico.linkMapa}
                        categoria={categoria}
                        />
                </Col>
                );
    }

    if (estado === 0 || estado === 1) {
        return <p>{mensagem}</p>;
    }

    if (!dados || Object.keys(dados).length === 0) {
        return <p>Nenhuma categoria disponível.</p>;
    }

    return(
        <div>
            <h4 className="title">{props.nome}</h4>
            <hr/>
            <p>{props.descricao[localStorage.getItem('lang')]}</p>
            <Row>
                {Object.values(props.atracoes).map((categoria, index) => {
                    if(index || atracoes || dados){
                        return buscaCartao(dados[atracoes[index]], categoria, atracoes[index]);
                    }
                })}
            </Row>
        </div>
    );
}