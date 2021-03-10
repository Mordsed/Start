import React from "react";
import {connect} from "react-redux";
import {
    getUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unFollow, follow
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Loader";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalCount={this.props.totalCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unFollowSuccess={this.props.unFollowSuccess}
                   followSuccess={this.props.followSuccess}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
                   unFollow={this.props.unFollow}
                   follow={this.props.follow}/>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
const UsersCont = connect(mapStateToProps, {
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
    unFollow,
    follow,
})(UsersContainer)

export default UsersCont