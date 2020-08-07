import React from 'react';
import styles from "../LoginForm/LoginForm.module.css";
import {createField} from "../../common/FormsValidation/FormsValidation";

const Captcha = ({}) => {
    return (
            <div className={`${styles.formItem} ${styles.formItemCheckbox}`}>
                {createField('input', 'captcha', {placeholder: 'write symbols'})}
            </div>
    )
}

export default Captcha;