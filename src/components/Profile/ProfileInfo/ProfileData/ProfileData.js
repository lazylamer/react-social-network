import React from 'react';
import styles from "../ProfileInfo.module.css";
import defaultPhoto from "../../../../imgs/peon.png";
import StatusWithHooks from "./Status/StatusWithHooks";
import AvatarUpload from "../AvatarUpload/AvatarUpload";

const ProfileData = props => {

    const enableEditMode = () => {
        props.setEditMode(true);
    }
    return (
        <>
            { props.isOwner && <button onClick={enableEditMode} className={styles.editBtn}>edit</button>}
            <img className={styles.avatar} src={props.profile.photos.large ? props.profile.photos.large : defaultPhoto}
                 alt={'#'}/>
            <div className="info">
                <h2 className={styles.name}>{props.profile.fullName}</h2>
                <p className={styles.text}>Professional skills: {props.profile.lookingForAJobDescription}</p>
                <p className={styles.text}>Job: {props.profile.lookingForAJob ? 'finding' : 'working'}</p>
                <StatusWithHooks status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner}/>
                {props.isOwner && <AvatarUpload updateProfilePhoto={props.updateProfilePhoto}/>}
                { props.profile.contacts.map}
            </div>
        </>
    )
}

export default ProfileData;
