import {usersAPI} from "../Axios/Axios";

const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState = {
    posts: [
        {id: 1, message: 'Hello, my name is Dima!', likeCount: "5"},
        {id: 2, message: 'I from in Vologda, Russia', likeCount: "13"},
        {id: 3, message: 'Hello, my name is Dima!', likeCount: "2"},
        {id: 4, message: 'I from in Vologda, Russia', likeCount: "9"},
        {id: 5, message: 'Hello, my name is Dima!', likeCount: "1"},
        {id: 6, message: 'I from in Vologda, Russia', likeCount: "3"}
    ],
    newPostText: '',
    profile: null

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let text = state.newPostText
            return {
                ...state,
                posts: [...state.posts, {id: 7, message: text}],
                newPostText: ''
            }
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.updateText
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        default: {
            return state;
        }
    }
}

export const addPostCreator = () => {
    return (
        {type: ADD_POST}
    )
}

export const setUserProfile = (profile) => {
    return (
        {type: SET_USER_PROFILE, profile}
    )
}

export const updatePostTextCreator = (text) => {
    return (
        {type: UPDATE_POST_TEXT, updateText: text}
    )
}
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}


export default profileReducer