import axios from 'axios';

export const setUser = (payload) => ({
  type: 'SET_USER',
  payload,
});

export const setLoadUser = (payload) => ({
  type: 'SET_LOAD_USER',
  payload,
});

export const loadUser = () => (dispatch) => {
  if (localStorage.getItem('token')) {
    axios
      .get('https://todo-backend-eugene.herokuapp.com/user/me', { headers: { token: localStorage.getItem('token') } })
      .then(({ data }) => {
        dispatch(setUser(data.data));
      });
  } else {
    console.log('token not found');
  }
};

export const registerUser = (email, password) => (dispatch) => {
  const postData = {
    email: email,
    password: password,
  };
  axios.post('https://todo-backend-eugene.herokuapp.com/auth/register', postData).then(({ data }) => {
    console.log(data);
  });
};

export const loginUser = (email, password) => (dispatch) => {
  const postData = {
    email: email,
    password: password,
  };
  axios.post('https://todo-backend-eugene.herokuapp.com/auth/login', postData).then(({ data }) => {
    localStorage.setItem('token', data.data.token);
    dispatch(loadUser(data.data));
  });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(setUser({}));
  dispatch(setLoadUser(false));
};
