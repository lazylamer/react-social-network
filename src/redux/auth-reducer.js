import {authAPI} from "../api/api";


const SET_USER_DATA = 'social-network/auth-reducer/SET_USER_DATA';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuthorized: false,
    password: null,
    remember: false
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuthorized) =>
    ({type: SET_USER_DATA, data: {id, email, login, isAuthorized}});

//thunks
export const checkAuth = () =>
    async dispatch => {
        let data = await authAPI.checkAuth();
        if (data.resultCode === 0) {
            const {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }
/*.then(data => {
                console.log(data)
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
            });*/

export const logIn = (email, password, remember) =>
    async dispatch => {
        let data = await authAPI.logIn(email, password, remember);
        if (data.resultCode === 0) {
            dispatch(checkAuth());
        }
    }


export const logOut = () =>
    async  dispatch => {
        let data = await authAPI.logOut();
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }


export default authReducer;