import React from 'react';
import styles from './MyPosts.module.css';
import PostItem from "./PostItem/PostItem";


const MyPosts = () => {
    return (
        <div className={styles.wrapper}>
            <form action="submit">
                <label htmlFor="post" className={styles.label}><h3>My posts</h3></label>
                <textarea name="post" id="" cols="30" rows="10" className={styles.post}></textarea>
                <button action="submit" className={styles.btn}>Add post</button>
            </form>
            <PostItem message={`what's up, bro?`} username={`Olge Popov`}/>
            <PostItem message={`Hello dud, are u here?`} username={`Alla Pyga4eva`}/>
        </div>
    );
}

export default MyPosts;