import * as React from 'react';
import ToDoButton from '../ToDoUI/ToDoButton';

export default class ToDoTaskForm extends React.Component {
    render() {
        return (
            <section className={`todo-task-form mt-5 ${this.props.cName}`}>
                <h2 className="todo-title todo-task-form__title m-3 p-0">
                    Добавить задачу:
                </h2>

                <div className="form-group p-3 d-flex flex-column todo-form todo-task-form__form">
                    <input
                        type="text"
                        placeholder={'Введите название задачи'}
                        className={'form-control todo-form__input'}
                        value={this.props.taskName}
                        onChange={this.props.updateTaskName}
                    />

                    <textarea
                        name="task"
                        id="task"
                        cols="30"
                        rows="10"
                        placeholder={'Введите текст задачи'}
                        className={'form-control todo-form__textarea'}
                        value={this.props.taskText}
                        onChange={this.props.updateTaskText}
                    ></textarea>

                    <ToDoButton
                        cName={"form-btn btn-success mt-3 align-self-end todo-form__btn"}
                        btnText={'Add task'}
                        btnEvent={() => this.props.addTask(this.props.taskName, this.props.taskText)}/>
                </div>
            </section>
        );
    }
};
