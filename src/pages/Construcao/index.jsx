import { Col, Container, Row } from "react-bootstrap";
import { IoIosWarning } from "react-icons/io";

export default function Construcao(){
    return(
        <Container className="my-5">
            <Row className="d-flex justify-content-center gap-1">
                <Col sm={1}>
                    <IoIosWarning size={100} />
                </Col>
                <Col sm={4}>
                    <h1>Página em construção</h1>
                    <p>A página entrará no ar em breve. por favor, aguarde...</p>
                </Col>
            </Row>
        </Container>
    )
}