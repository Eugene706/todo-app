import { useSelector, useDispatch } from 'react-redux';
import { setActiveLists } from '../redux/actions/list';
import { fetchTasks } from '../redux/actions/task';

function List({ item, index, id }) {
  const dispatch = useDispatch();

  const activeList = useSelector(({ lists }) => lists.activeListNum);

  const listClick = () => {
    dispatch(setActiveLists(index));
    dispatch(fetchTasks(id));
  };
  return (
    <li className="list__li">
      <span className={`item__text ${activeList === index ? 'item__text_active' : ''}`} onClick={listClick}>
        {item}
      </span>
    </li>
  );
}

export default List;
