import React from "react";
import connect from "react-redux/lib/connect/connect";
import SideBar from "./SideBar";

const mapStateToProps = state => {
    return {
        data: state.sideBar.sideBarData
    }
}

/*const mapDispatchToProps = dispatch => {
    return {
        dispatch()
    }
}*/

const SideBarContainer = connect(mapStateToProps)(SideBar);

export default SideBarContainer;
