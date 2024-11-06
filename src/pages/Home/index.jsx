import "./Home.css";
import dados from "../../assets/json/database.json";
import Cabecalho from "../../components/Cabecalho";

function Home(){
    return(

    <>
        <Cabecalho />
      <div className="container principal">
        <div className="row d-flex align-items-center mt-2 mb-2">
            {Object.keys(dados).map(propriedade => 
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