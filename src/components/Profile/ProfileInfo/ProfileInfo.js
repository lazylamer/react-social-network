import React from "react";
import styles from "./ProfileInfo.module.css";
import Spinner from "../../common/Spinner/Spinner";
import ProfileData from "./ProfileData/ProfileData";
import ProfileForm from "./ProfileForm/ProfileForm";

const ProfileInfo = props => {

    if (!props.profile) {
        return <Spinner />
    } else {
        return(
            <div className={styles.profile}>
                { props.editMode ? <ProfileForm {...props} /> : <ProfileData {...props} />}
            </div>
        )
    }
}

export default ProfileInfo;
