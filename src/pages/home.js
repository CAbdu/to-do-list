import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/css/home.css';
import '../components/css/modal.css';
import time from '../components/images/time.png'
import Modal from '../components/Modal/Modal'
import ColorButton from '../components/helpers/colorButton';

function ToDoList() {
  const [newTask, setNewTask] = useState('');
  const [toDoList, setToDoList] = useState([]);
  

  function handleNewTask(event) {
    setNewTask(event.target.value);
  }

  function handleAddTask() {
    setToDoList([...toDoList, newTask]);
    setNewTask("");
  }

  function handleDeleteTask(index) {
    const updatedList = [...toDoList];
    updatedList.splice(index, 1);
    setToDoList(updatedList);
  }

  // const handleClick = () => {
  //   console.log('okok');
  // };

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  
  return (
    <div>
      <h1 className="titre">
        <Link to="/"> To-Do List </Link>
      </h1>
      <div className="addTask">
        <input
          className="enterTask"
          type="text"
          value={newTask}
          onKeyDown={handleKeyDown}
          onChange={handleNewTask}
        />
        <button className="add-task-button" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <ul>
        {toDoList.map((task, index) => (
          <li className="tasks"
            key={index}>
              {task}
             
        
              <ColorButton
                imageAlt="Color Wheel"
                onClick={toggleModal} 
               
              />
               {modal && (<Modal/>)}
              


              <img className='time-task' src={time} alt='time'/>
            
            <button
              className="delete-task-button"
              onClick={() => handleDeleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
