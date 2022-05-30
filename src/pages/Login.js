//Login.js

import { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';
import { Navigate } from 'react-router-dom';

export default function Login() {

	//Consume the User Context object and it's properties to use for user validation and to get the email coming from the login
	const { user, setUser } = useContext(UserContext);

	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	//button
	const [ isActive, setIsActive ] = useState(true);

	useEffect(() => {
		if(email !== '' && password !== '') {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	}, [email, password])

	function authentication(e) {
		e.preventDefault();

		//Set the email of the authenticated user in the localStorage
		//localStorage.setItem('propertyName', value)
		//setItem to store information in localStorage
		localStorage.setItem('email', email);

		//set the global user state to have properties obtained from local storage
		setUser({
			email: localStorage.getItem('email')
		})

		//clear inputs
		setEmail('');
		setPassword('');

		Swal.fire({
			title: 'Yay!',
			icon: 'success',
			text: `${email} has been verified! Welcome!`
		})
	}

	return(
		
		(user.email !== null)?
		// Redirects to courses if logged in
		<Navigate to="/courses" />

		:

		<Form onSubmit={e => authentication(e)}>
            <h1>Login</h1>
			<Form.Group>
				<Form.Label>Email Address</Form.Label>
				<Form.Control 
				    type="email"
				    placeholder="Enter email"
				    required
				    value={email}
				    onChange={e => setEmail(e.target.value)}
				    />
			</Form.Group>

			<Form.Group>
				<Form.Label>Password</Form.Label>
				<Form.Control 
				    type="password"
				    placeholder="Enter your Password"
				    required
				    value={password}
				    onChange={e => setPassword(e.target.value)}
				    />
			</Form.Group>
			{ isActive ?
			<Button variant="primary" type="submit" className="mt-3">
				Submit
			</Button>
			:
			<Button variant="primary" type="submit" className="mt-3" disabled>
				Submit
			</Button>
			}
		</Form>


		)
}