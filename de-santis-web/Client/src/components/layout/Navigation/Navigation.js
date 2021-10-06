import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import AuthService from '../../../services/auth.service'
import DeSantisNav from '../../../media/Logo de santis beats png.png'



function Navigation(props) {
    const logout = () => {
        AuthService.logout()
            .then(res => props.storeUser(null))
            .catch(err => console.log(err))
    }
    return (


        <Navbar expand="md" className="mb-5">
            <Container>
                <Navbar.Brand as={Link} to="/"> Home <img src={DeSantisNav} width='50px' height='50px'></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='navbar-texts'>
                    <Nav className="me-auto">
                        {/* <Link className="nav-link" to="/montañas-rusas">Music</Link> */}

                        {props.loggedUser ?
                            <React.Fragment>
                                {props.loggedUser.rol === 'admin' && <Link className="nav-link" to="/admin">Mi perfil</Link>}
                                <Link className="nav-link" to="/beats">Beats</Link>
                                <span className="nav-link" onClick={logout}>Logout</span>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <Link className="nav-link" to="/registro">Registro</Link>
                                <Link className="nav-link" to="/iniciar-sesion">Iniciar sesión</Link>
                            </React.Fragment>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Navigation