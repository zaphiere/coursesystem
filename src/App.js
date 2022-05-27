import './App.css';
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import CoursePage from './pages/CoursePage';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import { Container } from 'react-bootstrap';

// react-router
// Alt: BrowserRouter as Router 
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// <>..</> {Fragment} needs to add if we added multiple components/html tags

function App() {

  return(
    <BrowserRouter>
        <AppNavbar />
        <Container>
            <Routes>
                <Route path="/" element={ <Home /> }/>
                <Route path="/courses" element={ <CoursePage /> }/>
                <Route path="/register" element={ <Register /> }/>
                <Route path="/login" element={ <Login /> }/>
                <Route path="/logout" element={ <Logout /> }/>
            </Routes>
        </Container>
    </BrowserRouter>
  );
}

export default App;
