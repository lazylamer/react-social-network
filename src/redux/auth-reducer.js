import {authAPI, securityAPI} from "../api/api";


const SET_USER_DATA = 'social-network/auth-reducer/SET_USER_DATA';
const GET_CAPTCHA_URL = 'social-network/auth-reducer/GET_CAPTCHA_URL'


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuthorized: false,
    password: null,
    remember: false,
    captchaUrl: null // if captcha url is null then it is not required
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        case GET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.url
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuthorized) =>
    ({type: SET_USER_DATA, data: {id, email, login, isAuthorized}});

export const getCaptchaUrl = url => ({type: GET_CAPTCHA_URL, url})

//thunks
export const checkAuth = () =>
    async dispatch => {
        let data = await authAPI.checkAuth();
        if (data.resultCode === 0) {
            const {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }

export const getCaptcha = () =>
    async dispatch => {
        debugger
        let data = await securityAPI.getCaptcha();
        console.log(data);
        debugger;
        dispatch(getCaptchaUrl(data.url));
    }

export const logIn = (email, password, remember, captcha = null) =>
    async dispatch => {
        let data = await authAPI.logIn(email, password, remember, captcha);
        if (data.resultCode === 0) {
            dispatch(checkAuth());
        } else {
            if (data.resultCode === 10) {
                debugger;
                dispatch(getCaptcha());
            }
        }
    }


export const logOut = () =>
    async dispatch => {
        let data = await authAPI.logOut();
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }



export default authReducer;