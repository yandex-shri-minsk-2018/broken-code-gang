import { combineReducers } from 'redux';
import route from './route';
import messages from './messages';
import roomReducer from './roomReducer'


export default combineReducers({
    roomReducer,
    messages,
    route
});
