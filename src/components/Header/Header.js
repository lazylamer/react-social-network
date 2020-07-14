import React from "react";
import styles from './Header.module.css';
import LoginBar from "./LoginBar/LoginBar";

const Header = props => {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>MOP</h1>
            {/*<img src="https://placeholder.it/" alt="#"/>*/}
            <LoginBar {...props} />
        </header>
    );
}

export default Header;
