import { combineReducers } from 'redux';

import user from './user';
import lists from './list';
import tasks from './task';

const rootReducer = combineReducers({
  user,
  lists,
  tasks,
});

export default rootReducer;
