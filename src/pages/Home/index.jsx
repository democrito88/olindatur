import igrejas from "../../assets/json/igrejas.json";
import fortes from "../../assets/json/fortes.json";
import monumentos from "../../assets/json/monumentos.json";
import museus from "../../assets/json/museus.json";

function Home(){
    return(

    <>
      <div class="container">
        <div class="card mt-5">
            <div class="card-header">
                <h1 class="text-center">OlindaTur</h1>
            </div>
            <div class="card-body">
                <div class="row d-flex align-items-center mt-2 mb-2">
                    <div class="col-md-3 col-sm-3">
                        <div class="item d-flex flex-row">
                            <a href="/igrejas">
                                <div class="circulo"></div>
                            </a>
                            <a href="/igrejas">
                                <span class="circulo-text"><b>{igrejas.length} Igrejas</b></span>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-3">
                        <div class="item d-flex flex-row">
                            <a href="/fortes">
                                <div class="circulo2"></div>
                            </a>
                            <a href="/fortes">
                                <span class="circulo-text"><b>{fortes.length} Forte</b></span>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-3">
                        <div class="item d-flex flex-row">
                            <a href="/museus">
                                <div class="circulo3"></div>
                            </a>
                            <a href="/museus">
                                <span class="circulo-text"><b>{museus.length} Museus</b></span>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-3">
                        <div class="item d-flex flex-row">
                            <a href="/monumentos">
                                <div class="circulo4"></div>
                            </a>
                            <a href="/monumentos">
                                <span class="circulo-text"><b>{monumentos.length} Monumentos</b></span>
                            </a>
                        </div>
                    </div>
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