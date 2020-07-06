import React from "react";
import styles from './PostItem.module.css';
const PostItem = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.user}>
                <div className={styles.img}></div>
                <p className={styles.username}>{props.username}</p>
            </div>
            <div className={styles.message}>
                <p className={styles.title}>Message Title</p>
                <p className={styles.text}>
                    {props.message}
                </p>
            </div>
        </div>
    );
}

export default PostItem;