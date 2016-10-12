import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { goBack, replace } from 'react-router-redux';

class C extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let {
            goBack
            } = this.props;

        return (
            <div>
                我是C页面
                <button onClick={goBack}>点我返回</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        goBack() {
            dispatch(goBack());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(C);