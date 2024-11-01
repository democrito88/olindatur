import igrejas from "../../assets/json/igrejas.json";

function Igrejas() {
  return(
  <>
    <div className="container mb-5">
      <div className="card ">
        <div className="card-header">
          <h1 className="text-center">OlindaTur</h1>
        </div>
        <div className="row col-md-12 col-sm-12 col-12 d-flex justify-content-center mt-2 mb-2 card-body">
          <div className="icon-container">
            <a href="index.php">
              <i className="fa fa-arrow-left text-dark" aria-hidden="true"></i>
            </a>
          </div>
          <div className="item d-flex align-items-center ">
            <div className="container">
              <div className="row">
                {igrejas.map(igreja => 
                  <div className="col-md-4 text-center">
                    <p className="text-igrejas text-center">
                      <div className="item">
                        <div className="circuloI">
                          <a href={"igreja/${igreja.id}"}>
                            <img src={igreja.url}  width={150}/>
                          </a>
                        </div>
                        <a href={"/igreja/"+igreja.id}>
                          <center>{igreja.name}</center>
                        </a>
                        <p>
                          {igreja.coordinates[0]}, {igreja.coordinates[1]}
                        </p>
                        <p>{igreja.descricao}</p>
                      </div>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default Igrejas;
