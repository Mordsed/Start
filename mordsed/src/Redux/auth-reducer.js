import {authAPI} from "../Axios/Axios";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET-USER-DATA";

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default: {
            return state;
        }
    }
}

export const setAuthUserData = (userId, login, email, isAuth) => {
    return (
        {type: SET_USER_DATA, data: {userId, login, email, isAuth}}
    )
}

export const getAuthUserData = () => (dispatch) => {
    return authAPI.me()
        .then((response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, login, email, true))
            }
        }))
}
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then((response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = (response.data.messages.length > 0) ? response.data.messages[0] : "Some Error"
                dispatch(stopSubmit("login", {_error: message}))
            }
        }))
}
export const logout = () => (dispatch) => {
    authAPI.logout()
        .then((response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))

            }
        }))
}
export default authReducer