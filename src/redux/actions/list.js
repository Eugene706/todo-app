import axios from 'axios';

export const setLists = (payload) => ({
  type: 'SET_LISTS',
  payload,
});

export const setActiveLists = (payload) => ({
  type: 'SET_ACTIVE_LISTS',
  payload,
});

export const fetchLists = () => (dispatch) => {
  const headersConf = { headers: { token: localStorage.getItem('token') } };

  axios.get('https://todo-backend-eugene.herokuapp.com/user/lists', headersConf).then(({ data }) => {
    dispatch(setLists(data.data));
  });
};

export const createList = (list) => (dispatch) => {
  const postData = {
    list: list,
  };
  const headersConf = { headers: { token: localStorage.getItem('token') } };

  axios.post('https://todo-backend-eugene.herokuapp.com/lists', postData, headersConf).then(({ data }) => {
    dispatch(fetchLists());
  });
};

export const editList = (list, id) => (dispatch) => {
  const postData = {
    list: list,
  };
  const headersConf = { headers: { token: localStorage.getItem('token') } };

  axios.patch(`https://todo-backend-eugene.herokuapp.com/lists/${id}`, postData, headersConf).then(({ data }) => {
    dispatch(fetchLists());
  });
};

export const deleteList = (id) => (dispatch) => {
  const headersConf = { headers: { token: localStorage.getItem('token') } };

  axios.delete(`https://todo-backend-eugene.herokuapp.com/lists/${id}`, headersConf).then(({ data }) => {
    dispatch(fetchLists());
    dispatch(setActiveLists(0));
  });
};
