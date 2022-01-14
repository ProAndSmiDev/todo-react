import React, { Component } from 'react';
import ToDoButton from '../ToDoUI/ToDoButton';

export default class ToDoTask extends Component {
    render() {
        return (
            <li className={`todo-list__item card`}>
                <h3 className="card-title text-decoration-underline">
                    {this.props.taskName}
                </h3>

                <div className="card-body">
                    <p>
                        Это тело карточки
                    </p>

                    <ToDoButton
                        cName={"card-btn btn-danger"}
                        btnText={'Remove'}
                        btnEvent={() => this.props.removeTask(this.props.taskName)}
                    />
                </div>
            </li>
        );
    };
}
