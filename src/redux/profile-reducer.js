const ADD_POST                = 'ADD-POST',
      UPDATE_NEW_FORM_TEXT    = 'UPDATE-NEW-POST-TEXT',
      SET_USER_PAGE           = 'SET_USER_PAGE';


export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = text => ({type: UPDATE_NEW_FORM_TEXT,updatedText: text});
export const setUserPage = profile => ({ type: SET_USER_PAGE, profile})


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
    newPostText: '',
    profile: null

};


const _generateName = () => {
    let characters = 'qwertyuiopasdfghjklzxcvbnm';
    let name = '';
    let count = Math.floor(Math.random() * 10);
    for (let i = 0; i < count; i++) {
        name += characters[Math.floor(Math.random() * 10 + i)];
    }
    return name;
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST:
            if (!state.newPostText) return state;
            let newPost= {
                id: state.users[state.users.length - 1].id + 1,
                msg: state.newPostText,
                name: _generateName()
            };
            return {
                ...state,
                newPostText: '',
                usersData: [...state.users, newPost]
            };
        case UPDATE_NEW_FORM_TEXT:
            return {
                ...state,
                newPostText: action.updatedText
            };
        case SET_USER_PAGE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export default profileReducer;