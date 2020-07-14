const FOLLOW              = 'FOLLOW',
      UNFOLLOW            = 'UNFOLLOW',
      SET_USERS           = 'SET_USERS',
      SWITCH_CURRENT_PAGE = 'SWITCH_CURRENT_PAGE',
      SET_USERS_COUNT     = 'SET_USERS_COUNT',
      TOGGLE_FETCH               = 'TOGGLE_FETCH';


let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 19,
    currentPage: 1,
    isFetching: false

}

export const follow = (userId) => ({type: 'FOLLOW', id: userId})
export const unFollow = (userId) => ({type: 'UNFOLLOW', id: userId})
export const setUsers = (users) => ({type: 'SET_USERS', users})
export const setUsersCount = (count) => ({type: 'SET_USERS_COUNT', count})
export const switchCurrentPage = (currentPage) => ({type: 'SWITCH_CURRENT_PAGE', currentPage})
export const toggleFetch = isFetching => ({ type: 'TOGGLE_FETCH', isFetching})

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
        default:
            return state;
    }
}


export default usersReducer;
