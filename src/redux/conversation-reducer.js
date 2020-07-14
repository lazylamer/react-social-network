const SEND_MESSAGE = 'SEND-MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
});

export const onMessageTextChangeActionCreator = text => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    updatedText: text
});

let initialState = {
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

const conversationReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            if (!state.newMessageText) return state;
            let newMessage = {
                id: state.messagesData[state.messagesData.length - 1].id + 1,
                msg: state.newMessageText,
                name: _generateName()
            };
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, newMessage]
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.updatedText
            };
        default:
            return state;
    }
}

export default conversationReducer;