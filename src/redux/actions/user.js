import {
    FETCH_USER_FAIL,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    DETAILS_USER_FAIL,
    DETAILS_USER_REQUEST,
    DETAILS_USER_SUCCESS,
    UPDATE_USER_FAIL,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    APPROVED_USER_FAIL,
    APPROVED_USER_REQUEST,
    APPROVED_USER_SUCCESS,
    DELETE_USER_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    link
} from "../consts.js";
import axios from "axios";
import { setAlert } from "./alert";

export const deleteUser = (token, body, route) => async (dispatch) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": token,
            "user": token
        },
    }
    dispatch({
        type: DELETE_USER_REQUEST
    })
    try {
        const res = await axios.put(`${link}/user/${route}`,
            body,
            config
        )
        
        dispatch({
            type: DELETE_USER_SUCCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: DELETE_USER_FAIL
        })
        dispatch(setAlert(`Could not fetch any user`, error.response.data.message , `error`))
        console.log(error)
    }
}

export const approvedUser = (token, body, route) => async (dispatch) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": token,
            "user": token
        },
    }
    dispatch({
        type: APPROVED_USER_REQUEST
    })
    try {
        const res = await axios.put(`${link}/user/${route}`,
            body,
            config
        )
        
        dispatch({
            type: APPROVED_USER_SUCCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: APPROVED_USER_FAIL
        })
        dispatch(setAlert(`Could not fetch any user`, error.response.data.message , `error`))
        console.log(error)
    }
}

export const updateUser = (token, body, id) => async (dispatch) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": token,
            "user": token
        },
    }
    dispatch({
        type: UPDATE_USER_REQUEST
    })
    try {
        const res = await axios.put(`${link}/user/${id}`,
            body,
            config
        )
        
        dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: res.data
        });

        dispatch(setAlert(`User has been update successfully`, "" , `success`))
    } catch (error) {
        dispatch({
            type: UPDATE_USER_FAIL
        })
        dispatch(setAlert(`Could not fetch any user`, error.response.data.message , `error`))
        console.log(error)
    }
}

export const detailUser = (token, id) => async (dispatch) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": token,
            "user": token
        },
    }
    dispatch({
        type: DETAILS_USER_REQUEST
    }) 
    try {
        const res = await axios.get(`${link}/user/${id}`,
            config
        )
        
        dispatch({
            type: DETAILS_USER_SUCCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: DETAILS_USER_FAIL
        })
        dispatch(setAlert(`Could not fetch any user`, error.response.data.message , `error`))
        console.log(error)
    }
}

export const fetchUsers = (token, route, body) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": token,
            "user": token
        },
    }
    dispatch({
        type: FETCH_USER_REQUEST
    })
    try {
        const res = await axios.post(`${link}/user/${route}`,
            body,
            config
        )
        
        dispatch({
            type: FETCH_USER_SUCCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: FETCH_USER_FAIL
        })
        dispatch(setAlert(`Could not fetch any users`, error.response.data.message , `error`))
        console.log(error)
    }
}