import { Card } from "react-bootstrap";
import Cartao from "../../components/Cartao";
import fortes from "../../assets/json/fortes.json";

function Fortes() {
    return (
        <>
            {fortes.map((forte, index) => (
        
                <Cartao
                    key={index} // Adicione uma chave única para cada item
                    name={forte.name}
                    descricao={forte.descricao}
                    img={forte.url} // Certifique-se que o campo correto seja usado para a URL da imagem
                    mapa={forte.linkMapa} // Certifique-se que o campo correto seja usado para o link do mapa
                    
                />
                
            ))}
        </>
    );
}

export default Fortes;
