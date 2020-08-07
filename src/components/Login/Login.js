import React from 'react';
import styles from './Login.module.css'
import LoginForm from "./LoginForm/LoginForm";
import {getCaptcha, logIn, logOut} from "../../redux/auth-reducer";
import connect from "react-redux/lib/connect/connect";
import Redirect from "react-router-dom/es/Redirect";
import {obtainAuthorizedStatus, obtainCaptchaUrl} from "../../redux/auth-selectors";




const Login = props => {
    if (props.isAuthorized) {
        return <Redirect to={'/profile'} />
    } else {
        return(
            <div className={styles.wrapper}>
                <LoginForm {...props}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthorized: obtainAuthorizedStatus(state),
    captchaUrl: obtainCaptchaUrl(state)
})


export default connect(mapStateToProps, {logIn, logOut, getCaptcha})(Login);