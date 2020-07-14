const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuthorized: false
}

export const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: {id, email, login}})

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuthorized: true
            }
        default:
            return state;
    }
}

export default authReducer;