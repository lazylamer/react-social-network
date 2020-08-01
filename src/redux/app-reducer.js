import {checkAuth} from "./auth-reducer";

const INIT_SUCCEEDED = 'INIT_SUCCEEDED';

export const initSucceeded = () => ({ type: INIT_SUCCEEDED})

let initialState = {
    initialized: false
}
// ------------ //
//    THUNKS    //
// ------------ //

export const init = () =>
    dispatch => {
        let promise = dispatch(checkAuth());
        Promise.all([promise]).then( () => {
            dispatch(initSucceeded())
        })
    }


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_SUCCEEDED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export default appReducer;