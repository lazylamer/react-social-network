import React from "react";
import styles from './Nav.module.css';
import {NavLink} from "react-router-dom";
import SideBarContainer from "./SideBar/SideBarContainer";

const Nav = (props) => {

    return (
        <div className={styles.wrapper}>
            <nav className={styles.nav}>
                <NavLink to="/profile" className={styles.link} activeClassName={styles.active}>Profile</NavLink>
                <NavLink to="/conversations" className={styles.link} activeClassName={styles.active}>Messages</NavLink>
                <NavLink to="/users" className={styles.link} activeClassName={styles.active}>Users</NavLink>
                <NavLink to="/music" className={styles.link} activeClassName={styles.active}>Music</NavLink>
                <NavLink to="/settings" className={styles.link} activeClassName={styles.active}>Settings</NavLink>
            </nav>
            <SideBarContainer />

        </div>
    );
}

export default Nav;
