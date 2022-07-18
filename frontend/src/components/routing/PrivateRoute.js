import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {Navigate, Route} from "react-router-dom";

const PrivateRoute = ({auth:{isAuthenticated, loading}, component: Component, ...rest}) => (
    <Route {...rest} render={props => !isAuthenticated&&!loading ? (<Navigate to='/login'/>) : (<Component {...props}/>)}/>
);

const mapStateToProps = (state) => ({
    auth: state.auth
});

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(PrivateRoute);