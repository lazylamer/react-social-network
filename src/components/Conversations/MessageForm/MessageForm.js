import styles from "../Conversations.module.css";
import React from "react";
import {Field, Form} from "react-final-form";
import {required} from "../../../utils/validators/validators";
import FormsValidation from "../../common/FormsValidation/FormsValidation";

const MessageForm = props => {

    console.log(props);

    let onSubmit = values => {
        props.sendMessage(values.messageInput)
    }

    const Textarea = FormsValidation('textarea');

    return (
        <Form onSubmit={ onSubmit }
              render={({handleSubmit, values}) => {
                  return (
                      <form onSubmit={ handleSubmit } className={styles.typingArea}>

                          {/*<label htmlFor="newMessage">New message</label>*/}
                          <button className={styles.inputButton}> ></button>
                          {/*//onChange={ onChangeMessageInput }*/}
                          {/*value={props.newMessageText}*/}
                          <Field name={'messageInput'}
                                 component={Textarea}
                                 validate={required}/>
                          {/*<div ref={chatInputField} className={styles.chatInput} tabIndex="0" role="textBox"
                         aria-multiline="true" contentEditable="true" placeholder="Write message..."></div>*/}
                      </form>
                  );
              }}>
        </Form>
    );
}

export default MessageForm;