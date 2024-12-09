import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

function NotFound() {
    const { t } = useContext(AppContext);

    return(
        <>
        <h1 className="text-center title">{t('not-found')}</h1>
        <h5 className="text-center">{t('not-found-description')}</h5>
        </>
    );
}

export default NotFound;