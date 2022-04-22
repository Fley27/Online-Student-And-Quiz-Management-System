import { SET_ALERT, REMOVE_ALERT } from '../consts';

export const setAlert = ( title, msg , alertType, timeout = 5000) => dispatch => {
	const id = 2;
	dispatch({
		type: SET_ALERT,
		payload: {title, msg, alertType, id }
	});
	setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};

export const avoidAlert = ( ) => dispatch => {
	setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: 2 }), 0);
};