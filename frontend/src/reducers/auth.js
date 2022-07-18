import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOAD_USER,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from '../actions/types';

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    loading: true,
    user: null
};

const authReducer = (state = initialState, action) =>{
    const {type,payload} = action;
    switch (type){
        case LOAD_USER:
            return{
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem("token",payload.token);
            return{
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case LOGOUT:
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case AUTH_ERROR:
            localStorage.removeItem("token");
            return{
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null
            };
        default:
            return state;
    }
}

export default authReducer;