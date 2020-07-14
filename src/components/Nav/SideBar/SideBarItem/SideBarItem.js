import React from 'react';
import styles from './SideBarItem.module.css';

const SideBarItem = (props) => {
    return (
        <div className={styles.item}>
            <img src={props.img} alt="#" className={styles.img}/>
            <p className={styles.username}>{props.name}</p>
        </div>
    );
}

export default SideBarItem;