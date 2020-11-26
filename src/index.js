import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import reportWebVitals from './reportWebVitals';

import TaskBoard from './pages/TaskBoard/TaskBoard';

const tasks = [
  {
    tasks: ['ТЕКСТ1', 'ТЕКСТ2', 'ТЕКСТ3', 'ТЕКСТ4'],
  },
  {
    tasks: ['ТЕКСТ5', 'ТЕКСТ6', 'ТЕКСТ7', 'ТЕКСТ8', 'ТЕКСТ9', 'ТЕКСТ10'],
  },
];

ReactDOM.render(
  <React.StrictMode>
    <TaskBoard tasks={tasks} />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
