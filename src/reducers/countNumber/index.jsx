import Immutable from 'immutable';
import * as actionTypes from 'actionTypes/countNumber';

const {
    ADD,
    MINUS,
    INITIALIZATION,
    FETCH
    } = actionTypes;

const {Map} = Immutable;

const initialState = Map({
    number: 0,
    text: 'countNumber',
    fetchNumber: 0,
    fetchText: 'fetchNumber'
});

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return state.update(
                newState => newState
                    .set('number', newState.get('number') + 1)
                    .set('text', action.text)
            );
        case MINUS:
            return state.update(
                newState => newState
                    .set('number', newState.get('number') - 1)
                    .set('text', action.text)
            );
        case INITIALIZATION:
            return state.update(
                newState => newState
                    .set('number', 0)
                    .set('text', action.text)
            );
        case FETCH:
            return state.update(
                newState => newState
                    .set('fetchNumber', action.value)
                    .set('fetchText', action.text)
            );
        default:
            return state;
    }
};