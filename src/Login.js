  
import React, { useState, useEffects } from 'react';
import axios from 'axios';
import {Form, Button} from 'react-bootstrap';

import { useSelector , useDispatch } from 'react-redux';
import {login, logout} from './redux/actions/authActions.js';

function Login(props) {
	
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [estado, setEstado] = useState('');
	const dispatch = useDispatch();

	const handleEmail = (e) => {
		setEmail(e.target.value);
	}

	const handlePass = (e) => {
		setPass(e.target.value);
	}

	const handleLogout = (e) => {
		dispatch(logout());
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post('http://localhost:4000', {
			rut: email,
			pass: pass,
		}).then((data) => {
			console.log(data);
			dispatch(login());
			
			localStorage.setItem('token', data.data.token);
		})
	}

	return (
		<Form>
		  <Form.Group controlId="formBasicRUT">
		    <Form.Label>
				Identificador
			</Form.Label>

		    <Form.Control onChange={handleEmail} type="RUT" placeholder="Enter email" />
		    <Form.Text className="text-muted">
		      Ingresar Identificador de acceso
		    </Form.Text>
		  </Form.Group>

		  <Form.Group controlId="formBasicPassword">
		    <Form.Label>
				Contraseña
			</Form.Label>
		    <Form.Control onChange={handlePass} type="password" placeholder="Password" />
		  </Form.Group>

		  <Button onClick={handleSubmit} variant="primary" type="submit">
		    Enviar
		  </Button>

		  <Button onClick={handleLogout} variant="danger" type="button">
		    Logout
		  </Button>
		</Form>
	);
}export default Login;