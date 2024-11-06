import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { TbBrandGoogleMaps } from 'react-icons/tb';
import { FaVolumeUp } from "react-icons/fa";


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
            <Card border="primary" style={{ width: '25rem' }} className='mt-5'>
                <Card.Img variant="top" src={props.img} />
                <Card.Body className='mt-2'>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text className='mt-2 text-center' id="descricao-text">
                        {props.descricao}
                    </Card.Text>
                    <a href={`https://maps.app.goo.gl/${props.mapa}`} target="_blank" rel="noopener noreferrer">
                        <TbBrandGoogleMaps size={40} />
                    </a>
                    <FaVolumeUp size={40} onClick={speakText} style={{ cursor: 'pointer', marginLeft: '10px' }} />
                </Card.Body>
                
            </Card>
        </>
    );
}

export default Cartao;
