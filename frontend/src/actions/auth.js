import {setAlert} from "./alert";
import {REGISTER_SUCCESS,REGISTER_FAIL,LOAD_USER,AUTH_ERROR,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT} from "./types";
import axios from 'axios';
import setAuthToken from "../utilities/setAuthToken";

//register user
export const register = formData => async dispatch =>{
    try{
        const res = await axios.post('/signup',formData,{headers:{"Content-Type":"application/json"}});
        console.log(res);
        dispatch({type: REGISTER_SUCCESS,payload: {data: res.data.data, token: res.headers.authorization}})
    }catch(e){
        dispatch(setAlert(e.response.data.error,'danger'));
        dispatch({type: REGISTER_FAIL});
        setAuthToken();
    }
}
