import styles from "./ChatUsers.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

const ChatUsers = (props) => {
    return (
        <NavLink to={`/conversations/${props.key}`} className={styles.link}>
            <div className={styles.userItem}>
                <div className={`${styles.userInfo} ${props.activeCLassName}`}>
                    <img src={props.src} className={styles.avatar}/>
                    <span className={styles.username}>{props.username}</span>
                </div>
            </div>
        </NavLink>
    );
}

export default ChatUsers;