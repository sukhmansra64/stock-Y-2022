import {useEffect} from 'react';
import {connect} from "react-redux";
import {setAlert} from "../actions/actions";
 import propTypes from 'prop-types';

const Index = ({setAlert}) =>{
    useEffect(()=>{
        setAlert("Hello World",'danger');
    },[]);
    return(
        <>
            <h1>Hello World</h1>
        </>
    );
}

Index.propTypes ={
    setAlert: propTypes.func.isRequired
}

export default connect(null,{setAlert})(Index);
