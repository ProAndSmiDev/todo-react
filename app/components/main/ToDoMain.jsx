import React, { Component } from 'react';
import './styles/ToDoMain.scss';
import ToDoTaskList from './components/ToDoTaskList/ToDoTaskList';
import ToDoTaskForm from './components/ToDoTaskForm/ToDoTaskForm';

export default class ToDoMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [
                {
                    title: 'Сделать уборку дома',
                    text: 'Мама попросила, сказала что это нужно мне, чтобы стать более ответственной',
                },
                {
                    title: 'Пропылесосить комнату',
                    text: 'Решила пропылесосить комнату, чтобы стать более гибкой',
                },
                {
                    title: 'Выучить JavaScript',
                    text: 'Изучить темы по DOM, Ajax, JQuery',
                },
                {
                    title: 'Погулять в парке',
                    text: 'Прогуляться по парку с любимым человеком очень приятно и полезно для здоровья!',
                },
                {
                    title: 'Сделать домашнюю работу по английскому языку',
                    text: 'Teacher says that i don\'t know english very well, let\'s check it out!',
                },
                {
                    title: 'Приготовиться ко сну',
                    text: 'Спать пора, завтра будет новый увлекательный день с новыми приключениями!',
                }
            ],
            taskName: '',
            taskText: '',
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

    updateTaskText(e) {
        if(e) {
            const val = e.target.value;

            this.setState({
                taskText: val,
            });
        } else {
            this.setState({
                taskText: '',
            });
        }
    };

    addTask(name, text) {
        if (name && text) {
            this.state.tasks.push({
                title: name,
                text,
            });

            this.setState({
                tasks: this.state.tasks,
            });

            this.updateTaskName();
            this.updateTaskText();
        }
    };

    removeTask(name) {
        const filteredTasks = this.state.tasks.filter(el => el.title !== name);

        this.setState({
            tasks: filteredTasks,
        });
    }

    render() {
        return (
            <main className={`todo-main ${this.props.cName} bg-light`}>
                <ToDoTaskList
                    cName={'todo-main__task-list'}
                    removeTask={this.removeTask}
                    tasks={this.state.tasks}
                />

                <ToDoTaskForm
                    cName={'todo-main__task-form'}
                    updateTaskName={(e) => this.updateTaskName(e)}
                    updateTaskText={(e) => this.updateTaskText(e)}
                    taskName={this.state.taskName}
                    taskText={this.state.taskText}
                    addTask={this.addTask}
                />
            </main>
        );
    };
}
