import { combineReducers } from 'redux';
import countNumber from 'reducers/countNumber';
import * as constants from 'constants/countNumber';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    [constants.NAME]: countNumber,
    routing: routerReducer
});