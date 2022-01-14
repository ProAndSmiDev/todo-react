import React, { Component } from 'react';
import './styles/ToDoMain.scss';
import ToDoTaskList from './components/ToDoTaskList/ToDoTaskList';
import ToDoTaskForm from './components/ToDoTaskForm/ToDoTaskForm';

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
            taskName: '',
        };

        this.removeTask = this.removeTask.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    updateTaskName(e) {
        if(e) {
            const val = e.target.value;

            this.setState({
                taskName: val,
            });
        } else {
            this.setState({
                taskName: '',
            });
        }
    };

    addTask(name) {
        if (name) {
            this.state.tasks.push(name);

            this.setState({
                tasks: this.state.tasks,
            });

            this.updateTaskName();
        }
    };

    removeTask(name) {
        const filteredTasks = this.state.tasks.filter(el => el !== name);

        this.setState({
            tasks: filteredTasks,
        });
    }

    render() {
        return (
            <main className={`todo-main ${this.props.cName} bg-light`}>
                <ToDoTaskList cName={'todo-main__task-list'} removeTask={this.removeTask} tasks={this.state.tasks}/>

                <ToDoTaskForm cName={'todo-main__task-form'} updateTaskName={(e) => this.updateTaskName(e)} taskName={this.state.taskName} addTask={this.addTask}/>
            </main>
        );
    };
}
