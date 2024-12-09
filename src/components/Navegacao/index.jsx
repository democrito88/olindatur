import { useContext } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { AppContext } from "../../context/AppContext";
import logo from "../../assets/img/favicon.png";
import { Link } from "react-router-dom";

export default function Navegacao() {
  const { dados, estado, mensagem, t, i18n } = useContext(AppContext);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  return (
    <Navbar expand="lg" className="capitalize">
      <Container className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-row justify-content-center gap-4 align-items-center">
          <Link to="/" className="d-flex flex-row align-items-center text-dark text-decoration-none">
            <img src={logo} width={20} />
            <p className="fs-4 mb-1 title">OlindaTur</p>
          </Link>
          <NavDropdown title={t("dropdown-menu")} id="basic-nav-dropdown">
            {estado === 0 || estado === 1 ? (
              <p>{mensagem}</p>
            ) : (
              Object.keys(dados).map((propriedade) => (
                <NavDropdown.Item
                  as={Link}
                  to={`${propriedade}`}
                  key={propriedade}
                  className="text-dark"
                >
                  {t(`cathegories.${propriedade}`)}
                </NavDropdown.Item>
              ))
            )}
          </NavDropdown>
        </div>
        <Nav className="d-flex flex-row justify-content-center gap-3">
          <Nav.Link onClick={() => changeLanguage("pt")}   >
            <img src="https://i.ibb.co/Kb0JF42/brasil.png" style={{ width: "24px" }} />
          </Nav.Link>
          <Nav.Link onClick={() => changeLanguage("en")} >
            <img src="https://i.ibb.co/jTGz1KL/estados-unidos.png" style={{ width: "24px" }} />
          </Nav.Link>
          <Nav.Link onClick={() => changeLanguage("es")}   >
            <img src="https://i.ibb.co/yyq4V83/espanha.png" style={{ width: "24px" }} />
          </Nav.Link>
          <Nav.Link onClick={() => changeLanguage("cn")}   >
            <img src="https://i.ibb.co/KWMmw4Z/china.png" style={{ width: "26px" }} />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}