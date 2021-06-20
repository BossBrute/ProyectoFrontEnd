import './App.css';

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Navbar,Form,FormControl,Nav, Container,Image,Col} from 'react-bootstrap';
import { BrowserRouter, Switch, Router, Link } from 'react-router-dom';

import {login, logout} from './redux/actions/authActions.js';
import Login from "./Login.js";
import Header from "./routes/header.js"

import {useSelector} from "react-redux";

function App() {
  const CorrectLog = useSelector((store) => store.authReducer.CorrectLog);
  return CorrectLog ? (

      <div style={{
        backgroundImage: "url(/backgroud.png)",
        height: "700px",
        backgroundRepeat: "no-repeat"}}>
        <Header/>
      </div>

    ) : (

    <div style={{
      backgroundImage: "url(/backgroud.png)",
      height: "700px",
      backgroundRepeat: "no-repeat"}}>
    
    <Container>
        <Col xs={1} sm={50} md={4}>
          <Image src="/logo.png" rounded />
        </Col>
    </Container>

    <Container >
      <Col sm="12" md={{ size: 6, offset: 1 }}>
        <Login />
      </Col>
    </Container>
    </div>
  );
}

export default App;
