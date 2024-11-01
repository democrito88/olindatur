import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { TbBrandGoogleMaps } from 'react-icons/tb';
import { FaVolumeUp } from "react-icons/fa";

function Cartao(props) {
    return (
        <>
            <Card border="primary" style={{ width: '25rem' }} className='mt-5'>
                <Card.Header className='text-center'>{props.name}</Card.Header>
                <Card.Body className='mt-2'>
                    <Card.Img src={props.img} width={125} height={125} />
                    <Card.Text className='mt-2 text-center'>
                        {props.descricao}
                    </Card.Text>
                   
                    <a href={`https://maps.app.goo.gl/${props.mapa}`} target="_blank" rel="noopener noreferrer">
                        <TbBrandGoogleMaps size={40} />
                    </a>
                    <FaVolumeUp size={40} />
                </Card.Body>
            </Card>
        </>
    );
}

export default Cartao;
