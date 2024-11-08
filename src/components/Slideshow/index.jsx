import { useCallback, useEffect, useState } from "react";
import "./Slideshow.css";
import { Col, Row } from "react-bootstrap";


export default function Slideshow({imagens}){
    const [slideIndex, setSlideIndex] = useState(1);

    const showSlides = useCallback(
        (n) => {
            let slides = Array.from(document.getElementsByClassName("mySlides"));
            let dots = Array.from(document.getElementsByClassName("demo"));
            
            if (n > slides?.length) {
                setSlideIndex(1);
            }
            
            if (n < 1) {
                setSlideIndex(slides?.length)
            }
        
            slides?.forEach((slide, index) => {
                if(index === slideIndex-1){
                    slide.style.display = "block";
                }else{
                    slide.style.display = "none"
                }
            })

            dots?.forEach((dot, index) => {
                if(index === slideIndex-1){
                    dot.className += " active"
                }else{
                    dot.className = dot.className.replace(" active", "")
                }
            });
        }
    )
        
    
    const plusSlides = (n) => {
        setSlideIndex(slideIndex + n);
        showSlides(slideIndex);
    }
    
    // Thumbnail image controls
    const currentSlide = (n) => {
        setSlideIndex(n);
        showSlides(slideIndex);
    }

    useEffect(() => {
        showSlides(slideIndex);
    }, [showSlides, slideIndex]);
    
    return(
        <div className="conteudo">
            {imagens.length > 1 ? 
                <>
                    {
                        imagens.map((imagem, index) => 
                            <div key={index} className="mySlides">
                                <div className="numbertext">{`${index + 1} de ${imagem.length}`}</div>
                                <img src={imagem} width={'100%'} />
                            </div>
                        )
                    }
                    <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                    <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
                    <Row>
                        {imagens.map((imagem, index) => 
                            <Col key={index}>
                                <img className="demo cursor" width={'100%'} src={imagem} onClick={() => currentSlide(1)} />
                            </Col>
                        )}
                    </Row>
                </>
            :
                <img width={'100%'} src={imagens[0]}/>
            }
        </div>
    );
}