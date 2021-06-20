import {Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

import {useSelector} from "react-redux";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function header(props){
return(
    <Router>
        <div>

            {/* LINK */}
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/"><HomeRoundedIcon/></Nav.Link>

                {/* Header Client */}
                { userType == 1 && 
                    <Nav.Link as={Link} to="/ClientProject">Proyecto</Nav.Link>
                }

                {/* Header Manager */}
                { userType == 2 && 
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/ManagerListDev">Lista desarrolladores</Nav.Link>
                    <Nav.Link as={Link} to="/ManagerProject">Proyectos</Nav.Link>
                    <Nav.Link as={Link} to="/ManagerAssignMod">Reasignaciones</Nav.Link>
                </Nav>
                }

                {/* Header Developer */}
                { userType == 3 && 
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/DevProfile">Perfil</Nav.Link>,
                    <Nav.Link as={Link} to="/DevModify">Modificar datos</Nav.Link>
                    <Nav.Link as={Link} to="/DevProject">Proyecto</Nav.Link>
                </Nav>
                }
                </Nav>

                <Nav>
                    <Nav.Link as={Link} to="/Logout"><ExitToAppIcon /></Nav.Link>
                </Nav>
            </Navbar>


            {/* SWITCH */}
            <Switch>
                {/* Professor Route */}
                <Route path="/professor">
                    <DevModify />
                </Route>
                <Route path="/professorProfile">
                    <DevProfile />
                </Route>
                <Route path="/professor">
                    <DevProject />
                </Route>

                {/* Logout */}
                <Route path="/Logout">
                    <Logout />
                </Route>

                {/* Routes Default */}
                <Route path="/">
                    <Home />
                </Route>
            </Switch>

        </div>
    </Router>

	);
}
export default header;