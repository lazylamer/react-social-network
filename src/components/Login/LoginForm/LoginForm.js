import React from 'react';
import styles from './LoginForm.module.css';
import {Form} from "react-final-form";
import {required} from "../../../utils/validators/validators";
import FormsValidation, {createField} from "../../common/FormsValidation/FormsValidation";
import {FORM_ERROR} from "final-form";
import Captcha from "../Captcha/Captcha";

const LoginForm = props => {

    const logIn = values => {
        console.log(values);
        props.logIn(values.email, values.password, values.checkbox, values.captcha);
        if (props.captchaUrl) {
            return {[FORM_ERROR]: 'incorrect anti-bot symbols'}
        } else {
            return {[FORM_ERROR]: 'Password or email is incorrect'};
        }
    }

    const Input = FormsValidation('input');

    return(
        <Form onSubmit={ logIn }
              render={({handleSubmit,
                        submitError}) =>{
                  return (
                      <form onSubmit={handleSubmit} className={styles.form}>
                          <span className={styles.title}>Log In:</span>
                          <div className={styles.formItem}>
                              <label htmlFor="email">Email:</label>
                              {createField(Input, "email",
                                  {type: "email", validate: required, placeholder: "email"})}
                          </div>
                          <div className={styles.formItem}>
                              <label htmlFor="password">Password:</label>
                              {createField(Input, "password",
                                  {type: "password", validate: required, placeholder: "password"})}
                          </div>
                          <div className={`${styles.formItem} ${styles.formItemCheckbox}`}>
                              {createField(Input, "checkbox",
                                  {type: "checkbox", className: `${styles.checkbox}`})}
                              <span className={styles.checkboxText}>remember me</span>
                          </div>
                          { props.captchaUrl && <img src={`${props.captchaUrl}`} alt="captcha"/>}
                          {/*{ props.captchaUrl && createField(Input, 'captcha', {placeholder: 'write symbols'})}*/}
                          { props.captchaUrl && <Captcha validate={required} />}
                          {submitError && <span>{submitError}</span>}
                          <button type="submit" className={styles.btn}>Login</button>
                      </form>
                  )
              }}>
        </Form>
    );
}


export default LoginForm;