import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { loginUser } from '../redux/actions/user';
import { useDispatch, useSelector } from 'react-redux';

import calendar from '../img/calendar-check.svg';

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailWarning, setEmailWarning] = useState(' ');
  const [passwordWarning, setPasswordWarning] = useState(' ');

  const user = useSelector(({ user }) => user.user);
  const isLoad = useSelector(({ user }) => user.isLoad);

  useEffect(() => {
    if (email.length > 0) {
      if (email.length <= 9) {
        setEmailWarning('Почта должна содержать не менее 9 символов');
      } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailWarning('Неверный формат почты');
      } else {
        setEmailWarning('');
      }
    }
  }, [email]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (password.length > 0) {
      if (password.length <= 6) {
        setPasswordWarning('Пароль должен быть не менее 6 символов');
      } else if (!/[0-9]/g.test(password)) {
        setPasswordWarning('Пароль должен быть с цифрами');
      } else if (!/[A-Z]/g.test(password)) {
        setPasswordWarning('Пароль должен быть с большими буквами');
      } else if (!/[a-z]/g.test(password)) {
        setPasswordWarning('Пароль должен быть с маленькими буквами');
      } else {
        setPasswordWarning('');
      }
    }
  }, [password]); // eslint-disable-line react-hooks/exhaustive-deps

  const Validations = () => {
    if (!emailWarning && !passwordWarning) {
      dispatch(loginUser(email, password));
    }
  };

  useEffect(() => {
    if (isLoad && user) {
      history.push('/');
    }
  }, [isLoad]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="registration">
      <div className="registration__container">
        <div className="circle"></div>
        <img src={calendar} alt="" className="calendar-reg" />
        <div className="registration__square">
          <div className="registration__form">
            <label htmlFor="email">
              <b>Email:</b>
            </label>
            <input
              className="inp"
              type="text"
              placeholder="sanya.pig@gmail.com"
              name="email"
              value={email.trim()}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="warning">{emailWarning}</p>
            <label htmlFor="psw">
              <b>Password:</b>
            </label>
            <input
              className="inp"
              type="password"
              placeholder="Enter Password"
              name="psw"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="warning">{passwordWarning}</p>
          </div>
          <button className="signIn" onClick={Validations}>
            Log In
          </button>
          <Link to="/registration">
            <button className="noAccount">no account?</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
