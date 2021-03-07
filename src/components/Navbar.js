import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({isWhite}) {
  return (
    <nav className="navbar" style={isWhite && {background: 'white'}}>
      <div className="navbar-title">
        <Link to="/">JONS</Link>
      </div>
      <Link to="/about">About</Link>
    </nav>
  )
}

Navbar.propTypes ={
  isWhite: PropTypes.bool
}

export default Navbar
