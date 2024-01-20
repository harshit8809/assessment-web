import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function HeaderNav() {

    const navigate = useNavigate()

    return (
        <Navbar expand="lg" className="bg-body-tertiary shadow">
            <Container fluid="md">
                <Navbar.Brand style={{ color: "#607d8b", padding: "1%" }} href="/">Tour & Travel</Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ml-auto" navbarScroll>
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>

                        <NavDropdown title="Tour package" id="navbarScrollingDropdown">
                            <NavDropdown.Item onClick={()=>navigate("/india")} >
                                    India
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>navigate("/explore")}>Explore packages</NavDropdown.Item>


                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={()=>navigate("/allBookingDetails")}>Your Booking</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderNav;
