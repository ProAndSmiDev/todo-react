import * as React from 'react';

export function ToDoAddTask() {
    return (
        <section className="todo-task-add todo-main__task-add mt-5">
            <h2 className="todo-title todo-task-add__title m-3 p-0">
                Добавить задачу:
            </h2>

            <div className="form-group p-3 d-flex flex-column todo-form todo-task-add__form">
                <input type="text" placeholder={'Введите название задачи'} className={'form-control todo-form__input'}/>
                <textarea name="task" id="task" cols="30" rows="10" placeholder={'Введите текст задачи'} className={'form-control todo-form__textarea'}></textarea>

                <button className="form-btn btn-success btn-outline-light px-3 py-1 mt-3 align-self-end todo-form__btn">
                    Add task
                </button>
            </div>
        </section>
    );
}
