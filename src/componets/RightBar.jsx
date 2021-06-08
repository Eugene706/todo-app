import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTasks } from '../redux/actions/task';
import { Task, TasksHeader } from './index';

function RightBar() {
  const dispatch = useDispatch();

  const [taskInpVisible, setTaskInpVisible] = useState(false);
  const [taskInpVal, setTaskInpVal] = useState('');

  const lists = useSelector(({ lists }) => lists.lists);
  const activeList = useSelector(({ lists }) => lists.activeListNum);

  const tasks = useSelector(({ tasks }) => tasks.tasks);

  console.log(tasks);
  const taskInputDisplay = () => {
    setTaskInpVisible(!taskInpVisible);
  };

  const KeyDown = (event) => {
    if (event.key === 'Enter') {
      if (!taskInpVal) {
        alert('Введите задачу');
        return;
      }
      dispatch(createTasks(lists[activeList]._id, taskInpVal));
      setTaskInpVal('');
      setTaskInpVisible(false);
    }
  };

  return (
    <div className="right-content">
      <div className="right-content__container">
        {activeList !== null && lists[activeList] !== undefined && (
          <TasksHeader title={lists[activeList].list} id={lists[activeList]._id} />
        )}
        <ul className="tasks-list">
          {tasks.length !== 0 &&
            tasks.map((obj, index) => (
              <Task listId={obj.list} id={obj._id} task={obj.task} completed={obj.completed} key={`${index}_${obj.task}`} />
            ))}
        </ul>
        {taskInpVisible && (
          <input
            autoFocus
            type="text"
            className="list-input"
            value={taskInpVal}
            onChange={(e) => setTaskInpVal(e.target.value)}
            onKeyDown={KeyDown}
          />
        )}
        {activeList !== null && (
          <button className="add-task__button" onClick={taskInputDisplay}>
            <span className="plus__button">+</span>
            <span className="add__button">Добавить пункт</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default RightBar;
