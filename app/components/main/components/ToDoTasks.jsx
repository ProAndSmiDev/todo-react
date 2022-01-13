import React, { Component } from 'react';

export default class ToDoTasks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: this.props.tasks,
        };
        this.removeTask = this.removeTask.bind(this);
    }

    removeTask(name) {
        const filteredTasks = this.state.tasks.filter(el => el !== name);

        this.setState({
            tasks: filteredTasks,
        });
    }

    render() {
        return (
            <section className="todo-tasks todo-main__tasks mt-5">
                <h2 className={`todo-title todo-tasks__title m-3 p-0`}>
                    Список задач:
                </h2>

                <ul className={`todo-list todo-tasks__list list-unstyled p-3`}>
                    {this.state.tasks.map((item, idx) =>
                        <li key={idx} className={`todo-list__item card`}>
                            <h3 className="card-title text-decoration-underline">
                                {item}
                            </h3>

                            <div className="card-body">
                                <p>
                                    Это тело карточки
                                </p>

                                <button className="card-btn btn-danger mx-2 py-1 px-3" onClick={() => this.removeTask(item)} key={idx}>
                                    Remove
                                </button>
                            </div>
                        </li>
                    )}
                </ul>
            </section>
        );
    }
}
