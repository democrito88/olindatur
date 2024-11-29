import "./Home.css";
import Cabecalho from "../../components/Cabecalho";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

function Home() {
    const { dados, estado, mensagem } = useContext(AppContext);
    
    return (
        <>
            <Cabecalho/>
            <div className="container principal">
                <div className="row d-flex align-items-center flex-wrap mt-2 mb-2">
                    {(estado === 0 || estado === 1) ? (
                        <p>{mensagem}</p>
                    ) : (
                        
                        Object.keys(dados)?.map((categoria) => (
                            <div key={categoria} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4">
                                <a href={`/${categoria}`}>
                                    <div className="botao-categoria" style={{ backgroundImage: `url(${dados[categoria][0]?.images[0]})` }}>

                                        <div className="botao-categoria-painel">
                                            <h4 className="botao-categoria-titulo capitalize">
                                                {categoria}
                                            </h4>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
}

export default Home;
