import './App.css';

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import {Button,Navbar,Form,FormControl,Nav} from 'react-bootstrap';
import { BrowserRouter, Switch, Router, Link } from 'react-router-dom';

import Login from "./routes/Login.js";


function App() {
  const CorrectLog = useSelector((store) => store.authReducer.CorrectLog);
  return (
    <div style={{
      backgroundImage: "url(/backgroud.png)",
      height: "700px",
      backgroundRepeat: "no-repeat"}}>
    CorrectLog
  
    </div>
  );
}

export default App;
