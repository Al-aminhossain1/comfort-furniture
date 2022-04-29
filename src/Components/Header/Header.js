import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' container    mx-auto   '>
            <Navbar collapseOnSelect expand="lg" bg="secondary" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Comfort-Furniture</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className='mr-auto'>
                            <Nav.Link as={Link} eventKey={2} to='/'>HOME</Nav.Link>
                            <Nav.Link as={Link} eventKey={2} to='/blog'>BLOG</Nav.Link>
                        </Nav>
                        <Nav >
                            <Nav.Link as={Link} eventKey={2} to='/login'>LOGIN
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>



            {/* <Link to='/'>HOME</Link>
            <Link to='/blog'>Blogs</Link>
            <Link to='/login'>LOGIN</Link> */}

        </div>
    );
};

export default Header;