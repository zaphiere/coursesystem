import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function Register() {

	// state hooks to strore the values of the input fields
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ verifyPassword, setVerifyPassword ] = useState('');

	// state for the enable/disable button

	const [ isActive, setIsActive ] = useState(true);

	useEffect(() => {
		// Validation to enable submit button
		if((email !== '' && password !== '' && verifyPassword !== '') && (password === verifyPassword)){
			setIsActive(true);
		}else{
			setIsActive(false);
		}
	}, [email, password, verifyPassword])

	function registerUser(e) {
		e.preventDefault(); //Prevent re direction

		// Clear input fields
		setEmail('')
		setPassword('')
		setVerifyPassword('')

		Swal.fire({
			title: 'Yataaaaaaa!',
			icon: 'success',
			text: 'You have successfully registered'
		})
	}

	return(
		<Form onSubmit={e => registerUser(e)}>
			<h1>Register</h1>
			<Form.Group>
				<Form.Label>Email Address</Form.Label>
				<Form.Control 
					type="email"
					placeholder="Enter email"
					required
					value={email}
					onChange={e => setEmail(e.target.value)}
				  	/>
				 <Form.Text className="text-muted">
				 	We'll never share your email with anyone else
				 </Form.Text>
			</Form.Group>

			<Form.Group>
				<Form.Label>Password</Form.Label>
				<Form.Control 
					type="password"
					placeholder="Enter Password"
					required
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
			</Form.Group>

			<Form.Group>
				<Form.Label>Verify Password</Form.Label>
				<Form.Control 
					type="password"
					placeholder="Verify Password"
					required
					value={verifyPassword}
					onChange={e => setVerifyPassword(e.target.value)}
				/>
			</Form.Group>
			{isActive ?
				<Button variant="primary" type="submit" className="mt-3">Submit</Button>

				:

				<Button variant="primary" type="submit" className="mt-3" disabled>Submit</Button>
			}

		</Form>

		)
}