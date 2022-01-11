import * as React from 'react';
import './styles/ToDoHeader.scss';

export function ToDoHeader(props) {
    return (
        <header className={`todo-header ${props.cName}`}>
            <h1 className={`todo-title todo-header__title`}>
                ToDo-List
            </h1>
        </header>
    );
}