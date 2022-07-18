import {useEffect} from 'react';
import {connect} from "react-redux";
import {setAlert} from "../../actions/alert";
import {register} from "../../actions/auth";
import propTypes from 'prop-types';
import {Link, Navigate} from "react-router-dom";

const Index = ({auth:{isAuthenticated}}) =>{
    return(
        isAuthenticated ? <Navigate tp='/dashboard'/> : <section className='landing'>
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large">stock.Y</h1>
                    <p className="lead">
                        Create an investment portfolio and retrieve up-to-date information with stock.Y
                    </p>
                    <div className="buttons">
                        <Link to="/register" className="btn btn-primary">Sign Up</Link>
                        <Link to="/login" className="btn btn-light">Login</Link>
                    </div>
                </div>
            </div>
        </section>

    );
}

Index.propTypes={
    auth: propTypes.object.isRequired
}

const mapStateToProps = state =>({
    auth: state.auth
});

export default connect(mapStateToProps)(Index);
