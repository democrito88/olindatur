import "./Home.css";
import Cabecalho from "../../components/Cabecalho";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

function CategoriaBotao({ categoria, imagem }) {
    const imagemBackground = imagem || "https://placehold.co/400"; // Substitua com o caminho da imagem padrão.

    return (
        <Link to={`/${categoria}`}>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4">
                <div
                    className="botao-categoria"
                    style={{ backgroundImage: `url(${imagemBackground})` }}
                    >
                    <div className="botao-categoria-painel">
                        <h4 className="botao-categoria-titulo capitalize">{categoria}</h4>
                    </div>
                </div>
            </div>
        </Link>
    );
}

function Home() {
    const { dados, estado, mensagem } = useContext(AppContext);

    const renderConteudo = () => {
        if (estado === 0 || estado === 1) {
            return <p>{mensagem}</p>;
        }

        if (!dados || Object.keys(dados).length === 0) {
            return <p>Nenhuma categoria disponível.</p>;
        }

        return Object.entries(dados).map(([categoria, items]) => (
            <CategoriaBotao
                key={categoria}
                categoria={categoria}
                imagem={items[0]?.images?.[0]}
            />
        ));
    };

    return (
        <>
            <Cabecalho />
            <div className="container principal">
                <div className="row d-flex align-items-center flex-wrap mt-2 mb-2">
                    {renderConteudo()}
                </div>
            </div>
        </>
    );
}

export default Home;
