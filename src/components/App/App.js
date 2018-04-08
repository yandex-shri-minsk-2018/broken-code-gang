import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { AuthorizationPage } from '../AuthorizationPage/AuthorizationPage';
import { ChatListPage } from '../ChatListPage/ChatListPage';
import getUsersInfo, { getCurrentUsersInfo, fetchUserInfo } from '../../actions/getUsersInfo';


const routeConfig = {
    authorization: {
        view: AuthorizationPage,
    },
    chat_list: {
        view: ChatListPage,
    },
};

const stateToProps = state => ({
    route: state.route,
    users: state.usersInfo,
    currentUser: state.getCurrentUserInfo,
    fetchUser: state.getUserInfoById,
});

class App extends Component {
    componentDidMount(props) {
        const userID = '5aacdce6744a767e04c94e14';
        this.props.getUsersInfo();
        this.props.getCurrentUsersInfo();
        this.props.fetchUserInfo(userID);
    }

    render() {
        let Page = routeConfig[this.props.route.page] && routeConfig[this.props.route.page].view;

        if (!Page) {
            Page = <div>404 Page Not Found</div>;
        }

        return (
            <Page />
        );
    }
}

export default connect(stateToProps, {
    getUsersInfo,
    getCurrentUsersInfo,
    fetchUserInfo,
})(App);
