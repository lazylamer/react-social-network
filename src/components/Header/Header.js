import React from "react";
import styles from './Header.module.css';
import Login from "./Login/Login";

const Header = () => {
    return (
        <header className={styles.header}>
            {/*<img className={styles.img} src="https://www.flaticon.com/premium-icon/icons/svg/3128/3128313.svg"/>*/}
            {/*<img className={styles.img} src="https://assets.awwwards.com/awards/images/2015/08/giant-owk-awwwards-logos.gif"/>*/}
            {/*<img className={styles.img} src="./../../imgs/icon.png" />*/}
            <h1 className={styles.logo}>MOP</h1>
            {/*<img src="https://placeholder.it/" alt="#"/>*/}
            <Login />
        </header>
    );
}

export default Header;
