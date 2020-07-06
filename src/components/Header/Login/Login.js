import React from "react";
import styles from './Login.module.css';

const Login = () => {
    return (
        <div className={styles.wrapper}>
            <a href="#" className={styles.link}>Sign In</a>
            <a href="#" className={styles.linkHighlited}>Sign Up</a>
        </div>
    );
}

export default Login;