import React, {createRef, useEffect, useState} from 'react';
import styles from './Status.module.css'

const StatusWithHooks = props => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status])

    const turnOnEditMode = () => {
        setEditMode(true);
    }

    const turnOffEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const updateStatus = e => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className={styles.status}>
            <span>Status:</span>
            <div className={styles.statusItem}>
                {editMode && <input value={status} onChange={ updateStatus }
                                    type="text" onBlur={ turnOffEditMode}
                                    autoFocus={true}/>}
                {!editMode && <span onDoubleClick={ turnOnEditMode }
                                    className={styles.statusText}>{ props.status ||'No status'}</span>}
            </div>
        </div>
    );
}

export default StatusWithHooks;