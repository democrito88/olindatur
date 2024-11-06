import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { TbBrandGoogleMaps } from 'react-icons/tb';
import { FaVolumeUp } from "react-icons/fa";
import './Cartao.css';


function Cartao(props) {
    const speakText = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(props.descricao);
            utterance.lang = 'pt-BR';
            utterance.pitch = 1;
            utterance.rate = 1;
            window.speechSynthesis.speak(utterance);
        } else {
            alert('API Web Speech não é suportada neste navegador.');
        }
    };

    return (
        <>
            <Card border="primary" className="mt-5 card-uniform ">
                <Card.Img src={props.img} className="img-uniform " />
                <Card.Body className="mt-2">
                    <Card.Title className='text-center'>{props.name}</Card.Title>
                    <Card.Text className="mt-2 " id="descricao-text">
                        {props.descricao}
                    </Card.Text>

                    <FaVolumeUp size={40} onClick={props.speakText} style={{ cursor: 'pointer', marginLeft: '10px' }} />


                    <a href={`https://maps.app.goo.gl/${props.mapa}`} target="_blank" rel="noopener noreferrer" className='link-mapa'>
                        <TbBrandGoogleMaps size={40} />
                    </a>
                </Card.Body>
            </Card>
        </>
    );
}

export default Cartao;
