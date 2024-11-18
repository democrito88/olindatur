import { useContext } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { AppContext } from "../../context/AppContext";
import styled from "styled-components";

const StyledNavbar = styled(Navbar)`
  background-color: ${({ theme }) => theme.navbarBackground} !important;
  color: ${({ theme }) => theme.navbarText};
`;

export default function Navegacao() {
  const { dados, estado, mensagem, t, i18n, toggleTheme } = useContext(AppContext);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <StyledNavbar expand="lg" className="capitalize">
      <Container>
        <Navbar.Brand href="/" className="d-flex flex-row align-items-baseline">
          <img src="../src/assets/img/favicon.png" width={20} />
          OlindaTur
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title={t("dropdown-menu")} id="basic-nav-dropdown">
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
        <Nav>
          <Nav.Link onClick={() => changeLanguage("pt")} style={{ fontSize: "35px" }}>
            🇧🇷
          </Nav.Link>
          <Nav.Link onClick={() => changeLanguage("en")} style={{ fontSize: "35px" }}>
            🏴
          </Nav.Link>
          <Nav.Link onClick={toggleTheme} style={{ fontSize: "25px" }}>
            🌙
          </Nav.Link>
        </Nav>
      </Container>
    </StyledNavbar>
  );
}
