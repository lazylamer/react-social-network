import React, {useState} from "react";
import styles from "../Users.module.css";

const Paginator = ({totalItemsCount, pageSize, partSize = 10, switchPage, currentPage}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];

    let partCount = Math.ceil(pagesCount / partSize);
    let [partNumber, setPartNumber] = useState(1);
    let leftPartNumberBorder = (partNumber - 1) * partSize + 1;
    let rightPrtNumberBorder = partNumber * partSize;


    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const prevPart = () => {
        setPartNumber(partNumber - 1);
    }
    const nextPart = () => {
        setPartNumber(partNumber + 1);
    }
    return (
        <div className={styles.pages}>
            { partNumber > 1 && <button onClick={ prevPart }>prev</button>}
            { pages.filter(item => leftPartNumberBorder <= item && item <= rightPrtNumberBorder)
                .map(page => {
                return <span onClick={ () => switchPage(page) }
                             className={currentPage === page ? styles.active : ''}>{page}</span>
            })}
            { partCount > partNumber  && <button onClick={ nextPart }>next</button> }

        </div>
    )
}

export default Paginator;
