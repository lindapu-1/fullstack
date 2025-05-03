import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../store';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div className="list-group">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch(toggleTask(task.id))}
            />
            <label
              className={`form-check-label ${
                task.completed ? 'text-decoration-line-through' : ''
              }`}
            >
              {task.text}
            </label>
          </div>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => dispatch(deleteTask(task.id))}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList; 