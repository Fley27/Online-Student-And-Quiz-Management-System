
import {
    SIGN_IN_FAIL,
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAIL,
    SIGN_UP_REQUEST,
    GET_USER_FAIL,
    GET_USER_SUCCESS,
    GET_USER_REQUEST,
    link
} from "../consts.js";
import axios from "axios";
import { setAlert } from "./alert";

export const signUp = (userData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: SIGN_UP_REQUEST
    })
    const body = userData;
    try {
        const res = await axios.post(`${link}/auth/register`,  
            body,
            config
        )
        dispatch({
            type: SIGN_UP_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: SIGN_UP_FAIL
        })
        console.log(JSON.stringify(error.response))
        dispatch(setAlert(`Can't sign up`, error.response.data.msg , `error`))
    }
}

export const signIn = (userData) => async (dispatch) => {
    const config = {
        headers:{
            "Content-Type": "application/json",
        } 
    }
    dispatch({
        type: SIGN_IN_REQUEST
    })
    try {
        const body = userData;
        const res = await axios.post(`${link}/auth/login`, 
            body,
            config
        )
        dispatch({
            type: SIGN_IN_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: SIGN_IN_FAIL
        })
        dispatch(setAlert(`Can't sign in`, error.response.data.msg , `error`))
    }
}

export const GetUserDetail = (token) => async (dispatch) => {
    dispatch({
        type: GET_USER_REQUEST
    })
    try {
        dispatch({
            type: GET_USER_SUCCESS,
            payload: token
        })
    } catch (error) {
        dispatch({
            type: GET_USER_FAIL
        })
    }
} 