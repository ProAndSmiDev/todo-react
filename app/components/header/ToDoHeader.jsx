import * as React from 'react';
import './styles/ToDoHeader.scss';

export function ToDoHeader(props) {
    return (
        <header className={`todo-header ${props.cName} bg-dark py-3`}>
            <h1 className={`todo-title todo-header__title text-uppercase text-light`}>
                ToDo-List
            </h1>
        </header>
    );
}
