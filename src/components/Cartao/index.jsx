import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { TbBrandGoogleMaps } from 'react-icons/tb';
import { FaVolumeUp } from "react-icons/fa";
import './Cartao.css';
import { Link } from 'react-router-dom';


function Cartao(props) {
    const comprimentoMaximo = 100;
    const texto = props.descricao.pt.length > comprimentoMaximo ? 
        props.descricao.pt.slice(0, comprimentoMaximo)+"..."
        :
        props.descricao.pt;

    const speakText = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(props.descricao);
            utterance.lang = 'pt';
            utterance.pitch = 1;
            utterance.rate = 1;
            window.speechSynthesis.speak(utterance);
        } else {
            alert('API Web Speech não é suportada neste navegador.');
        }
    };

    console.log(props.descricao);

    return (
        <Link to={`/${props.categoria}/${props.id}`}>
            <Card border="0" className="mt-5 card-uniform ">
                <Card.Img 
                src={`../src/assets/img/${props.img}`} 
                className="img-uniform " 
                
                />
                <Card.Body className="mt-2">
                    <Card.Title className='text-center'>{props.name}</Card.Title>
                    <Card.Text className="mt-2 " id="descricao-text">
                        {props.descricao}
                    </Card.Text>
                    <Card.Footer>
                        <FaVolumeUp size={40} onClick={speakText} style={{ cursor: 'pointer', marginLeft: '10px' }} />
                        <a href={`https://maps.app.goo.gl/${props.mapa}`} target="_blank" rel="noopener noreferrer" className='link-mapa'>
                            <TbBrandGoogleMaps size={40} />
                        </a>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </Link>
    );
}

export default Cartao;
