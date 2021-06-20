import React, { useState } from 'react';
import axios from 'axios';
import {Form, Button,Container} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {login, logout} from './redux/actions/authActions.js';

function Login(props) {
	
	const [Rut, setRut] = useState('');
	const [pass, setPass] = useState('');
	//const [estado, setEstado] = useState('');
	const dispatch = useDispatch();


	const handleRut = (e) => {
		setRut(e.target.value);
	}

	const handlePass = (e) => {
		setPass(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post('http://localhost:4000', {
			rut: Rut,
			pass: pass,
		}).then((data) => {
			console.log(data);
			dispatch(login());
			
			localStorage.setItem('token', data.data.token);
		})
	}

	return (
		<Container>
			<Form>
				<Form.Group controlId="formBasicRUT">
					<Form.Label>
						Identificador
					</Form.Label>

					<Form.Control onChange={handleRut} type="RUT" placeholder="Ingresar Rut" />
					<Form.Text className="text-muted">
					Ingresar Identificador de acceso
					</Form.Text>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>
						Contraseña
					</Form.Label>
					<Form.Control onChange={handlePass} type="password" placeholder=" " />
				</Form.Group>

				<Button onClick={handleSubmit} variant="primary" type="submit">
						Ingresar
				</Button>
			</Form>
			
		</Container>
	);
}
export default Login;