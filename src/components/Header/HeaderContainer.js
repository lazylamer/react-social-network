import React from 'react';
import Header from "./Header";
import * as axios from 'axios';
import connect from "react-redux/lib/connect/connect";
import {setAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.checkAuth()
            .then(data => {
                console.log(data)
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
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


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);