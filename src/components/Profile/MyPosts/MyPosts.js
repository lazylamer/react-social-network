import React from 'react';
import styles from './MyPosts.module.css'
import PostItem from "./PostItem/PostItem";

const MyPosts = (props) => {

    debugger;

    let postItems = props.data
        .map( (user) => <PostItem key={user.id} message={user.msg} username={user.name} src={user.src}/>);


    let newPostElement = React.createRef();

    let onAddPost = (e) => {
        console.log(e)
        e.preventDefault();
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    //    UPDATE-NEW-POST-TEXT
    }

    return (
        <div className={styles.wrapper}>
            <form action="submit">
                <label htmlFor="post" className={styles.label}><h3>My posts</h3></label>
                <textarea onChange={ onPostChange } ref={newPostElement}
                          name="post" id="" cols="30" rows="10" className={styles.post}
                          value={props.newPostText}/>
                <button onClick={ onAddPost } className={styles.btn}>Add post</button>
            </form>
            {postItems}
        </div>
    );
}

export default MyPosts;