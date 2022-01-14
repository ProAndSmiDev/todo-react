import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles.scss';
import 'bootstrap/scss/bootstrap.scss';
import ToDo from './components/ToDo';

window.addEventListener('load', () => {
    ReactDOM.render(<ToDo />, document.querySelector('.page'));
});
