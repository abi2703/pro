import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/Navbar.css'
import icon from '../assets/img/vps-white.png';
import Button from 'react-bootstrap/Button';
function Navbarr() {
  return (
    <Navbar className="bgcolor">
      <Container>
      <img src={icon} alt="Logo" width="128px"/>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link className="txt-color" href="#home">Home</Nav.Link>
            <Nav.Link className="txt-color"href="#link">Link</Nav.Link>
            <NavDropdown color='white' title="Dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div>
     <Button variant="outline-light">Logout</Button>{' '}
     </div>
    </Navbar>
    
  );
}

export default Navbarr;