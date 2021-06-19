import './App.css';

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import {Button,Navbar,Form,FormControl,Nav, Container,Image,Col} from 'react-bootstrap';
import { BrowserRouter, Switch, Router, Link } from 'react-router-dom';

import Login from "./Login.js";


function App() {
  //const CorrectLog = useSelector((store) => store.authReducer.CorrectLog);
  return (
    <div style={{
      backgroundImage: "url(/backgroud.png)",
      height: "700px",
      backgroundRepeat: "no-repeat"}}>

    <Container>
        <Col xs={1} sm={50} md={4}>
          <Image src="/logo.png" rounded />
        </Col>
    </Container>

    <Login />

    </div>
  );
}

export default App;
