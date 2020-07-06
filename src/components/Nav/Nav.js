import React from "react";
import styles from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <a href="/profile" className={styles.link}>Profile</a>
            <a href="/conversations" className={styles.link}>Messages</a>
            <a href="/music" className={styles.link}>Music</a>
            <a href="/settings" className={styles.link}>Settings</a>
        </nav>
    );
}

export default Nav;
