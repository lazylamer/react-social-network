import React from 'react';
import styles from './MyPosts.module.css'
import PostItem from "./PostItem/PostItem";
import {Field, Form} from "react-final-form";
import {required} from "../../../utils/validators/validators";
import FormsValidation from "../../common/FormsValidation/FormsValidation";

const MyPosts = props => {


    let postItems = props.data
        .map( (user) => <PostItem key={user.id} message={user.msg} username={user.name} src={user.src}/>);


    const onSubmit = values => {
        props.addPost(values.post);
    }

    const Textarea = FormsValidation('textarea');

    return (
        <div>
            <Form onSubmit={ onSubmit }
                  className={styles.wrapper}
                  render={({handleSubmit}) => {
                      return(
                          <form onSubmit={ handleSubmit }>
                              <label htmlFor="post" className={styles.label}><h3>My posts</h3></label>
                              <Field component={Textarea}
                                     name="post" id="" cols="30" rows="10"
                                     className={styles.post}
                                     validate={required}/>
                              <button className={styles.btn}>Add post</button>
                          </form>

                      )
                  }}>
            </Form>
            {postItems}
        </div>
    );
}

export default MyPosts;