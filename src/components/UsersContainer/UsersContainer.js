import React from 'react';
import {getUsers, unFollow, follow} from '../../redux/users-reducer';
import Users from './Users/Users';
import Spinner from "../common/Spinner/Spinner";
import connect from "react-redux/lib/connect/connect";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.users ,this.props.currentPage, this.props.pageSize);
    }

    switchPage = page => {
        this.props.getUsers(this.props.users, page, this.props.pageSize);
    }

    render() {
        return (
            <>
                { this.props.isFetching ? <Spinner /> : null }
                <Users switchPage={this.switchPage}
                       totalCount={this.props.totalCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       unFollow={this.props.unFollow}
                       users={this.props.users}
                       isFetchinh={this.props.isFetching}
                       follow={this.props.follow}
                       followingInProgress={this.props.followingInProgress}
                       isFollowingInProgress={this.props.isFollowingInProgress}
                       isAuthorized={this.props.isAuthorized}/>

            </>
        );
    }
}


const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress,
        isAuthorized: state.auth.isAuthorized
    }
}

const UsersContainer = connect(mapStateToProps,
    { getUsers, follow, unFollow})(UsersAPIComponent);

export default UsersContainer;