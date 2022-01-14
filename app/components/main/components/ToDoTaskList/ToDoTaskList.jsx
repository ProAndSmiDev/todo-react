import React, { Component } from 'react';
import ToDoTask from "./ToDoTask";

export default class ToDoTaskList extends Component {
    render() {
        return (
            <section className={`todo-task-list mt-5 ${this.props.cName}`}>
                <h2 className={`todo-title todo-task-list__title m-3 p-0`}>
                    Список задач:
                </h2>
                {(this.props.tasks.length === 0) ? (
                    <h4 className={"todo-subtitle todo-task-list__subtitle m-3 p-0"}>
                        Задач нет! Поздравляю!
                    </h4>
                ) : (
                    <ul className={`todo-list todo-task-list__list list-unstyled p-3`}>
                        {this.props.tasks.map((item, idx) =>
                            <ToDoTask
                                key={idx}
                                taskName={item.title}
                                taskText={item.text}
                                removeTask={this.props.removeTask}
                            />
                        )}
                    </ul>
                )}
            </section>
        );
    };
}
