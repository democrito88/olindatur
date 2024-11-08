import { useContext } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { AppContext } from "../../context/AppContext";

export default function Navegacao() {
  const { dados, estado, mensagem } = useContext(AppContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary capitalize">
      <Container>
        <Navbar.Brand href="/" className="d-flex flex-row align-items-baseline">
          <img src="/favicon.png" width={20} />
          OlindaTur
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Conheça" id="basic-nav-dropdown">
              {estado === 0 || estado === 1 ? (
                <p>{mensagem}</p>
              ) : (
                Object.keys(dados).map((propriedade) => (
                  <NavDropdown.Item key={propriedade} href={`/${propriedade}`}>
                    {propriedade}
                  </NavDropdown.Item>
                ))
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
