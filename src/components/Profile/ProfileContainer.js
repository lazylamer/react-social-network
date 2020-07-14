import React from 'react';
import * as axios from 'axios';
import Profile from "./Profile";
import {setUserPage} from "../../redux/profile-reducer";
import connect from "react-redux/lib/connect/connect";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";



class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger;
        let userId = this.props.match.params.userId;
        if (!userId) userId = 9230;
        profileAPI.getProfile(userId)
            .then(data => {
                this.props.setUserPage(data);
            });
    }

    render() {
        return(
            <Profile profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = state => ({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserPage})(withUrlDataContainerComponent);
