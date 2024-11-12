import { useContext } from "react";
import "./Cabecalho.css";
import {AppContext} from "../../context/AppContext";

export default function Cabecalho(){
    const {t} = useContext(AppContext);
    return(
        <header className="header">
            <div className="titulo-banner-painel ">
                <h1 className="titulo-banner ">{t('banner')}</h1>
                <h5 className="titulo-banner">{t('banner-sub')}</h5>
            </div>
        </header>
    );
}
