import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={styles.profile}>
            <img className={styles.avatar} src="https://www.freewebheaders.com/wp-content/gallery/space-size-800x200/thumbs/thumbs_space-universe-header-8461-header-banner_size-800x200.jpg"/>
            <div className="info">
                <h2 className={styles.name}>John Smith</h2>
                <p className={styles.text}>Education</p>
                <p className={styles.text}>Job</p>
                <p className={styles.text}>Interests</p>
            </div>
        </div>
    );
}

export default ProfileInfo;
