import {Navbar, Nav} from "react-bootstrap";

import {useSelector} from "react-redux";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function header(props){
    const userType = useSelector((store) => store.authReducer.userType);
return(
    <div>
        <Switch>
            
        <Route path="/student"></Route>

        <Route path="/student"></Route>
        <Route path="/student"></Route>
        <Route path="/student"></Route>
        
        <Route path="/Logout">
            <Logout />
        </Route>

        <Route path="/">
            <Home />
        </Route>


        </Switch>
    </div>
)};