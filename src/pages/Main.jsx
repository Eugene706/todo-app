/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Header, LeaftBar, RightBar } from '../componets';
import { fetchLists } from '../redux/actions/list';
import { loadUser } from '../redux/actions/user';

function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
    dispatch(fetchLists());
  }, []);
  return (
    <div className="wraper">
      <Header />
      <LeaftBar />
      <RightBar />
    </div>
  );
}

export default Main;
