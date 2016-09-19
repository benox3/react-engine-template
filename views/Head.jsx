'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Head extends Component {
    render() {
        const { publicPath, cachebust, title } = this.props;
        return (
            <head>
                <meta charSet='utf-8' />
                <title>{title}</title>
                <link rel='stylesheet' href={publicPath + '/css/style.css' + cachebust} />
            </head>
        );
    }
}

function mapStateToProps(state) {
    return state.env
}

export default connect(mapStateToProps)(Head);
