import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuthorized: false
}

export const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: {id, email, login}})

export const checkAuth = () =>
    (dispatch) => {
        authAPI.checkAuth()
            .then(data => {
                console.log(data)
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            });
    }

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            debugger;
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