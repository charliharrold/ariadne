import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Navigation() {
    return (
        <Container>
            <Navbar expand="lg">
                <Navbar.Brand href="#home">Ariadne</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#home">Existential Doom</Nav.Link>
                        <Nav.Link href="#home">Chronic Issues</Nav.Link>
                        <Nav.Link href="#home">Acute Crises</Nav.Link>
                        <Nav.Link href="#home"><Button variant="dark" size="sm">DONATE</Button></Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Navigation;