import React, { Component } from 'react';

export default class ToDoButton extends Component {
    render() {
        return (
            <button
                className={this.props.cName + ' px-3 py-1'}
                onClick={this.props.btnEvent}
            >
                {this.props.btnText}
            </button>
        );
    };
}
