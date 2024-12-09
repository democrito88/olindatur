import { Button } from "react-bootstrap";
import { BiArrowBack } from "react-icons/bi";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
import "./BotaoVoltar.css"

export default function BotaoVoltar(){
    const { t } = useContext(AppContext);
    return(
        <Button variant="light" className="botao-voltar" onClick={() => history.back()}>
            <BiArrowBack size={20} />
            <strong className="title text-capitalize">{t('voltar')}</strong>
        </Button>
    );
}