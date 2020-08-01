import React from 'react';
import {getUsers, unFollow, follow} from '../../redux/users-reducer';
import Users from './Users/Users';
import Spinner from "../common/Spinner/Spinner";
import connect from "react-redux/lib/connect/connect";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getAuthorizedStatus, getCurrentUserPage,
    getFetchingCondition,
    getFollowingProgressCondition,
    getPageSize,
    getTotalUsersCount,
    obtainUsers
} from "../../redux/users-selectors";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        const {users, currentPage, pageSize} = this.props;
        this.props.getUsers(users ,currentPage, pageSize);
    }

    switchPage = page => {
        const {users, pageSize} = this.props;
        this.props.getUsers(users, page, pageSize);
    }

    render() {
        if(this.props.isFetching) {
            return( <Spinner /> );
        } else {
            return ( <Users switchPage={this.switchPage}
                            totalCount={this.props.totalCount}
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            unFollow={this.props.unFollow}
                            users={this.props.users}
                            isFetchinh={this.props.isFetching}
                            follow={this.props.follow}
                            followingInProgress={this.props.followingInProgress}
                            isFollowingInProgress={this.props.isFollowingInProgress}
                            isAuthorized={this.props.isAuthorized}/>)
        }
    }
}

const mapStateToProps = state => {
    return {
        users: obtainUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalUsersCount(state),
        currentPage: getCurrentUserPage(state),
        isFetching: getFetchingCondition(state),
        isFollowingInProgress: getFollowingProgressCondition(state),
        isAuthorized: getAuthorizedStatus(state)
    }
}

export default compose(
    connect(mapStateToProps, {getUsers, follow, unFollow}),
    withAuthRedirect
)(UsersAPIComponent);