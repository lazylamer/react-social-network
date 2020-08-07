import {profileAPI} from "../api/api";

const ADD_POST = 'social-network/profile-reducer/ADD-POST',
    SET_USER_PAGE = 'social-network/profile-reducer/SET_USER_PAGE',
    SET_STATUS = 'social-network/profile-reducer/SET_STATUS',
    REMOVE_POST = 'social-network/profile-reducer/REMOVE_POST',
    IS_OWNER = 'social-network/profile-reducer/IS_OWNER',
    UPDATE_PHOTO_SUCCEEDED = 'social-network/profile-reducer/UPDATE_PHOTO_SUCCEEDED';


const generateName = () => {
    let characters = 'qwertyuiopasdfghjklzxcvbnm';
    let name = '';
    let count = Math.floor(Math.random() * 10);
    for (let i = 0; i < count; i++) {
        name += characters[Math.floor(Math.random() * 10 + i)];
    }
    return name;
}

let initialState = {
    users: [
        {
            id: 1,
            name: 'Sveta',
            src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HADZj_lRER6iE9d9xJmA-gHaLH%26pid%3DApi&f=1',
            msg: 'Very many letters'
        },
        {
            id: 2,
            name: 'Oleg',
            src: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffineartamerica.com%2Fimages-medium%2Foleg-cassini-in-a-1950s-portrait-everett.jpg&f=1&nofb=1',
            msg: 'Very many letters again'
        }
    ],
    profile: null,
    status: '',
    isOwner: false
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            if (!action.newPost) return state;
            let newPost = {
                id: state.users[state.users.length - 1].id + 1,
                msg: action.newPost,
                name: generateName()
            };
            return {
                ...state,
                users: [...state.users, newPost]
            };
        case REMOVE_POST:
            return {
                ...state,
                users: state.users.filter(item => item.id !== action.postId)
            }
        case SET_USER_PAGE:
            console.log(action.profile);
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.text
            }
        case IS_OWNER:
            return {
                ...state,
                isOwner: action.flag
            }
        case UPDATE_PHOTO_SUCCEEDED:
            return {
                ...state,
                profile: {...state.profile, photos: {...action.photos}}
            }
        default:
            return state;
    }
}


export const toggleOwner = flag => ({type: IS_OWNER, flag})
export const addPostActionCreator = newPost => ({type: ADD_POST, newPost});
export const setUserPage = profile => ({type: SET_USER_PAGE, profile});
export const setStatus = text => ({type: SET_STATUS, text});
export const removePost = postId => ({type: REMOVE_POST, postId});
export const updateProfilePhotoSucceeded = photos => ({type: UPDATE_PHOTO_SUCCEEDED, photos})


//THUNK
export const getProfile = id =>
    async dispatch => {
        let data = await profileAPI.getProfile(id);
        dispatch(setUserPage(data));
    }

export const getStatus = id =>
    async dispatch => {
        let data = await profileAPI.getStatus(id);
        dispatch(setStatus(data));
    }

export const updateStatus = newStatus =>
    async dispatch => {
        let data = await profileAPI.updateStatus(newStatus);
        if (data.resultCode === 0) {
            dispatch(setStatus(newStatus));
        }
    }
export const updateProfilePhoto = image =>
    async dispatch => {
        let data = await profileAPI.updateProfilePhoto(image);
        if (data.resultCode === 0) {
            console.log(data);
            dispatch(updateProfilePhotoSucceeded(data.data.photos));
        }
    }

export const updateProfile = values =>
    async (dispatch, getState) => {
    let data = await profileAPI.updateProfile(values);
    debugger;
    if (data.resultCode === 0) {
        //dispatch(action)
        dispatch(getProfile(getState().auth.id));
    }
}








export default profileReducer;