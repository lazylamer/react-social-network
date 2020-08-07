import React from 'react';
import styles from './AvatarUpload.module.css';


const AvatarUpload = ({updateProfilePhoto}) => {
    const updatePhoto = e => {
        if (e.target.files.length) {
            updateProfilePhoto(e.target.files[0]);
        }

    }

    return (
        <>
            <input className={styles.input} type="file" onChange={updatePhoto}/>
        </>
    )
}

export default AvatarUpload;