import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
	return(
		<Row>
			<Col>
				<h1>Error 404</h1>
				<p>Page not Fount</p>
				<Button variant="primary" as={ Link } to="/">Back Home</Button>
			</Col>
		</Row>
		)
}

export default PageNotFound