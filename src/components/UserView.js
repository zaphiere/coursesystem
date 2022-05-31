import { useState, useEffect } from 'react';
import CourseCard from './CourseCard';


export default function UserView({coursesData}) {

	const [courses, setCourses] = useState([])

	// we write our .am inside the useEffect to render the rapid changes of the data
	useEffect(() => {

		const coursesArr = coursesData.map(course => {
			// Validation to only render active courses
			if(course.isActive === true) {
				return(

					<CourseCard key={course._id} courseProp={course}/>
					)
			}else{
				return null;
			}
		})

		// Set the courses state to the result of our map function, to bring our return course component outside of the scope of our useEfffect where our return statement below can see.

		setCourses(coursesArr)

	}, [coursesData]) // this returns the displa for the courses

	return(
		<>
			<h1>User View</h1>
			{ courses }
		</>
		)
}