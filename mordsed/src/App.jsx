import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import NavbarContainer from './Components/Navbar/NavbarContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";



const App = (props) => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavbarContainer />
            <div className="app-wrapper-content">
                <Route path="/dialogs/" render={()=><DialogsContainer/>}/>
                <Route path="/profile/:userId?" render={()=><ProfileContainer/>}/>
                <Route path="/users/" render={()=><UsersContainer/>}/>
                <Route path="/news/" component={News}/>
                <Route path="/music/" component={Music}/>
                <Route path="/settings/" component={Settings}/>
                <Route path='/login/' render={()=><Login/>}/>
            </div>
        </div>
    )
}

export default App;