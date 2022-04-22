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
    DELETE_USER_SUCCESS
} from "../consts.js";

const initialState = {
    loading: false,
    users: [],
    user: null,
}

export default function authReducer ( state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case DETAILS_USER_REQUEST:
        case UPDATE_USER_REQUEST:
        case APPROVED_USER_REQUEST:
        case DELETE_USER_REQUEST:
            return {
                ...state, 
                loading: true,
                user: null,
            }
        case FETCH_USER_REQUEST:
            return {
                ...state, 
                loading: true,
            }
        case DETAILS_USER_SUCCESS:
        case UPDATE_USER_SUCCESS:
        case APPROVED_USER_SUCCESS:
        case DELETE_USER_SUCCESS: {
            return{
                ...state,
                loading: true,
                user: payload,
            }
        }
        case FETCH_USER_SUCCESS: 
            return {
                ...state,
                loading: false,
                users: payload
            }
        case FETCH_USER_FAIL:
            return {
                ...state,
                loading: false,
                users: [],
            }
        case DETAILS_USER_FAIL:
        case UPDATE_USER_FAIL:
        case APPROVED_USER_FAIL:
        case DELETE_USER_FAIL: {
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