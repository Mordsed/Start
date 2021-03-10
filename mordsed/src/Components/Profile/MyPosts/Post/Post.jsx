import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img
                    src="https://инквизиция-в.рф/pluginfile.php/2548/course/overviewfiles/react%404x.png"/>
                {props.message}
                <div>
                    <span>like</span>{props.likeCount}
                </div>
            </div>
        </div>
    );
}

export default Post;