import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators/validator";
import {TextArea} from "../../Common/FormsControl/FormsControl";


const MyPosts = (props) => {

    let state = props.profilePage
    let postElements = state.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>);

    let addNewPost = (values) => {
        props.addPost(values.newPostText)
    }
    return (
        <div className={s.content}>
            <div className={s.posts}>
                <h1> My posts </h1>
                <MyPostsFormRedux onSubmit={addNewPost}/>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

const maxLength50 = maxLength(50)

const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} name={"newPostText"} placeholder={"Enter you post"}
                validate={[required,maxLength50]}/>
            </div>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    )
}

const MyPostsFormRedux = reduxForm({form: "postAddPostForm"})(MyPostsForm)

export default MyPosts;