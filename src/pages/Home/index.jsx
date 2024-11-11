import "./Home.css";
import Cabecalho from "../../components/Cabecalho";
import useFetch from "../../hooks/useFetch";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

function Home() {
    const { dados, estado, mensagem, urlBase } = useContext(AppContext);

    return (
        <>
            <Cabecalho />
            <div className="container principal">
                <div className="row d-flex align-items-center flex-wrap mt-2 mb-2">
                    {/* Se estiver carregando, exibe "Carregando..." */}
                    {estado === 0 || estado === 1 ? (
                        <p>{mensagem}</p>
                    ) : (
                        // Se os dados estiverem carregados e não houver erro, renderiza os botões de categoria
                        Object.keys(dados)?.map((estado) => (
                            <div key={estado} className="col-lg-3 col-md-4 col-sm-6 mb-4 ">
                                <a href={`/${estado}`}>
                                    <div className="botao-categoria" style={{ backgroundImage: `url(${urlBase}${dados[estado][0]?.images[0]})` }}>
                                        <div className="botao-categoria-painel">
                                            <h4 className="botao-categoria-titulo capitalize">
                                                {estado}
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
