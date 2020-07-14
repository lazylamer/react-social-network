import React from 'react';
import styles from './UserItem.module.css';
import defaultImage from '../../../../imgs/peon.png'
import {NavLink} from "react-router-dom";
import * as axios from 'axios';
import {usersAPI} from "../../../../api/api";


const UserItem = props => {

    const follow = () => {
        props.followingInProgress(true);
        usersAPI.postFollowing(props.id)
            .then(data => {
                if (data.resultCode === 0) {
                    props.follow(props.id);
                }
                props.followingInProgress(false, props.id);
            });
    }

    const unFollow = () => {
        props.followingInProgress(true);
        usersAPI.deleteFollowing(props.id)
            .then( data => {
                if (data.resultCode === 0) {
                    props.unFollow(props.id);
                }
                props.followingInProgress(false, props.id);
            });
    }

    return(
      <div className={styles.item}>
          <div className={styles.userIcon}>
              <NavLink to={`/profile/${props.id}`}>
                  <img src={props.photos.small != null ? props.photos.small : defaultImage } alt="avatar" className={styles.userImg}/>
              </NavLink>
              { props.followed
                  ? <button disabled={props.isFollowingInProgress.some(id => id === props.id)} onClick={ unFollow } className={styles.followButton}>unfollow</button>
                  : <button disabled={props.isFollowingInProgress.some(id => id === props.id)} onClick={ follow } className={styles.followButton}>follow</button>}
          </div>
          <div className={styles.userInfo}>
              <div className={styles.inner}>
                  <p className={styles.name}>{props.name}</p>
                  <div className={styles.location}>
                      <p className={styles.country}>{'russia'}</p>
                      <p className={styles.city}>{'Saint-Petersburg'}</p>
                  </div>
              </div>
              <p className={styles.status}>{props.status}</p>
          </div>
      </div>
    );
}

export default UserItem;
