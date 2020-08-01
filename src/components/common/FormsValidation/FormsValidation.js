import React from 'react';
import styles from './FormsValidation.module.css'
import {Field} from "react-final-form";

const FormsValidation = Component =>
    ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return(
        <div className={`${styles.wrapper} ${hasError ? styles.error : ``}`}>
            <Component {...input} {...props} />
            { hasError && <span>{meta.error}</span> }
        </div>
    );
}

export const createField = (component, name, paramsObj) =>
    (<Field component={component}
            name={name}
            {...paramsObj}/>)

export default FormsValidation;
