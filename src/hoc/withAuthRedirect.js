import React from 'react';
import {Redirect} from "react-router-dom";
import connect from "react-redux/lib/connect/connect";


let mapStateToPropsForRedirect = state => ({
    isAuthorized: state.auth.isAuthorized
})

export const withAuthRedirect = Component => {
    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isAuthorized) return <Redirect to='/login' />;
            return(
              <Component {...this.props}/>
            );
        }
    }

    return connect(mapStateToPropsForRedirect, {})(RedirectComponent);
}
