import React from "react";
import styles from "../Users.module.css";

const Paginator = props => {

    debugger;

    console.log(props.totalCount, props.pageSize)
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.pages}>
            {pages.map(page => {
                return <span onClick={ () => props.switchPage(page) }
                             className={props.currentPage === page ? styles.active : ''}>{page}</span>
            })}
        </div>
    )
}

export default Paginator;
