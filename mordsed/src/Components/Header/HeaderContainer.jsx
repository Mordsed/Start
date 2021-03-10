import React from 'react';
import {connect} from 'react-redux';
import {getAuthUserData} from "../../Redux/auth-reducer";
import Header from "./Header";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header{...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default compose(
    connect(mapStateToProps, {getAuthUserData}),
)
(HeaderContainer)