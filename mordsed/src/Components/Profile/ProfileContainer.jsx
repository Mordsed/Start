import React from 'react';
import {connect} from 'react-redux';
import {getUserProfile, getUserStatus, updateUserStatus} from "../../Redux/profile-reducer";
import Profile from "./Profile";
import {withRouter} from 'react-router-dom';
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorisedUserId;
            if (!userId){
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} updateUserStatus={this.props.updateUserStatus} status={this.props.status} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorisedUserId: state.auth.userId,
    }
}
export default compose(
    connect(mapStateToProps, {getUserProfile,getUserStatus,updateUserStatus}),
    withRouter)
(ProfileContainer)



