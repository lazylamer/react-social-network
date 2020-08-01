import React from "react";
import styles from './LoginBar.module.css';
import {NavLink} from "react-router-dom";
import defaultPhoto from '../../../imgs/peon.png';

const LoginBar = props => {

        const logOut = () => {
            props.logOut();
        }

        if (props.isAuthorized) {
            return(
                <div className={styles.wrapperIn}>
                    <img src={defaultPhoto} alt="#" className={styles.userPhoto}/>
                    <span className={styles.login}>{props.login}</span>
                    <button onClick={logOut} >logOut</button>
                </div>
            );
        } else {
            return(
                <div className={styles.wrapperOut}>
                    <NavLink to={`/login`} href="#" className={styles.link}>Sign In</NavLink>
                    {/*<NavLink to={`/`} href="#" className={styles.linkHighlited}>Sign Up</NavLink>*/}
                </div>
            )
        }

}

export default LoginBar;