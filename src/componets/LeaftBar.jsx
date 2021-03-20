import { useState } from 'react';
import { List } from './index';
import { useDispatch, useSelector } from 'react-redux';

import calendar from '../img/calendar-check.svg';
import user from '../img/user.svg';
import caret from '../img/arrow.svg';
import { createList } from '../redux/actions/list';

function LeaftBar() {
  const dispatch = useDispatch();

  const lists = useSelector(({ lists }) => lists.lists);

  console.log(lists);

  const [arrow, setArrow] = useState(true);
  const [listInpVisible, setListInpVisible] = useState(false);
  const [listInpVal, setListInpVal] = useState('');

  const arrowDirection = () => {
    setArrow(!arrow);
  };

  const listInputDisplay = () => {
    setListInpVisible(!listInpVisible);
  };

  const KeyDown = (event) => {
    if (event.key === 'Enter') {
      if (!listInpVal) {
        alert('Введите название списка');
        return;
      }
      dispatch(createList(listInpVal));
      setListInpVal('');
      setListInpVisible(false);
    }
  };

  return (
    <div className="left-content">
      <div className="left-content__container">
        <div className="todo">
          <img src={calendar} alt="todo" className="calendar" />
          <h1 className="todo__text">To do</h1>
        </div>
        <div className="list__header">
          <img src={user} alt="user" className="user" />
          <button className="list__button" onClick={arrowDirection}>
            <h2 className="list_title">Lists</h2>
            <img src={caret} alt="arrow" className={`arrow ${arrow ? '' : 'rotated'}`} />
          </button>
        </div>
        <div className="list">
          <div className="nav">
            <ul className="list__item">
              {arrow &&
                lists.length &&
                lists.map((obj, index) => (
                  <List id={obj._id} index={index} item={obj.list} key={`${index}_${obj.list}`} />
                ))}
            </ul>
          </div>
          <div className="add-list">
            {arrow && listInpVisible && (
              <input
                autoFocus
                type="text"
                className="list-input"
                value={listInpVal}
                onChange={(e) => setListInpVal(e.target.value)}
                onKeyDown={KeyDown}
              />
            )}
            <button className="add-item" onClick={listInputDisplay}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaftBar;
