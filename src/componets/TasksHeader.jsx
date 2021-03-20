import { useRef } from 'react';
import { useDispatch } from 'react-redux'

import delete1 from '../img/delete.svg';
import { deleteList, editList } from '../redux/actions/list';

function TasksHeader({ title, id }) {
  const dispatch = useDispatch()
  const headerRef = useRef();

  const KeyDown = (event) => {
    if (event.key === 'Enter') {
      if (!headerRef.current.innerText) {
        headerRef.current.innerText = title;
      }
      dispatch(editList(headerRef.current.innerText, id));
      event.preventDefault();
    }
  };

  return (
    <div className="tasks__header">
      <h3
        className="tasks__header_text"
        contentEditable={true}
        suppressContentEditableWarning={true}
        onKeyDown={KeyDown}
        ref={headerRef}
      >
        {title}
      </h3>
      <button className="delete1" onClick={() => dispatch(deleteList(id))}>
        <img src={delete1} alt="delete1" />
      </button>
    </div>
  );
}

export default TasksHeader;
