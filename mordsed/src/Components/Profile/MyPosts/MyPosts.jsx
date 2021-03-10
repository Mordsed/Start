import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {

    let state = props.profilePage
    let postElements = state.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>);
    let newPostText = state.newPostText

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updatePostText(text)
    }

    return (
        <div className={s.content}>
            <div className={s.posts}>
                <h1> My posts </h1>
                <div>
                    <div>
                        <textarea onChange={onPostChange} value={newPostText}/>
                    </div>
                    <div>
                        <button onClick={onAddPost}>Отправить</button>
                    </div>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;