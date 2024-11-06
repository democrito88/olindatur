import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Cabecalho.css';
import { FaInstagram } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

function Cabecalho() {
  return (
    <Navbar expand="lg" style={{ width: '100vw', marginLeft: 0, marginRight: 0, backgroundColor: '#f2f2f2' }}>
    <Container fluid>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-center">
        <Nav className="text-center">
          <Nav.Link href="#home">Início</Nav.Link>
          <Nav.Link href="#link">Igrejas</Nav.Link>
          <Nav.Link href="#link">Fortes</Nav.Link>
          <Nav.Link href="#link">Monumentos</Nav.Link>
        </Nav>
        <Navbar.Brand href="#home" className='d-flex justify-content-end'>
        <FaInstagram />
        <FaYoutubeSquare />
        </Navbar.Brand>
      </Navbar.Collapse>
       
    </Container>
  </Navbar>
  
  
  );
}

export default Cabecalho;