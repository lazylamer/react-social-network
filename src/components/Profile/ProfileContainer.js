import React from 'react';
import Profile from "./Profile";
import {getProfile} from "../../redux/profile-reducer";
import connect from "react-redux/lib/connect/connect";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId);
    }

    render() {
        return(
            <Profile profile={this.props.profile} isAuthorized={this.props.isAuthorized}/>
        );
    }
}

let mapStateToProps = state => ({
    profile: state.profilePage.profile,
    isAuthorized: state.auth.isAuthorized
})

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getProfile})(withUrlDataContainerComponent);
