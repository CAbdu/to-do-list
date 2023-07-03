import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/css/home.css';
import ColorButton from '../components/helpers/colorButton';
import time from '../components/images/time.png'
import '../components/helpers/togglePopUp';
import PopUp from '../components/helpers/togglePopUp';

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
  };

 
  const [showPopUp, setShowPopUp] = useState(false);

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  console.log(togglePopUp);
  
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
                onClick={togglePopUp} 
               
              />
               {PopUp}
              


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
