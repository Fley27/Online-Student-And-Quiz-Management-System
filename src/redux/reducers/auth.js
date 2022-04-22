import {
    SIGN_IN_FAIL,
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAIL,
    SIGN_UP_REQUEST,
    GET_USER_FAIL,
    GET_USER_SUCCESS,
    GET_USER_REQUEST
} from "../consts.js";
import jwtDecode from "jwt-decode";

const initialState = {
    loading: false,
    token: null,
    isAuthenticated: false,
    user: null,
    redirectTo: ""
}

export default function authReducer ( state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SIGN_IN_REQUEST:
        case SIGN_UP_REQUEST:
            return {
                ...state, 
                loading: true,
                user: null,
                token: null,
                isAuthenticated: false
            }
        case GET_USER_REQUEST: {
            return{
                ...state,
                loading: true,
                user: null,
            }
        }
        case SIGN_IN_SUCCESS:
        case SIGN_UP_SUCCESS: 
            return {
                ...state,
                loading: false,
                token: payload.token,
                isAuthenticated: true,
                redirectTo: payload.redirectTo
            }
        case GET_USER_SUCCESS: {
            return{
                ...state,
                loading: false,
                user: jwtDecode(state.token)
            }
        }
        case SIGN_IN_FAIL:
        case SIGN_UP_FAIL: 
            return {
                ...state,
                loading: false,
                token: null,
                user: null,
                isAuthenticated: false
            }
        case GET_USER_FAIL: {
            return{
                ...state,
                loading: false,
                user: null
            }
        }
        default: {
            return state
        }
    }
}

