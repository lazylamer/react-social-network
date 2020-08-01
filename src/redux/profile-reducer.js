import {profileAPI} from "../api/api";

const ADD_POST      = 'ADD-POST',
      SET_USER_PAGE = 'SET_USER_PAGE',
      SET_STATUS    = 'SET_STATUS',
      REMOVE_POST   = 'REMOVE_POST';


export const addPostActionCreator = newPost => ({type: ADD_POST, newPost});
export const setUserPage = profile => ({type: SET_USER_PAGE, profile});
export const setStatus = text => ({type: SET_STATUS, text});
export const removePost = postId => ({type: REMOVE_POST, postId});


//THUNK
export const getProfile = id =>
    (dispatch) => {
        profileAPI.getProfile(id)
            .then(data => {
               dispatch(setUserPage(data));
            });
    }

export const getStatus = id =>
    (dispatch) => {
        profileAPI.getStatus(id)
            .then(data => {
                dispatch(setStatus(data))
            });
    }

export const updateStatus = newStatus =>
    (dispatch) => {
        profileAPI.updateStatus(newStatus)
            .then(data =>{
                if(data.resultCode === 0) {
                    dispatch(setStatus(newStatus));
                }
            });
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
    status: ''
};


const generateName = () => {
    let characters = 'qwertyuiopasdfghjklzxcvbnm';
    let name = '';
    let count = Math.floor(Math.random() * 10);
    for (let i = 0; i < count; i++) {
        name += characters[Math.floor(Math.random() * 10 + i)];
    }
    return name;
}

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
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return  {
                ...state,
                status: action.text
            }
        default:
            return state;
    }
}

export default profileReducer;