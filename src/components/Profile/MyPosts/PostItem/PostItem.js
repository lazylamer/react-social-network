import React from "react";
import styles from './PostItem.module.css';

const PostItem = (props) => {
    return (
        <div className={styles.item} id={props.key}>
            <div className={styles.user}>
                <img src={props.src} alt="" className={styles.img}/>
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