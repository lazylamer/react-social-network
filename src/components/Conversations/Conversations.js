import React from 'react';
import styles from './Conversations.module.css';
import ChatUsers from './ChatUsers/ChatUsers';
import Messages from './Messages/Messages';
import MessageForm from "./MessageForm/MessageForm";


const Conversations = (props) => {

    // GENERATING COMPONENTS
    let chatUsersElements = props.data
        .map( user => <ChatUsers key={user.id} username={user.name} src={user.src}/>);
    let messageElements = props.data
        .map( user => <Messages key={user.id} username={user.name} src={user.src} msg={user.msg}/>);


    return (
        <div className={styles.messages}>

            <div className={ styles.messageWrapper }>
                <div className={styles.users}>
                    {chatUsersElements}
                </div>
                {/*<div className={styles.separator}></div>*/}

            </div>

            <div className={styles.wrapper}>
                <div className={styles.chat}>
                    {messageElements}
                </div>

                <MessageForm sendMessage={props.sendMessage}/>

            </div>
        </div>
    );
}
export default Conversations;