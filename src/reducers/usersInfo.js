import {
    USERS_INFO_GET,
    CURRENT_USER_INFO_GET,
    USER_INFO_GET_BY_ID,
} from '../actions/getUsersInfo';

export default function usersInfo(state = {}, action) {
    switch (action.type) {
    case USERS_INFO_GET:
        return { ...(state), ...action.payload };
    default:
        return state;
    }
}

export function getCurrentUserInfo(state = {}, action) {
    switch (action.type) {
    case CURRENT_USER_INFO_GET:
        return { ...action.payload };
    default:
        return state;
    }
}

export function getUserInfoById(state = {}, action) {
    switch (action.type) {
    case USER_INFO_GET_BY_ID:
        return { ...action.payload };
    default:
        return state;
    }
}
