import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route, withRouter} from "react-router-dom";
import ConversationsContainer from "./components/Conversations/ConversationsContainer";
import UsersContainer from "./components/UsersContainer/UsersContainer";
import ProfilePageContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import connect from "react-redux/lib/connect/connect";
import {compose} from "redux";
import {init} from "./redux/app-reducer";
import Spinner from "./components/common/Spinner/Spinner";


class App extends React.Component {
    componentDidMount() {
        this.props.init();
    }

    render() {
        if (!this.props.initialized) {
            return <Spinner />
        } else {
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
                        <Route path='/login' render={ () => <Login />} />
                    </div>
                    {/*<Footer />*/}
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized
});

export default compose(
    connect(mapStateToProps, {init}),
    withRouter
)(App)
