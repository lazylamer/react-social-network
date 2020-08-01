import React from 'react';
import {sendMessageActionCreator} from "../../redux/conversation-reducer";
import Conversations from "./Conversations";
import connect from "react-redux/lib/connect/connect";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        data: state.conversationPage.messagesData,
        newMessageText: state.conversationPage.newMessageText,
        isAuthorized: state.auth.isAuthorized

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: newMessage => {
            dispatch(sendMessageActionCreator(newMessage));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Conversations);