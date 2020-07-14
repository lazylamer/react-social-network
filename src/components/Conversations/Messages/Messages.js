import React from 'react';
import styles from './Messages.module.css';

const Messages = (props) => {
    return (
        <div className={styles.wrapper}
             role="textBox"
             aria-multiline="true">
            <div className={styles.users}>
                <img src={props.src} alt="avatar" className={styles.avatar}/>
                <p className={styles.username}>{props.username}a</p>
            </div>
            <div className={styles.message}>
                <p className={styles.text}>{props.msg}</p>
            </div>
        </div>
    );
}

export default Messages;