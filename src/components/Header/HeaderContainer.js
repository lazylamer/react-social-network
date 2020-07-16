import React from 'react';
import Header from "./Header";
import * as axios from 'axios';
import connect from "react-redux/lib/connect/connect";
import {checkAuth, setAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.checkAuth();
    }

    render() {
        return(
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthorized: state.auth.isAuthorized,
    login: state.auth.login
})


export default connect(mapStateToProps, {checkAuth})(HeaderContainer);