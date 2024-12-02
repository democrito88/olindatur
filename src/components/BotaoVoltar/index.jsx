import { Button } from "react-bootstrap";
import { BiArrowBack } from "react-icons/bi"
export default function BotaoVoltar(){
    return(
        <Button variant="link" onClick={() => history.back()}>
            <BiArrowBack size={20} />
            <strong>Voltar</strong>
        </Button>
    );
}