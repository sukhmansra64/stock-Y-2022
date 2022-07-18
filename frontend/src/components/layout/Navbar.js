import {connect} from 'react-redux';
import propTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {faArrowTrendUp} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({auth:{isAuthenticated}}) =>{
    const userLinks = () =>(
        <>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to='/dashboard'>Dashboard</Link>
                </li>
            </ul>
            <span className='ms-auto'><button className='btn btn-light'>Sign Out</button></span>
        </>
    )
    const guestLinks = () =>(
        <>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to='/register'>Register</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to='/login'>Login</Link>
                </li>
            </ul>
        </>
    )
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'><FontAwesomeIcon icon={faArrowTrendUp}/> stock.Y</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    {isAuthenticated ? userLinks() : guestLinks()}
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes ={
    auth: propTypes.object.isRequired
}

const mapStateToProps = state =>({
    auth: state.auth
});

export default connect(mapStateToProps)(Navbar);