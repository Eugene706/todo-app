import { useDispatch } from 'react-redux'
import { logoutUser } from '../redux/actions/user';
import { Link } from 'react-router-dom'

import Logo from '../img/Logo.svg';
import exit from '../img/exit.png';


function Header() {
  const dispatch = useDispatch()
  const date = new Date();

  const onExit = () => {
    dispatch(logoutUser());
  }
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__content">
          <div className="logo">
            <img src={Logo} alt="To do" className="logo" />
          </div>
          <div className="header__block">
            <div className="date">{date.toString().slice(4, 15)}</div>
            <Link to="/login">
              <img src={exit} alt="exit" className="exit" onClick={onExit} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
