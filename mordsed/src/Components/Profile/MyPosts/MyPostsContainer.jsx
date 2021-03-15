import React from 'react';
import {addPostCreator} from "../../../Redux/profile-reducer";
import MyPosts from './MyPosts';
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
       profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostCreator(newPostText))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;