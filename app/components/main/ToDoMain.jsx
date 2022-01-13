import React, { Component } from 'react';
import './styles/ToDoMain.scss';
import ToDoTasks from './components/ToDoTasks';
import ToDoAddTask from './components/ToDoAddTask';

export default class ToDoMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [
                'Сделать уборку дома',
                'Пропылесосить комнату',
                'Выучить JavaScript',
                'Погулять в парке',
                'Сделать домашнюю работу по английскому языку',
                'Приготовиться ко сну',
            ],
        };
    }
    render() {
        return (
            <main className={`todo-main ${this.props.cName} bg-light`}>
                <ToDoTasks cName={'todo-main__tasks'} tasks={this.state.tasks}/>
                <ToDoAddTask cName={'todo-main__add-task'} tasks={this.state.tasks}/>
            </main>
        );
    };
}
