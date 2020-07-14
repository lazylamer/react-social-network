import React from 'react';
import styles from './SydeBar.module.css';
import SideBarItem from "./SideBarItem/SideBarItem";

const SideBar = (props) => {

    let sideBarItems = props.data
        .map( user => <SideBarItem key={user.id} img={user.img} name={user.name}/>);

    return (
        <div className={styles.sideBar}>
            <h4>Friends</h4>
            <div className={styles.friendsWrapper}>
                {sideBarItems}
            </div>
        </div>
    );
}

export default SideBar;