import React from 'react';
import Profile from "./Profile";
import {
    getProfile,
    getStatus,
    setStatus,
    toggleOwner, updateProfile,
    updateProfilePhoto,
    updateStatus
} from "../../redux/profile-reducer";
import connect from "react-redux/lib/connect/connect";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {obtainOwnerStatus, obtainProfile, obtainStatus} from "../../redux/profile-selectors";
import {obtainAuthorizedUserId} from "../../redux/auth-selectors";


class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId= this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            this.props.toggleOwner(true);
        } else {
            this.props.toggleOwner(false);
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }


    render() {
        return(
            <Profile
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                isOwner={this.props.isOwner}
                updateProfilePhoto={this.props.updateProfilePhoto}
                updateProfile={this.props.updateProfile}/>
        );
    }
}

let mapStateToProps = state => ({
    profile: obtainProfile(state),
    status: obtainStatus(state),
    authorizedUserId: obtainAuthorizedUserId(state),
    isOwner: obtainOwnerStatus(state)
})

export default compose(
    connect(mapStateToProps, {getProfile, setStatus,
        getStatus, updateStatus,
        toggleOwner, updateProfilePhoto,
        updateProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)