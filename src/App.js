import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginPage, HomePage } from './pages/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route path='/home' component={HomePage} />
      </Switch>
    </ Router>
  );
}

export default App;
