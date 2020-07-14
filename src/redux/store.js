import conversationReducer from "./conversation-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./side-bar-reducer";

let store = {

    _callSubscriber() {
        console.log('CHANGES')
    },

    _state: {
        profilePage: {},
        messagesPage: {
            messagesData: [
                {
                    id: 1,
                    name: 'Sveta',
                    src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HADZj_lRER6iE9d9xJmA-gHaLH%26pid%3DApi&f=1',
                    msg: 'wanna hang out? *_*'
                },
                {
                    id: 2,
                    name: 'Oleg',
                    src: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffineartamerica.com%2Fimages-medium%2Foleg-cassini-in-a-1950s-portrait-everett.jpg&f=1&nofb=1',
                    msg: 'what\'s up, bro'
                }
            ],
            newMessageText: ''
        },
        sideBar: {
            sideBarData: [
                {
                    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HADZj_lRER6iE9d9xJmA-gHaLH%26pid%3DApi&f=1',
                    name: 'Sveta'
                },
                {
                    img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffineartamerica.com%2Fimages-medium%2Foleg-cassini-in-a-1950s-portrait-everett.jpg&f=1&nofb=1',
                    name: 'Oleg'
                },
                {
                    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mckinsey.com%2F~%2Fmedia%2FMcKinsey%2FCareers%2520REDESIGN%2FMeet%2520our%2520People%2FProfiles%2FShadrack%2520Kiratu%2Fshadrack-kiratu_profile_1536x1152.ashx&f=1&nofb=1',
                    name: 'Zanzibar'
                },

            ]
        }
    },


    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // {  type: ADD-POST  }
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = conversationReducer(this._state.messagesPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);
    }
}

export default store;
