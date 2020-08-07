import React from 'react';
import styles from './Status.module.css'

class Status extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    toggleEditMode = () => {
        if (this.state.editMode) {
            this.props.updateStatus(this.state.status);
        }
        this.setState({
            editMode: !this.state.editMode
        })
    }

    onStatusChange = e => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return(
            <div className={styles.status}>
                <span>Status:</span>
                <div className={styles.statusItem}>
                    { this.state.editMode &&
                        <input  type="text"
                                className={styles.statusInput}
                                value={this.state.status}
                                onBlur={this.toggleEditMode}
                                onChange={this.onStatusChange}
                                autoFocus={true}
                                ref={this.statusInputRef}/>
                    }
                    { !this.state.editMode &&
                        <span onDoubleClick={ this.toggleEditMode }
                              className={styles.statusText}>{this.props.status || 'No status'}</span>
                    }
                </div>
            </div>
        );
    }
}

export default Status;