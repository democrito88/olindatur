import React from 'react';
import { Card } from 'react-bootstrap';
import { TbBrandGoogleMaps } from 'react-icons/tb';
import { FaVolumeUp } from "react-icons/fa";
import './Cartao.css';
import { Link } from 'react-router-dom';
import { FcFinePrint } from 'react-icons/fc';


function Cartao(props) {
    const comprimentoMaximo = 140;
    const texto = (props?.descricao?.length > comprimentoMaximo) ? 
        props?.descricao?.slice(0, comprimentoMaximo)+"..."
        :
        props?.descricao;

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

    return (
        
            <Card border="0" className="mt-5 card-uniform ">
                    <Card.Img 
                    src={`${props.img}`} 
                    className="img-uniform "
                    />
                    <Card.Body className="mt-2 p-0">
                        <Card.Title className='text-center title'>
                            {props.name}
                        </Card.Title>
                        <Card.Text className="p-2 " id="descricao-text">
                            {texto}
                        </Card.Text>
                    </Card.Body>
                <Card.Footer style={{marginTop: '6em'}} className='d-flex justify-content-between'>
                    <FaVolumeUp size={40} onClick={speakText} style={{ cursor: 'pointer', marginLeft: '10px' }} />
                    <a href={`https://maps.app.goo.gl/${props.mapa}`} rel="noopener noreferrer" className='link-mapa'>
                        <TbBrandGoogleMaps size={40} />
                    </a>
                    
                    <Link className='text-dark fs-4' to={`/${props.categoria}/${props.id}`} >Ver Mais</Link>
                </Card.Footer>
            </Card>
       
    );
}

export default Cartao;
