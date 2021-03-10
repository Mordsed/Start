import {usersAPI} from "../Axios/Axios";

const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN-FOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS";

let initialState = {
    users: [],
    totalCount: 0,
    pageSize: 100,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS:
            return {...state, users: action.users};

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};

        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.totalCount};

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};

        case TOGGLE_IS_FOLLOWING_PROGRESS:

            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            };

        default:
            return state;
    }
}

export const followSuccess = (userId) => {
    return (
        {type: FOLLOW, userId}
    )
}
export const unFollowSuccess = (userId) => {
    return (
        {type: UN_FOLLOW, userId}
    )
}
export const setUsers = (users) => {
    return (
        {type: SET_USERS, users}
    )
}
export const setCurrentPage = (currentPage) => {
    return (
        {type: SET_CURRENT_PAGE, currentPage}
    )
}
export const setTotalCount = (totalCount) => {
    return (
        {type: SET_TOTAL_COUNT, totalCount}
    )
}
export const toggleIsFetching = (isFetching) => {
    return (
        {type: TOGGLE_IS_FETCHING, isFetching}
    )
}
export const toggleFollowingProgress = (isFetching, userId) => {
    return (
        {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId}
    )
}


export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalCount(data.totalCount))
    });
}
export const unFollow = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.unFollow(userId)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(unFollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        });
}
export const follow = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.follow(userId)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        });
}

export default usersReducer