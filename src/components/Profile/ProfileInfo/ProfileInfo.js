import React from "react";
import styles from "./ProfileInfo.module.css";
import Spinner from "../../common/Spinner/Spinner";
import defaultPhoto from '../../../imgs/peon.png'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Spinner />
    } else {
        return(
            <div className={styles.profile}>
                <img className={styles.avatar} src={props.profile.photos.large ? props.profile.photos.large : defaultPhoto } alt={'#'}/>
                <div className="info">
                    <h2 className={styles.name}>{props.profile.fullName}</h2>
                    <p className={styles.text}>Education</p>
                    <p className={styles.text}>Job: { props.profile.job ? 'finding' : 'working'}</p>
                    <p className={styles.text}>Interests</p>
                    <div className={styles.contactsWrapper}>
                        <a href="#" className={styles.contactLink}>Contacts</a>
                        <div className={styles.contacts}>
                            <a href={props.profile.contacts.facebook} className={`${styles.social} ${styles.f}`} >facebook</a>
                            <a href={props.profile.contacts.twitter}  className={`${styles.social} ${styles.t}`}>twitter</a>
                            <a href={props.profile.contacts.vk}  className={`${styles.social} ${styles.v}`}>vk</a>
                            <a href={props.profile.contacts.instagram}  className={`${styles.social} ${styles.i}`}>instagram</a>
                            <a href={props.profile.contacts.github}  className={`${styles.social} ${styles.g}`}>github</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileInfo;
