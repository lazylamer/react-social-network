import React from 'react';
import styles from './Conversations.module.css';
import ChatUsers from './ChatUsers/ChatUsers';
import Messages from './Messages/Messages';
import {onMessageTextChangeActionCreator, sendMessageActionCreator} from "../../redux/conversation-reducer";


const Conversations = (props) => {

    console.log(props)
    // GENERATING COMPONENTS
    let chatUsersElements = props.data
        .map( user => <ChatUsers key={user.id} username={user.name} src={user.src}/>);
    let messageElements = props.data
        .map( user => <Messages key={user.id} username={user.name} src={user.src} msg={user.msg}/>);

    let chatInputField = React.createRef();

    //LISTENERS
    let sendMessage = (e) => {
        e.preventDefault();
        props.sendMessage();
    }

    let onChangeMessageInput = () => {
        let text = chatInputField.current.value;
        props.onChangeMessageInput(text);
    }

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
                <div className={styles.typingArea}>

                    {/*<label htmlFor="newMessage">New message</label>*/}
                    <button onClick={ sendMessage } className={styles.inputButton}>></button>
                    <textarea onChange={ onChangeMessageInput } ref={chatInputField} name=""
                              id="" cols="30" rows="10"
                              value={props.newMessageText}/>
                    {/*<div ref={chatInputField} className={styles.chatInput} tabIndex="0" role="textBox"
                         aria-multiline="true" contentEditable="true" placeholder="Write message..."></div>*/}
                </div>
            </div>
        </div>
    );
}
export default Conversations;