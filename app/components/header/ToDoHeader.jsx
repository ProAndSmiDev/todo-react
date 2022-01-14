import React, { Component } from 'react';
import './styles/ToDoHeader.scss';

export default class ToDoHeader extends Component{
    render() {
        return (
            <header className={`todo-header ${this.props.cName} bg-dark py-3`}>
                <h1 className={`todo-title todo-header__title text-uppercase text-light`}>
                    ToDo-List
                </h1>
            </header>
        );
    }
}
