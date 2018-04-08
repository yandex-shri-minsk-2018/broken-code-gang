import { combineReducers } from 'redux';
import route from './route';
import messages from './messages';
import rooms from './rooms';
import usersInfo, { getCurrentUserInfo, getUserInfoById } from './usersInfo';

export default combineReducers({
    rooms,
    messages,
    route,
    usersInfo,
    getCurrentUserInfo,
    getUserInfoById,
});
