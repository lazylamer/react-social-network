import React from 'react';
import {Form} from "react-final-form";
import {createField} from "../../../common/FormsValidation/FormsValidation";
import styles from './ProfileForm.module.css';

const ProfileForm = props => {

    const onSubmit = values => {
        console.log(values);
        props.updateProfile(values);
        props.setEditMode(false);
    }

    return (
        <Form onSubmit={onSubmit}
              render={({handleSubmit}) => {
                  return (
                      <div className={styles.wrapper}>
                          <form onSubmit={handleSubmit} className={styles.form}>
                              <div className={styles.formItem}>
                                  <label htmlFor="fullName">Full name:</label>
                                  {createField('input', 'fullName',
                                      {
                                          className: styles.input,
                                          placeholder: 'Write your name...',
                                          value: props.profile.fullName
                                      })}
                              </div>
                              <div className={`${styles.formItem}`}>
                                  <label htmlFor="aboutMe">About me:</label>
                                  {createField('textarea', 'aboutMe',
                                      {
                                          className: `${styles.input} ${styles.textarea}`,
                                          placeholder: 'Tell us something about you...',
                                      })}
                              </div>
                              <div className={`${styles.formItem}`}>
                                  <label htmlFor="lookingForAJobDescription">Professional skills:</label>
                                  {createField('textarea', 'lookingForAJobDescription',
                                      {
                                          className: `${styles.input} ${styles.textarea}`,
                                          placeholder: 'Tell us your professional skills...',
                                      })}
                              </div>
                              <div className={`${styles.formItem} ${styles.formItemCheckbox}`}>
                                  {createField('input', 'lookingForAJob',
                                      {className: `${styles.input} ${styles.checkbox}`, type: 'checkbox'})}
                                  <label htmlFor="lookingForAJob">looking for a job</label>
                              </div>
                              <button className={styles.saveBtn}>save</button>
                          </form>
                      </div>
                  )
              }
              }/>
    )
}

export default ProfileForm;