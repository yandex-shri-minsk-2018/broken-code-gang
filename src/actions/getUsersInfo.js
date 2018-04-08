import api from '../api';

export const USERS_INFO_GET = 'USERS_INFO_GET';
export const CURRENT_USER_INFO_GET = 'CURRENT_USER_INFO_GET';
export const USER_INFO_GET_BY_ID = 'USER_INFO_GET_BY_ID';

// Get users
export default function getUsersInfo() {
    return async (dispatch) => {
        let { items: users, next } = await api.getUsers({ limit: 10 });
        let nextUsers;
        while (true) {
            ({ items: nextUsers, next } = await api.getUsers(next));
            users = [...users, ...nextUsers];
            if (next === null) {
                break;
            }
        }
        dispatch({
            type: USERS_INFO_GET,
            payload: users,
        });
    };
}
// Fetch current user
export function getCurrentUsersInfo() {
    return async (dispatch) => {
        const user = await api.getCurrentUser();
        dispatch({
            type: CURRENT_USER_INFO_GET,
            payload: user,
        });
    };
}
// Fetch user information by id
export function fetchUserInfo(userId) {
    return async (dispatch) => {
        const user = await api.getUser(userId);
        dispatch({
            type: USER_INFO_GET_BY_ID,
            payload: user,
        });
    };
}
