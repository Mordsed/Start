import React from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import NavbarContainer from './Components/Navbar/NavbarContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializationApp} from "./Redux/app-reducer";
import Preloader from "./Components/Common/Loader/Loader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializationApp()
    }

    render() {

        if (!this.props.initialization) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavbarContainer/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs/" render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/users/" render={() => <UsersContainer/>}/>
                    <Route path="/news/" component={News}/>
                    <Route path="/music/" component={Music}/>
                    <Route path="/settings/" component={Settings}/>
                    <Route path='/login/' render={() => <Login/>}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        initialization: state.app.initialization
    }
}

export default compose(
    connect(mapStateToProps, {initializationApp}),
    withRouter)
(App)
