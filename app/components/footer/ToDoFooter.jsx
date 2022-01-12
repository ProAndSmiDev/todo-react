import * as React from 'react';
import './styles/ToDoFooter.scss';

export function ToDoFooter(props) {
    return (
        <footer className={`todo-footer ${props.cName} bg-dark`}>
            <p className={`todo-footer__copyright text-light my-auto p-3`}>
                &copy; AndSmi 2021
            </p>
        </footer>
    );
}
