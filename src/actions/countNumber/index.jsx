import fetch from 'isomorphic-fetch';
import { push, go } from 'react-router-redux';
import * as actionTypes from 'actionTypes/countNumber';

const {
    ADD,
    MINUS,
    INITIALIZATION,
    FETCH
    } = actionTypes;

export function AddNumber() {
    return {
        type: ADD,
        value: 1,
        text: 'add 1'
    }
}

export function MinusNumber() {
    return {
        type: MINUS,
        value: -1,
        text: 'minus 1'
    }
}

export function InitializeNumber() {
    return {
        type: INITIALIZATION,
        value: 0,
        text: 'change to 0'
    }
}

export function fetchNumber(number) {
    return {
        type: FETCH,
        value: number,
        text: 'fetch and change number to 1000'
    }
}

export function fetchPosts() {
    return function (dispatch) {
        dispatch(InitializeNumber());

        return fetch('/proxy?url=http://news-at.zhihu.com/api/4/news/latest')
            .then(res => res.json())
            .then(res => {
                dispatch(fetchNumber(Number(res.date)));
            });
    }
}
