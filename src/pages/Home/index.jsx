import "./Home.css";
import dados from "../../assets/json/database.json";
import Cabecalho from "../../components/Cabecalho";

function Home(){
    return(

    <>
        <Cabecalho />
      <div className="container principal">
        <div className="card">
            <div className="card-header">
                <h1 className="text-center">OlindaTur</h1>
            </div>
            <div className="card-body">
                <div className="row d-flex align-items-center mt-2 mb-2">
                    {Object.keys(dados).map(propriedade => 
                        <div className="col-md-3 col-sm-3">
                            <div className="item d-flex flex-row">
                                <a href={`/${propriedade}`}>
                                    <div className="circulo"></div>
                                </a>
                                <a href={`/${propriedade}`}>
                                    <span className="circulo-text"><b>{`${dados[propriedade].length} ${propriedade}`}</b></span>
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
            <script src="js/igrejas.js"></script>
        </div>
    </div>
    </>
    );
}

export default Home;