import CourseCard from '../components/CourseCard';
import coursesData from '../mockData/coursesData';




export default function CoursePage() {
	// check if we can retrieve the mock data
	// console.log(coursesData);
	// PHP laravel
	// console.log(coursesData[0]);

	// For us to be able to display all the courses from the data file we are going to use the map() method
	const courses = coursesData.map(individualCourse => {
		return(
			<CourseCard key={individualCourse.id} courseProp={individualCourse}/>
			// add key property to keep track the number of courses and to avoid duplication
			)
	})

	return(
		<>
			<h1>Courses</h1>
			{ courses }
		</>


		)
}