import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Conversations from './components/Conversations/Conversations';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
// import ReactRouterComponent from "react-router-app/src/App";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header />
                <Nav />
                <div className="content">
                    <Route path='/profile' component={Profile}/>
                    <Route path='/conversations' component={Conversations}/>
                    <Route path='/music' component={Music} />
                    {/*<Route path='/settings' component={Settings} />*/}
                    {/*<Profile />*/}
                    {/*<Conversations />*/}
                </div>
                {/*<Footer />*/}
            </div>
        </BrowserRouter>
    );
}

export default App;
