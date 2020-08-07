import React from 'react';
import styles from "../../ProfileInfo.module.css";

const Contacts = props => {
    return (
        <div className={styles.contactsWrapper}>
            <a href="#" className={styles.contactLink}>Contacts</a>
            <div className={styles.contacts}>
                <a href={props.profile.contacts.facebook}
                   className={`${styles.social} ${styles.f}`}>facebook</a>
                <a href={props.profile.contacts.twitter} className={`${styles.social} ${styles.t}`}>twitter</a>
                <a href={props.profile.contacts.vk} className={`${styles.social} ${styles.v}`}>vk</a>
                <a href={props.profile.contacts.instagram}
                   className={`${styles.social} ${styles.i}`}>instagram</a>
                <a href={props.profile.contacts.github} className={`${styles.social} ${styles.g}`}>github</a>
            </div>
        </div>
    )
}

export default Contacts;