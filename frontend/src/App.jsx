import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/teen-driving">Teen Driving</Link></li>
          <li><Link to="/classroom">Classroom</Link></li>
          <li><Link to="/location">Location</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default App;
