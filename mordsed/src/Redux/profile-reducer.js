import {profileAPI, usersAPI} from "../Axios/Axios";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

let initialState = {
    posts: [
        {id: 1, message: 'Hello, my name is Dima!', likeCount: "5"},
        {id: 2, message: 'I from in Vologda, Russia', likeCount: "13"},
        {id: 3, message: 'Hello, my name is Dima!', likeCount: "2"},
        {id: 4, message: 'I from in Vologda, Russia', likeCount: "9"},
        {id: 5, message: 'Hello, my name is Dima!', likeCount: "1"},
        {id: 6, message: 'I from in Vologda, Russia', likeCount: "3"}
    ],
    profile: null,
    status: '',

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let text = action.newPostText
            return {
                ...state,
                posts: [...state.posts, {id: 7, message: text}],
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state, status: action.status
            }
        default: {
            return state;
        }
    }
}

export const addPostCreator = (newPostText) => {
    return (
        {type: ADD_POST, newPostText}
    )
}
export const setUserProfile = (profile) => {
    return (
        {type: SET_USER_PROFILE, profile}
    )
}
export const setUserStatus = (status) => {
    return (
        {type: SET_USER_STATUS, status}
    )
}
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}
export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setUserStatus(response.data))
    })
}
export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    })
}


export default profileReducer