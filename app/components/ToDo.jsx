import React, { Component } from 'react';
import './styles/ToDo.scss';
import ToDoHeader from './header/ToDoHeader';
import ToDoMain from './main/ToDoMain';
import ToDoFooter from './footer/ToDoFooter';

export default class ToDo extends Component {
    render() {
        return (
            <div className={`todo`}>
                <ToDoHeader cName={`todo__header`}/>
                <ToDoMain cName={`todo__main`}/>
                <ToDoFooter cName={`todo__footer`}/>
            </div>
        );
    }
}
