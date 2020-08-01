import {createSelector} from "reselect";


//simple selector
export const obtainUsersSelector = state => state.usersPage.users;
//completed selector
export const obtainUsers = createSelector( obtainUsersSelector, (users) => {
    return users.filter(u => true);
})


export const getPageSize = state => state.usersPage.pageSize;
export const getTotalUsersCount = state => state.usersPage.totalCount;
export const getCurrentUserPage = state => state.usersPage.currentPage;
export const getFetchingCondition = state => state.usersPage.isFetching;
export const getFollowingProgressCondition = state => state.usersPage.isFollowingInProgress;
export const getAuthorizedStatus = state => state.usersPage.isAuthorized;