import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handelLogOut = () => {
        signOut(auth);
    }
    return (
        <div className=' container mx-auto sticky-top   '>
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

                            {!user ? <>

                                <Nav.Link as={Link} eventKey={2} to='/login'>LOGIN
                                </Nav.Link>
                            </> :
                                <>
                                    <Nav.Link onClick={handelLogOut} eventKey={2} >LOGOUT
                                    </Nav.Link>
                                </>}
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