import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import dados from "../../assets/json/database.json";

export default function Navegacao(){
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">OlindaTur</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Principal</Nav.Link>
                    <NavDropdown title="Conheça" id="basic-nav-dropdown">
                        {Object.keys(dados).map(propriedade => 
                            <NavDropdown.Item key={propriedade} href={`/${propriedade}`}>
                                {propriedade}
                            </NavDropdown.Item>
                        )}
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}