import UserView from '../components/UserView';
import AdminView from '../components/AdminView';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../UserContext';




export default function CoursePage() {

	const [ allCourses, setAllCourses ] = useState([])
	
	const fetchData = () => {
		fetch('http://localhost:4000/courses/all')
		.then(res => res.json())
		.then(data => {
			console.log(data)
			// storing all the data to our useState allCourses
			setAllCourses(data)
		})
	}
	// get the data from database
	// it renders the function fetchData() => ut gets the updated data cinubg frni th fetch
	useEffect(() => {
		fetchData()
	}, [])
	// if the useEffect has no variables, it will only render one time

	const { user } = useContext(UserContext);

	return(
		<>
			<h1>Courses</h1>

			{(user.isAdmin === true) ?

				<AdminView coursesData={allCourses} fetchData={fetchData}/>

				:

				<UserView coursesData={allCourses}/>
			}
		
		</>


		)
}