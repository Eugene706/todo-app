/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { registerUser } from '../redux/actions/user';

import calendar from '../img/calendar-check.svg';

function Registration() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const [emailWarning, setEmailWarning] = useState(' ');
  const [passwordWarning, setPasswordWarning] = useState(' ');
  const [password2Warning, setPassword2Warning] = useState(' ');

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
  }, [email]);

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
  }, [password]);

  useEffect(() => {
    if (password2.length > 0) {
      if (password !== password2) {
        setPassword2Warning('Пароли не совпадают');
      } else {
        setPassword2Warning('');
      }
    }
  }, [password2]);

  const Validations = () => {
    if (!emailWarning && !passwordWarning && !password2Warning) {
      dispatch(registerUser(email, password));
    }
  };

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
              placeholder="hromadskyi@gmail.com"
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
            <label htmlFor="psw-repeat">
              <b>Repeat Password:</b>
            </label>
            <input
              className="inp"
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
            <p className="warning">{password2Warning}</p>
          </div>
          <button className="signIn" onClick={Validations}>
            Log In
          </button>
          <Link to="/login">
            <button className="noAccount">already have an account?</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Registration;
