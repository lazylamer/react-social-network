import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route} from "react-router-dom";
import ConversationsContainer from "./components/Conversations/ConversationsContainer";
import UsersContainer from "./components/UsersContainer/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import ProfilePageContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = props => {

    return (
        <div className="wrapper">
            <HeaderContainer />
            <Nav />

            <div className="content">
                <Route path='/profile/:userId?' render={ () => <ProfilePageContainer /> } />
                <Route exact path='/conversations' render={ () => <ConversationsContainer  /> } />
                <Route exact path='/users' render={ () => <UsersContainer />} />
                <Route path='/music' render={() => <Music /> } />
                <Route path='/settings' render={() => <Settings /> } />
            </div>
            {/*<Footer />*/}
        </div>
    );
}

export default App;
