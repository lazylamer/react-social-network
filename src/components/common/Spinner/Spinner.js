import React from 'react';
import styles from './Spinner.module.css';
import spinner from '../../../imgs/Spinner-1s-200px.svg';

const Spinner = props => {
    return(
        <img className={styles.spinner} src={spinner} alt={'#'}/>
    );
}

export default Spinner;