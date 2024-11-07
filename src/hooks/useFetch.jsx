import axios from "axios";
import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [dados, setDados] = useState(null);
    const [estado, setEstado] = useState(0);
    const [mensagem, setMensagem] = useState("Carregando..."); 

    useEffect(() => {
        axios.get(url)
        .then(resposta => {
            if (resposta.headers['content-type'].includes('application/json')) {
            // It's a JSON response
                setDados(resposta.data)
                setEstado(2);
            console.log('Received JSON:', resposta.data);
            } else {
            // It's something else (e.g., plain text, HTML, etc.)
                console.log('Received non-JSON data:', resposta.data);
                throw new Error('Invalid URL');
            }
        })
        .catch(error => {
            console.error(error);
            setMensagem("Os dados não puderam ser carregados. Tente novamente mais tarde.");
            setEstado(1);
        })
        .finally(() => {
            console.log(dados);
        })
        
    }, []);

    return {dados, estado, mensagem};
}

export default useFetch;