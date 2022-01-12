import * as React from 'react';
import './styles/ToDoMain.scss';
import ToDoTasks from './components/ToDoTasks';
import { ToDoAddTask } from './components/ToDoAddTask';

export function ToDoMain(props) {
    return (
        <main className={`todo-main ${props.cName} bg-light`}>
            <ToDoTasks cName={'todo-main__tasks'}/>
            <ToDoAddTask cName={'todo-main__add-task'} />
        </main>
    );
}
