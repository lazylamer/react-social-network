import React from 'react';
import styles from './Login.module.css'
import LoginForm from "./LoginForm/LoginForm";
import {logIn, logOut} from "../../redux/auth-reducer";
import connect from "react-redux/lib/connect/connect";
import Redirect from "react-router-dom/es/Redirect";




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
    isAuthorized: state.auth.isAuthorized
})


export default connect(mapStateToProps, {logIn, logOut})(Login);