import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-reducer";
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
        addPost: (newPost) => {
            dispatch(addPostActionCreator(newPost));
        }
    }
}

const ConversationsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default ConversationsContainer;