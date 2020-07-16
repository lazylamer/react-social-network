import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SWITCH_CURRENT_PAGE = 'SWITCH_CURRENT_PAGE',
    SET_USERS_COUNT = 'SET_USERS_COUNT',
    TOGGLE_FETCH = 'TOGGLE_FETCH',
    FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';


let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 20,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: []

}


//Action creators
export const followSuccess = (userId) => ({type: 'FOLLOW', id: userId})
export const unFollowSuccsess = (userId) => ({type: 'UNFOLLOW', id: userId})
export const setUsers = (users) => ({type: 'SET_USERS', users})
export const setUsersCount = (count) => ({type: 'SET_USERS_COUNT', count})
export const switchCurrentPage = (currentPage) => ({type: 'SWITCH_CURRENT_PAGE', currentPage})
export const toggleFetch = isFetching => ({type: 'TOGGLE_FETCH', isFetching})
export const followingInProgress = (isFetching, userId) => ({type: FOLLOWING_IN_PROGRESS, isFetching, userId});


//thunks
export const getUsers = (users, currentPage, pageSize) => {
    return (dispatch) => {
        if (users.length === 0) {
            dispatch(switchCurrentPage(currentPage));
            dispatch(toggleFetch(true));
            usersAPI.getUsers(currentPage, pageSize).then(data => {
                dispatch(toggleFetch(false));
                dispatch(setUsers(data.items));
                dispatch(setUsersCount(data.totalCount));
            });
        } else {
            dispatch(toggleFetch(true));
            dispatch(switchCurrentPage(currentPage));
            usersAPI.getUsers(currentPage, pageSize).then(data => {
                dispatch(toggleFetch(false));
                dispatch(setUsers(data.items));
            });
        }
    }
}
export const follow = (id) => {
    return (dispatch) => {
        dispatch(followingInProgress(true));
        usersAPI.follow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(id));
                }
                dispatch(followingInProgress(false, id));
            });
    }
}

export const unFollow = (id) => {
    return (dispatch) => {
        dispatch(followingInProgress(true));
        usersAPI.unFollow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unFollowSuccsess(id));
                }
                dispatch(followingInProgress(false, id));
            });
    }

}



//reducer
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: true}
                    } else {
                        return user;
                    }
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: false}
                    } else {
                        return user;
                    }
                })
            }
        case SET_USERS:
            return {...state, users: action.users};
        case SWITCH_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_USERS_COUNT:
            return {...state, totalCount: action.count};
        case TOGGLE_FETCH:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                isFollowingInProgress: action.isFetching
                    ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}


export default usersReducer;
