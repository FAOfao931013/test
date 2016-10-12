import { createSelector } from 'reselect';
import Immutable from 'immutable';

const {Map} = Immutable;

const getNumber = state => Map.isMap(state.countNumber) ? state.countNumber.get('number') : 0;
const getText = state => Map.isMap(state.countNumber) ? state.countNumber.get('text') : 0;
const getfetchNumber = state => Map.isMap(state.countNumber) ? state.countNumber.get('fetchNumber') : 0;
const getfetchText = state => Map.isMap(state.countNumber) ? state.countNumber.get('fetchText') : 0;

export const getNumberAndText = createSelector(
    [getNumber, getText, getfetchNumber, getfetchText],
    (number, text, fetchNumber, fetchText) => {
        return {
            number,
            text,
            fetchNumber,
            fetchText
        }
    }
);