import axios from 'axios';

export const setTasks = (payload) => ({
  type: 'SET_TASKS',
  payload,
});

export const fetchTasks = (listId) => (dispatch) => {
  const headersConf = { headers: { token: localStorage.getItem('token') } };

  axios.get(`https://todo-backend-eugene.herokuapp.com/tasks/${listId}`, headersConf).then(({ data }) => {
    dispatch(setTasks(data.data));
  });
};

export const createTasks = (listId, task) => (dispatch) => {
  const headersConf = { headers: { token: localStorage.getItem('token') } };

  const postData = {
    task: task,
  };

  axios.post(`https://todo-backend-eugene.herokuapp.com/tasks/${listId}`, postData, headersConf).then(({ data }) => {
    dispatch(fetchTasks(listId));
  });
};

export const editTask = (id, listId, task, completed) => (dispatch) => {
  const postData = {
    task: task,
    completed: completed,
  };
  const headersConf = { headers: { token: localStorage.getItem('token') } };

  axios.patch(`https://todo-backend-eugene.herokuapp.com/tasks/${id}`, postData, headersConf).then(({ data }) => {
    console.log(data);
    dispatch(fetchTasks(listId));
  });
};

export const deleteTask = (id, listId) => (dispatch) => {
  const headersConf = { headers: { token: localStorage.getItem('token') } };

  axios.delete(`https://todo-backend-eugene.herokuapp.com/tasks/${id}`, headersConf).then(({ data }) => {
    console.log(data);
    dispatch(fetchTasks(listId));
  });
};
