import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import connect from "react-redux/lib/connect/connect";
import MyPosts from "./MyPosts";



const mapStateToProps = (state) => {

    return {
        data: state.profilePage.users,
        newMessageText: state.profilePage.newPostText,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(onPostChangeActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const ConversationsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default ConversationsContainer;