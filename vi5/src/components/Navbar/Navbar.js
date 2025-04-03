import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
      <nav className="navbar">
          <div className="navbar-container"> 
              <h1 className="navbar-title">My Website</h1> 
              <div className="nav-links"> 
                  <Link to="/home" className="nav-link">Home</Link>
                  <Link to="/nothome" className="nav-link">Not Home</Link>
              </div>
          </div>
      </nav>
    );
  };

export default Navbar;