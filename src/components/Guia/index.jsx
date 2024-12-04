import { useContext } from "react";
import Cartao from "../Cartao";
import { AppContext } from "../../context/AppContext";

export default function Guia(props){
    const atracoes = props.atracoes
    const { dados } = useContext(AppContext);
    
    const buscaCartao = (titulo, categoria) =>
        console.log(dados);
    /*.map(atracao => 
            <Cartao
                id={atracao.id}
                name={atracao.name}
                descricao={atracao.descricao[currentLanguage]}
                img={atracao?.images[0]}
                mapa={atracao.linkMapa}
                categoria={categoria}
            />
        );*/

    return(
        <div>
            <h4 className="title">{props.nome}</h4>
            <hr/>
            <p>{props.descricao}</p>
            <br />
            {Object.values(props.atracoes).map((categoria, index) => {
                
                //return buscaCartao(Object.entries(atracoes)[index][0], categoria);
            })}
        </div>
    );
}