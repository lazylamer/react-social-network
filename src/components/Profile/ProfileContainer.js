import React from 'react';
import Profile from "./Profile";
import {getProfile, getStatus, setStatus, updateStatus} from "../../redux/profile-reducer";
import connect from "react-redux/lib/connect/connect";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger;
        let userId= this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }


    render() {
        return(
            <Profile
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}/>
        );
    }
}
/*
let mapStateToProps = state => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id
})*/
let mapStateToProps = state => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id
})




export default compose(
    connect(mapStateToProps, {getProfile, setStatus, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)