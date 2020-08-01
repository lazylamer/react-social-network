import React from 'react';
import styles from "./Users.module.css";
import UserItem from "./UserItem/UserItem";
import Paginator from "./Paginator/Paginator";

const Users = props => {
    return (
        <div>
            <Paginator totalCount={props.totalCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       switchPage={props.switchPage}/>
            <p className={styles.title}>Users:</p>

            {
                props.users.map(
                    user =>
                        <UserItem id={user.id} photos={user.photos}
                                  name={user.name} status={user.status}
                                  location={user.location} followed={user.followed}
                                  follow={props.follow} unFollow={props.unFollow}
                                  followingInProgress={props.followingInProgress}
                                  isFollowingInProgress={props.isFollowingInProgress}/>
                )
            }
        </div>
    );
}

export default Users;