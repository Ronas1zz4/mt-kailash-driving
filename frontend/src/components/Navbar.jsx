import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link> 
            <Link to="/about">About</Link> 
            <Link to="/teen-driving">Teen Driving</Link>  
            <Link to="/classroom">Classroom</Link> 
            <Link to="/location">Location</Link>
        </nav>
    );
}

export default Navbar;
