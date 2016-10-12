import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import CountNumber from 'components/countNumber';
import * as actions from 'actions/countNumber';
import {getNumberAndText} from 'selectors/countNumber';
import Immutable from 'immutable';

const {Map} = Immutable;

const {
    AddNumber,
    MinusNumber,
    fetchPosts,
    InitializeNumber
    } = actions;

function mapStateToProps(state) {
    return {
        number: getNumberAndText(state).number,
        text: getNumberAndText(state).text,
        fetchNumber: getNumberAndText(state).fetchNumber,
        fetchText: getNumberAndText(state).fetchText
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        addNumber: () => dispatch(AddNumber()),
        minusNumber: () => dispatch(MinusNumber()),
        fetchPosts: () => dispatch(fetchPosts()),
        InitializeNumber: () => dispatch(InitializeNumber())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountNumber);