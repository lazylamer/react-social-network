import React, {Suspense} from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route, withRouter, Switch, Redirect} from "react-router-dom";
import connect from "react-redux/lib/connect/connect";
import {compose} from "redux";
import {init} from "./redux/app-reducer";
import Spinner from "./components/common/Spinner/Spinner";
import Provider from "react-redux/lib/components/Provider";
import store from "./redux/redux-store";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import withSuspense from "./hoc/withSuspense";
import PageNotFound from "./components/common/PageNotFound/PageNotFound";

const ConversationsContainer = React.lazy(() => import('./components/Conversations/ConversationsContainer'));
const UsersContainer = React.lazy(() => import('./components/UsersContainer/UsersContainer'));
const ProfilePageContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {
    componentDidMount() {
        this.props.init();
    }

    render() {
        if (!this.props.initialized) {
            return <Spinner/>
        } else {
            return (
                <div className="wrapper">
                    <HeaderContainer/>
                    <Nav/>
                    <div className="content">
                        <Switch>
                            <Suspense fallback={<Spinner/>}>
                                <Route exact path='/' render={() => <Redirect from='/' to='/profile' />}/>
                                <Route path='/profile/:userId?' render={() => <ProfilePageContainer/> }/>
                                <Route exact path='/conversations' render={ () => <ConversationsContainer/> }/>
                                <Route exact path='/users' render={ () => <UsersContainer /> }/>
                                <Route path='/music' render={() => <Music/>}/>
                                <Route path='/settings' render={() => <Settings/>}/>
                            </Suspense>
                            <Route path='/login' render={() => <Login/>}/>
                            <Route render={() => <PageNotFound />} />
                        </Switch>
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

const AppContainer = compose(
    connect(mapStateToProps, {init}),
    withRouter
)(App)

const MainApp = props => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <AppContainer/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    )
}

export default MainApp;
