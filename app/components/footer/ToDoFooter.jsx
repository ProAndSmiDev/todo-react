import * as React from 'react';
import './styles/ToDoFooter.scss';

export function ToDoFooter(props) {
    return (
        <footer className={`todo-footer ${props.cName}`}>
            <p className={`todo-footer__copyright`}>
                &copy; AndSmi 2021
            </p>
        </footer>
    );
}
