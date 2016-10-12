import React from 'react';

class CountNumber extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let {
            addNumber,
            minusNumber,
            InitializeNumber,
            fetchPosts,
            number,
            text,
            fetchNumber,
            fetchText
            } = this.props;

        return (
            <div>
                <button onClick={addNumber}>加</button>
                <button onClick={minusNumber}>减</button>
                <button onClick={InitializeNumber}>清零</button>
                <button onClick={fetchPosts}>异步</button>
                <div>Number:{number}</div>
                <div>我做了什么:{text}</div>
                <div>我异步请求时得到的数字:{fetchNumber}</div>
                <div>我在异步请求时做了什么:{fetchText}</div>
            </div>
        );
    }
}

CountNumber.propTypes = {
    addNumber: React.PropTypes.func.isRequired,
    minusNumber: React.PropTypes.func.isRequired,
    InitializeNumber: React.PropTypes.func.isRequired,
    fetchPosts: React.PropTypes.func.isRequired,
    number: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired,
    fetchNumber: React.PropTypes.number.isRequired,
    fetchText: React.PropTypes.string.isRequired
};

export default CountNumber;