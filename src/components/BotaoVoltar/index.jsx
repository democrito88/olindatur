import { Button } from "react-bootstrap";
import { BiArrowBack } from "react-icons/bi";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";

export default function BotaoVoltar(){
    const { t } = useContext(AppContext);
    return(
        <Button variant="link" onClick={() => history.back()}>
            <BiArrowBack size={20} />
            <strong>{t('voltar')}</strong>
        </Button>
    );
}