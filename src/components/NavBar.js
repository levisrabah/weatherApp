import '../styles/NavBar.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';

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
                            <Link to="/airpollution" className="navlink">Airpollution</Link> {/* Apply the "navlink" class */}
                        </li>
                        <li>
                            <Link to="/saved-location" className="navlink">Saved Locations</Link> {/* Apply the "navlink" class */}
                        </li>
                    </ul>
                </nav>
            </div>
        );
    };

export default NavBar;
