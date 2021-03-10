import React from 'react';
import {addPostCreator, updatePostTextCreator} from "../../../../Redux/profile-reducer";
import MyPosts from '../MyPosts';
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
       profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator())
        },
        updatePostText: (text) => {
            dispatch(updatePostTextCreator(text))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;