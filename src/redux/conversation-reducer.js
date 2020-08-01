const SEND_MESSAGE = 'social-network/conversation-reducer/SEND-MESSAGE';


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
            if (!action.newMessage) return state;
            let newMessage = {
                id: state.messagesData[state.messagesData.length - 1].id + 1,
                msg: action.newMessage,
                name: _generateName()
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage]
            };
        default:
            return state;
    }
}
export const sendMessageActionCreator = newMessage => ({
    type: SEND_MESSAGE,
    newMessage
});



export default conversationReducer;