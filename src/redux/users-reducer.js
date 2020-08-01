import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/helpers/objectHelper";

const FOLLOW = 'social-network/users-reducer/FOLLOW',
    UNFOLLOW = 'social-network/users-reducer/UNFOLLOW',
    SET_USERS = 'social-network/users-reducer/SET_USERS',
    SWITCH_CURRENT_PAGE = 'social-network/users-reducer/SWITCH_CURRENT_PAGE',
    SET_USERS_COUNT = 'social-network/users-reducer/SET_USERS_COUNT',
    TOGGLE_FETCH = 'social-network/users-reducer/TOGGLE_FETCH',
    FOLLOWING_IN_PROGRESS = 'social-network/users-reducer/FOLLOWING_IN_PROGRESS';


let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 20,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: []

}

//reducer
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id, "id", {followed: true})
                /*users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: true}
                    } else {
                        return user;
                    }
                })*/
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id, 'id', {followed: false})
                /*
                                users: state.users.map(user => {
                                    if (user.id === action.id) {
                                        return {...user, followed: false}
                                    } else {
                                        return user;
                                    }
                                })*/
            }
        case SET_USERS:
            return {...state, users: [...action.users]};
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


//Action creators
export const followSucceeded = userId => ({type: FOLLOW, id: userId})
export const unFollowSucceeded = userId => ({type: UNFOLLOW, id: userId})
export const setUsers = users => ({type: SET_USERS, users})
export const setUsersCount = count => ({type: SET_USERS_COUNT, count})
export const switchCurrentPage = currentPage => ({type: SWITCH_CURRENT_PAGE, currentPage})
export const toggleFetch = isFetching => ({type: TOGGLE_FETCH, isFetching})
export const followingInProgress = (isFetching, userId) => ({type: FOLLOWING_IN_PROGRESS, isFetching, userId});

//help functions
const toggleFollow = async (dispatch, userId, actionCreator, apiMethod) => {
    dispatch(followingInProgress(true));
    let data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(followingInProgress(false, userId));
}
//thunks
export const getUsers = (users, currentPage, pageSize) =>
    async dispatch => {
        dispatch(switchCurrentPage(currentPage));
        dispatch(toggleFetch(true));
        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleFetch(false));
        dispatch(setUsers(data.items));
        dispatch(setUsersCount(data.totalCount));
    }

    export const follow = id =>
        async dispatch => {
            await toggleFollow(dispatch, id, followSucceeded, usersAPI.follow.bind(usersAPI));

        }

    export const unFollow = id =>
        async dispatch => {
            await toggleFollow(dispatch, id, unFollowSucceeded, usersAPI.unFollow.bind(usersAPI));

        }


    export default usersReducer;
