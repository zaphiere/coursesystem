import { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function CourseCard({courseProp}) {
	// checks if the data was successfully
	// console.log(courseProp)

	// Deconstruct the course properties into their own variables
	const { _id, name, description, price } = courseProp;
	
	// Use the state hook for this component to be able to store its value
	// state are used to keep track of information related to individual components

	// syntax:
		// const [currentValue(getter), UpdatedValue(setter)] = useState(initialGetterValue)
		// const [ count, setCount ] = useState(0);
		// set available seats for the enrollees
		// const [ seat, setSeat ] = useState(30);

		// for the enable/disable of enroll button
		// const [ isOpen, setIsOpen ] = useState(true);

		/*useEffect(() => {
			if(seat === 0) {
				setIsOpen(false)
			}
		}, [seat])*/


		/*function enroll() {
			setCount(count + 1);
			console.log('Enrollees: ' + count );
			setSeat(seat -1)
			console.log('seats available' + seat);
		}*/

	return(

		<Card className="mt-3">
			<Card.Body>
				<Card.Title> { name } </Card.Title>

				<Card.Subtitle>Description:</Card.Subtitle>
				<Card.Text> { description } </Card.Text>

				<Card.Subtitle>Price:</Card.Subtitle>
				<Card.Text>Php { price } </Card.Text>

				<Button variant="primary" as={ Link } to={`/courses/${_id}`}>Details</Button>

			</Card.Body>
		</Card>



		)
}

// Check if the CourseCard component is getting the correct prop types
// Proptypes are used for validating information passed to a component and is a tool normally used to help developers ensure the correct information is passed from one component to another

CourseCard.propTypes = {
	// shape method is used to check if a prop object has the same specific shape of data
	courseProp: PropTypes.shape({
		// Define the properties and their expected types
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	})

}