import React, { Component } from 'react';
import './styles/ToDoFooter.scss';

export default class ToDoFooter extends Component {
    render() {
        return (
            <footer className={`todo-footer ${this.props.cName} bg-dark`}>
                <p className={`todo-footer__copyright text-light my-auto p-3`}>
                    &copy; AndSmi 2021
                </p>
            </footer>
        );
    }
}
