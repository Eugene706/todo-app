import { Route, Switch } from 'react-router';
import { Registration, Login, Main } from './pages';
import { PrivateRoute } from './privatRoute/PrivateRoute'

function App() {
  return (
    <Switch>
      <Route path="/registration" component={Registration} exact />
      <Route path="/login" component={Login} exact />
      <PrivateRoute path="/" component={Main} exact />
    </Switch>
  );
}

export default App;
