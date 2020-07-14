import React from 'react';
import {onMessageTextChangeActionCreator, sendMessageActionCreator} from "../../redux/conversation-reducer";
import Conversations from "./Conversations";
import connect from "react-redux/lib/connect/connect";


const mapStateToProps = (state) => {
    return {
        data: state.conversationPage.messagesData,
        newMessageText: state.conversationPage.newMessageText,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeMessageInput: (text) => {
            dispatch(onMessageTextChangeActionCreator(text));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        }
    }
}

const ConversationsContainer = connect(mapStateToProps, mapDispatchToProps)(Conversations);


export default ConversationsContainer;