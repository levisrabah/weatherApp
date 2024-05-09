import '../styles/NavBar.css'
import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

<<<<<<< HEAD
const NavBar = () => {
  return (
    <nav className="navbar">  {/* Apply the "navbar" class directly to the nav element */}
      <ul className="nav-links"> {/* Add a class for styling the list */}
        <li>
          <Link to="/" className="nav-link">Home</Link> {/* Consistent class naming */}
        </li>
        <li>
          <Link to="/forecast" className="nav-link">Forecast</Link>
        </li>
        <li>
          <Link to="/airpollution" className="nav-link">Air Pollution</Link> {/* Capitalized for readability */}
        </li>
        <li>
          <Link to="/SavedLocations" className="nav-link">Saved Locations</Link>
        </li>
      </ul>
    </nav>
  );
};
=======
    const NavBar = () => {
        return (
            <div className="navbar"> {/* Apply the "navbar" class */}
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className="navlink">Home</Link> {/* Apply the "navlink" class */}
                        </li>
                        <li>
                            <Link to="/forecast" className="navlink">Forecast</Link> {/* Apply the "navlink" class */}
                        </li>
                        <li>
                            <Link to="/airpollution" className="navlink">Air Quality</Link> {/* Apply the "navlink" class */}
                        </li>
                    </ul>
                </nav> 
            </div>
        );
    };
>>>>>>> d7bec8d7ca8207d18b0a64f6bf3add876207d1d6

export default NavBar;
