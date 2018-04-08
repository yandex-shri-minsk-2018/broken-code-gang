import api from '../api';

export default function fetchRooms() {
    return async function (dispatch, getState) {
        try {
            const room = await api.getRooms(getState().rooms.next);
            const { items } = room;
            const { next } = room;
            const end = !!(next);
            dispatch({
                type: 'ROOMS_FETCH',
                items,
                next,
                end,
            });
        } catch (error) {
            dispatch({
                type: 'ROOM_ERROR',
                error,
            });
        }
    };
}
