import * as React from 'react';
import './styles/ToDoMain.scss';

const listItems = [
    'Первый',
    'Второй',
    'Третий',
    'Десятый',
    'Сороковой',
    'Пятидесятый',
];

export function ToDoMain(props) {
    return (
        <main className={`todo-main ${props.cName}`}>
            <h2 className={`todo-title todo-main__title`}>
                Hello World!
            </h2>

            <ul className={`todo-list todo-main__list`}>
                {listItems.map((item, idx) =>
                    <li key={idx} className={`todo-list__item`}>
                        {item}
                    </li>
                )}
            </ul>
        </main>
    );
}
