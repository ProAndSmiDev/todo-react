import * as React from 'react';

export default class ToDoAddTask extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: this.props.tasks,
        };
        this.addTask = this.addTask.bind(this);
    };

    addTask(name) {
        const addedTasks = this.props.tasks.unshift(name);

        this.setState({
            tasks: addedTasks,
        });
    }

    componentDidMount() {
        const taskName = document.querySelector('.todo-form__input').getAttribute('value');

        console.log(taskName);
    }

    render() {
        return (
            <section className="todo-task-add todo-main__task-add mt-5">
                <h2 className="todo-title todo-task-add__title m-3 p-0">
                    Добавить задачу:
                </h2>

                <div className="form-group p-3 d-flex flex-column todo-form todo-task-add__form">
                    <input type="text" placeholder={'Введите название задачи'} className={'form-control todo-form__input'}/>
                    <textarea name="task" id="task" cols="30" rows="10" placeholder={'Введите текст задачи'} className={'form-control todo-form__textarea'}></textarea>

                    <button className="form-btn btn-success px-3 py-1 mt-3 align-self-end todo-form__btn" onClick={() => this.addTask()}>
                        Add task
                    </button>
                </div>
            </section>
        );
    };
};
