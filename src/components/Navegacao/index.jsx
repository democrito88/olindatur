import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import dados from "../../assets/json/database.json";

export default function Navegacao(){
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">
                    <img src="/favicon.png"  width={20}/>
                    OlindaTur
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
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