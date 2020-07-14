import React from 'react';
import styles from "./Users.module.css";
import UserItem from "./UserItem/UserItem";
import Router from "react-router-dom/es/Router";

const Users = props => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={styles.pages}>
                {pages.map(page => {
                    return <span onClick={ () => props.switchPage(page) }
                                 className={props.currentPage === page ? styles.active : ''}>{page}</span>
                })}
            </div>
            <p className={styles.title}>Users:</p>

            {
                props.users.map(user =>

                        <UserItem id={user.id} photos={user.photos}
                                  name={user.name} status={user.status}
                                  location={user.location} followed={user.followed}
                                  follow={props.follow} unFollow={props.unFollow}/>
                    )
            }
        </div>
    );
}

export default Users;