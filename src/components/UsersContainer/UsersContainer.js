import React from 'react';
import {
    follow,
    setUsers,
    setUsersCount,
    switchCurrentPage,
    unFollow,
    toggleFetch
} from '../../redux/users-reducer';
import Users from './Users/Users';
import Spinner from "../common/Spinner/Spinner";
import connect from "react-redux/lib/connect/connect";
import {usersAPI} from "../../api/api";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleFetch(true);
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
                    this.props.toggleFetch(false);
                    this.props.setUsers(response.items);
                    this.props.setUsersCount(response.totalCount);
                });
        }
    }

    switchPage = page => {
        this.props.switchCurrentPage(page);
        this.props.toggleFetch(true);
        usersAPI.getUsers(page, this.props.pageSize).then(response => {
                this.props.toggleFetch(false);
                this.props.setUsers(response.items)
            });
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
                       follow={this.props.follow}/>

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
        isFetching: state.usersPage.isFetching
    }
}

const UsersContainer = connect(mapStateToProps,
    {follow, unFollow, setUsers, switchCurrentPage, setUsersCount, toggleFetch})(UsersAPIComponent);

export default UsersContainer;