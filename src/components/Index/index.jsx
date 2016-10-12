import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import CountNumber from 'containers/CountNumber';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {
            gotoAPage,
            gotoBPage,
            gotoCPage,
            } = this.props;

        return (
            <div>
                <CountNumber />

                <button onClick={gotoAPage}>点我去A页面</button>
                <button onClick={gotoBPage}>点我去B页面</button>
                <button onClick={gotoCPage}>点我去C页面</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;

}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        gotoAPage() {
            dispatch(push('/number/a'));
        },
        gotoBPage() {
            dispatch(push('/another/b'));
        },
        gotoCPage() {
            dispatch(push('/another/c'));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);