import React, {memo} from 'react';
import Header from "./Header";
import connect from "react-redux/lib/connect/connect";
import {logOut} from "../../redux/auth-reducer";

const HeaderContainer = memo(props => {
        return(
            <Header {...props}/>
        )
});

const mapStateToProps = state => ({
    isAuthorized: state.auth.isAuthorized,
    login: state.auth.login
})


export default connect(mapStateToProps, {logOut})(HeaderContainer);

