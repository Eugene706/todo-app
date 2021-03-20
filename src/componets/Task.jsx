import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import delete1 from '../img/delete.svg';
import { deleteTask, editTask } from '../redux/actions/task';

function Tasks({ listId, id, task, completed }) {
  const dispatch = useDispatch();
  const taskRef = useRef();

  const [checkboxCheked, setCheckboxCheked] = useState(completed);

  const KeyDown = (event) => {
    if (event.key === 'Enter') {
      if (!taskRef.current.innerText) {
        taskRef.current.innerText = task;
      }
      dispatch(editTask(id, listId, taskRef.current.innerText, completed));
      event.preventDefault();
    }
  };

  const checkboxChange = () => {
    setCheckboxCheked(!checkboxCheked);
    dispatch(editTask(id, listId, task, !checkboxCheked));
  };
  return (
    <li className="task">
      <input type="checkbox" className="checkbox" onChange={checkboxChange} checked={checkboxCheked} />
      <label
        className="container"
        contentEditable={true}
        suppressContentEditableWarning={true}
        onKeyDown={KeyDown}
        ref={taskRef}
      >
        {task}
      </label>
      <button className="delete-task" onClick={() => dispatch(deleteTask(id, listId))}>
        <img src={delete1} alt="delete1" />
      </button>
    </li>
  );
}

export default Tasks;
