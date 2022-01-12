import React, { Component } from 'react';

const tasks = [
    'Сделать уборку дома',
    'Пропылесосить комнату',
    'Выучить JavaScript',
    'Погулять в парке',
    'Сделать домашнюю работу по английскому языку',
    'Приготовиться ко сну',
];

export default class ToDoTasks extends Component {
    //constructor(props) {
    //    super(props);
    //
    //    this.setState({
    //        tasks: [
    //            'Сделать уборку дома',
    //            'Пропылесосить комнату',
    //            'Выучить JavaScript',
    //            'Погулять в парке',
    //            'Сделать домашнюю работу по английскому языку',
    //            'Приготовиться ко сну',
    //        ]
    //    })
    //    this.removeTask = this.removeTask.bind(this);
    //}
    //
    //removeTask(name) {
    //    this.setState({
    //        tasks: this.state.tasks.map(el => el !== name)
    //    });
    //};
    render() {
        return (
            <section className="todo-tasks todo-main__tasks mt-5">
                <h2 className={`todo-title todo-tasks__title m-3 p-0`}>
                    Список задач:
                </h2>

                <ul className={`todo-list todo-tasks__list list-unstyled p-3`}>
                    {tasks.map((item, idx) =>
                        <li key={idx} className={`todo-list__item card`}>
                            <h3 className="card-title text-decoration-underline">
                                {item}
                            </h3>

                            <div className="card-body">
                                <p>
                                    Это тело карточки
                                </p>

                                <button className="card-btn btn-danger mx-2 py-1 px-3" onClick={() => {this.removeTask(item)}} key={idx}>
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
