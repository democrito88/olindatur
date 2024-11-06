import "./Home.css";
import dados from "../../assets/json/database.json";
import Cabecalho from "../../components/Cabecalho";
import useFetch from "../../hooks/useFetch";

function Home() {
    const {data, loading, mensagem} = useFetch("http://localhost:5173/json/database.json");

    return (
        <>
            <Cabecalho />
            <div className="container principal">
                <div className="row d-flex align-items-center flex-wrap mt-2 mb-2">
                    {loading ? <p>Carregando...</p> :
                    Object.keys(data)?.map(propriedade =>
                        <div key={propriedade} className="col-md-3 col-sm-3">
                            <a href={`/${propriedade}`}>
                                <div className="botao-categoria" style={{ backgroundImage: `url(${dados[propriedade][0].url})` }}>
                                    <div className="botao-categoria-painel">
                                        <h4 className="botao-categoria-titulo">
                                            {propriedade}
                                        </h4>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Home;