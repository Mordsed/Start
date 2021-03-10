import React from "react";
import userPhoto from "../../assets/images/user.jpg"
import s from "./Users.module.css"
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../Axios/Axios";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>

        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : ""}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
        <span>
            <div className={s.usersPhoto}>
                <NavLink to={"profile/" + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                </NavLink>
            </div>
            <div>
                {u.followed
                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.unFollow(u.id)
                    }}> Unfollow </button>

                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.follow(u.id)
                    }}> Follow </button>}
            </div>
        </span>
                <span>
                    <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                    </span>
                        <span>
                            <div>{"u.country"}</div>
                            <div>{"u.city"}</div>
                        </span>
                </span>
            </div>)}
    </div>
}

export default Users


